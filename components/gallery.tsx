"use client";
import Image from 'next/image';
import {useCallback,useEffect,useRef,useState} from 'react';
const photos = [
  {src:'agafay-couple.webp', category:'Couples', title:'À deux, face à l’horizon', location:'Désert d’Agafay'},
  {src:'riad-pool-portrait.webp', category:'Portraits', title:'Au bord de l’eau', location:'Un riad à Marrakech'},
  {src:'riad-seated-portrait.webp', category:'Portraits', title:'Une pause, un regard', location:'Un riad à Marrakech'},
];


export default function Gallery(){
 const [filter,setFilter]=useState('Tout');
 const [slide,setSlide]=useState(0);
 const [active,setActive]=useState<number|null>(null);
 const viewport=useRef<HTMLDivElement>(null);
 const story=useRef<HTMLDivElement>(null);
 const stage=useRef<HTMLDivElement>(null);
 const track=useRef<HTMLDivElement>(null);
 const [reduced,setReduced]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null);
 const position=useRef(0);
 const items=photos.map((photo,index)=>({...photo,index})).filter(p=>filter==='Tout'||p.category===filter);
 const goTo=useCallback((next:number)=>{
  const outer=story.current,inner=stage.current;if(!outer||!inner)return;
  const target=Math.max(0,Math.min(items.length-1,next));
  if(reduced){position.current=target;setSlide(target);track.current?.style.setProperty('transform',`translate3d(${-target*100}%,0,0)`);return;}
  const travel=Math.max(0,outer.offsetHeight-inner.offsetHeight);
  const start=window.scrollY+outer.getBoundingClientRect().top-24;
  window.scrollTo({top:start+(items.length>1?target/(items.length-1)*travel:0),behavior:'smooth'});
 },[items.length,reduced]);
 useEffect(()=>{
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const change=()=>setReduced(preference.matches);change();
  preference.addEventListener('change',change);return()=>preference.removeEventListener('change',change);
 },[]);
 useEffect(()=>{
  position.current=0;setSlide(0);
  if(reduced){track.current?.style.setProperty('transform','translate3d(0,0,0)');return;}
  let frame=0;
  const update=()=>{
   frame=0;const outer=story.current,inner=stage.current,rail=track.current;if(!outer||!inner||!rail)return;
   const travel=Math.max(1,outer.offsetHeight-inner.offsetHeight);
   const progress=Math.max(0,Math.min(1,(24-outer.getBoundingClientRect().top)/travel));
   const offset=progress*(items.length-1);
   rail.style.transform=`translate3d(${-offset*100}%,0,0)`;
   const next=Math.round(offset);if(next!==position.current){position.current=next;setSlide(next);}
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule);
  const observer=new ResizeObserver(schedule);if(stage.current)observer.observe(stage.current);
  update();
  return()=>{window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);observer.disconnect();cancelAnimationFrame(frame);};
 },[filter,items.length,reduced]);
 useEffect(()=>{if(active!==null)dialog.current?.showModal();},[active]);
 const close=()=>{dialog.current?.close();setActive(null);};
 return <><section id="portfolio" className="section-shell portfolio scroll-mt-8">
  <div className="portfolio-heading"><div className="eyebrow">FRAGMENTS D’HISTOIRES</div><h2>Les instants passent.<br/><em>Les images restent.</em></h2><p>Un aperçu de nos rencontres, à travers Marrakech et ses alentours.</p></div>
  <div className="filters" role="group" aria-label="Filtrer les photographies">{['Tout',...new Set(photos.map(photo=>photo.category))].map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f} className={filter===f?'selected':''}>{f}</button>)}</div>
  <div ref={story} className={`gallery-slider scroll-story${reduced?' reduced':''}`} style={{height:!reduced&&items.length>1?`${100+(items.length-1)*65}svh`:'auto'}} role="region" aria-roledescription="carrousel" aria-label="Photographies Linagraphy">
   <div ref={stage} className="slider-stage"><p id="slider-help" className="slider-help">Descendez dans la page : les images glissent au fil de votre découverte.</p>
   <div className="slider-viewport" ref={viewport} tabIndex={0} aria-label="Défilement des photos" aria-describedby="slider-help" onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();goTo(position.current+(e.key==='ArrowRight'?1:-1));}}}>
    <div className="slider-track" ref={track}>{items.map((p,i)=><div key={p.src} className="gallery-slide" role="group" aria-roledescription="diapositive" aria-label={`${i+1} sur ${items.length}`} aria-hidden={i!==slide}><button className="slider-photo" tabIndex={i===slide?0:-1} onClick={()=>setActive(p.index)} aria-label={`Agrandir : ${p.title}`}><Image src={`/images/${p.src}`} alt={p.title} width={1400} height={1600} sizes="88vw"/><span className="slider-caption"><span>{p.title}<small>{p.location}</small></span><span aria-hidden="true">↗</span></span></button></div>)}</div>
   </div>
   <div className="slider-controls"><div className="slider-arrows"><button onClick={()=>goTo(slide-1)} disabled={slide===0} aria-label="Photo précédente">←</button><button onClick={()=>goTo(slide+1)} disabled={slide===items.length-1} aria-label="Photo suivante">→</button></div><div className="slider-dots" aria-label="Choisir une photo">{items.map((p,i)=><button key={p.src} className={i===slide?'current':''} onClick={()=>goTo(i)} aria-label={`Afficher la photo ${i+1}`} aria-pressed={i===slide}><span/></button>)}</div><span className="slider-count" role="status" aria-live="polite">{String(slide+1).padStart(2,'0')} / {String(items.length).padStart(2,'0')}</span></div>
  </div></div>
  <p className="portfolio-note">Chaque séance est une nouvelle rencontre. La prochaine pourrait être la vôtre.</p>
 </section>
 <dialog ref={dialog} onCancel={close} onClick={e=>{if(e.target===e.currentTarget)close();}} className="lightbox" aria-label="Photographie agrandie"><button className="lightbox-close" onClick={close} autoFocus aria-label="Fermer la photographie">Fermer ×</button>{active!==null&&<><img src={`/images/${photos[active].src}`} alt={photos[active].title}/><p>{photos[active].title} · {photos[active].location}</p></>}</dialog></>;
}
