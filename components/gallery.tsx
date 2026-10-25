'use client';
import Image from 'next/image';
import {useRef,useState} from 'react';
import imported from '@/lib/portfolio-photos.json';
const photos=[
 {src:'agafay-couple.webp',category:'Couples',title:'À deux, face à l’horizon',width:1066,height:1600},
 {src:'riad-pool-portrait.webp',category:'Portraits',title:'Au bord de l’eau',width:1066,height:1600},
 {src:'riad-seated-portrait.webp',category:'Portraits',title:'Une pause, un regard',width:1706,height:2560},
 ...imported
];
export default function Gallery(){
 const [filter,setFilter]=useState('Tout');const [active,setActive]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);const opener=useRef<HTMLButtonElement|null>(null);
 const items=photos.map((p,index)=>({...p,index})).filter(p=>filter==='Tout'||p.category===filter);
 const close=()=>{dialog.current?.close();setActive(null);opener.current?.focus();};
 return <section id="portfolio" className="section-shell portfolio photo-collection" aria-label="Portfolio PhotographZ4">
 <div className="portfolio-heading"><div className="eyebrow">FRAGMENTS D’HISTOIRES</div><h2>Les instants passent.<br/><em>Les images restent.</em></h2><p>Des portraits, des rencontres et des histoires à partager.</p></div>
 <div className="collection-toolbar"><div className="filters" role="group" aria-label="Filtrer les photographies">{['Tout','Couples','Portraits','Familles','Entre amis','Grossesse'].map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={filter===f} className={filter===f?'selected':''}>{f}</button>)}</div><p role="status" aria-live="polite">{items.length} photographies</p></div>
 <div className="client-photo-mosaic">{items.map(p=><button key={p.src} className="client-photo-tile" onClick={e=>{opener.current=e.currentTarget;setActive(p.index);dialog.current?.showModal();}} aria-label={'Agrandir : '+p.title}><Image src={'/images/'+p.src} alt={p.title} width={p.width} height={p.height} sizes="(max-width:600px) 88vw,(max-width:1000px) 43vw,28vw"/><span className="client-photo-caption"><span>{p.category}</span><span aria-hidden="true">↗</span></span></button>)}</div>
 <p className="portfolio-note">Chaque séance est une nouvelle rencontre. La prochaine pourrait être la vôtre.</p>
 <dialog ref={dialog} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===e.currentTarget)close();}} className="lightbox" aria-label="Photographie agrandie"><button className="lightbox-close" onClick={close} autoFocus>Fermer ×</button>{active!==null&&<><img src={'/images/'+photos[active].src} alt={photos[active].title}/><p>{photos[active].title}</p></>}</dialog>
 </section>;
}