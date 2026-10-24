'use client';

import Image from 'next/image';
import {useEffect,useRef,useState} from 'react';
import type {ServicePhoto} from '@/lib/service-photos';

export default function ServiceGallery({photos,title}:{photos:ServicePhoto[];title:string}){
 const [active,setActive]=useState<number|null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const triggers=useRef<(HTMLButtonElement|null)[]>([]);
 const openedFrom=useRef(0);
 useEffect(()=>{
  if(active===null)return;
  const element=dialog.current;
  element?.showModal();
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  return()=>{document.body.style.overflow=previous;};
 },[active]);
 function close(){dialog.current?.close();setActive(null);triggers.current[openedFrom.current]?.focus();}
 function move(direction:number){setActive(value=>value===null?null:(value+direction+photos.length)%photos.length);}
 return <section id="galerie" className="service-gallery section-shell" aria-labelledby="service-gallery-title">
  <div className="service-section-heading"><div><span className="eyebrow">LUMIÈRES, GESTES & AMBIANCES</span><h2 id="service-gallery-title">Une envie <em>en images.</em></h2></div><p>Quelques inspirations pour imaginer votre projet. Cliquez sur une photo pour l’agrandir.</p></div>
  <div className={'service-gallery-grid'+(photos.length===1?' service-gallery-single':'')}>{photos.map((photo,index)=><figure key={photo.src}>
   <button className="service-gallery-photo" ref={element=>{triggers.current[index]=element;}} type="button" onClick={()=>{openedFrom.current=index;setActive(index);}} aria-label={'Agrandir : '+photo.alt}><Image src={photo.src} width={photo.width} height={photo.height} sizes="(max-width: 640px) 88vw, 44vw" alt={photo.alt}/><span aria-hidden="true">↗</span></button>
   <figcaption><span>{photo.caption}</span><a href={photo.source} target="_blank" rel="noreferrer">Inspiration · Pinterest ↗</a></figcaption>
  </figure>)}</div>
  <p className="service-gallery-note">Ces références d’ambiance nous aident à préparer votre projet. <a href="/portfolio">Découvrez aussi nos photographies dans le portfolio.</a></p>
  <dialog ref={dialog} className="service-lightbox" aria-label={'Photos d’inspiration — '+title} onCancel={event=>{event.preventDefault();close();}} onClick={event=>{if(event.target===event.currentTarget)close();}} onKeyDown={event=>{if(photos.length>1&&event.key==='ArrowRight'){event.preventDefault();move(1);}if(photos.length>1&&event.key==='ArrowLeft'){event.preventDefault();move(-1);}}}>
   {active!==null&&<div className="service-lightbox-content"><button type="button" className="service-lightbox-close" onClick={close} autoFocus>Fermer ×</button><Image src={photos[active].src} width={photos[active].width} height={photos[active].height} sizes="90vw" alt={photos[active].alt}/><div className="service-lightbox-caption"><p aria-live="polite">{photos[active].caption} <span>{active+1} / {photos.length}</span></p>{photos.length>1&&<div><button type="button" onClick={()=>move(-1)} aria-label="Photo précédente">←</button><button type="button" onClick={()=>move(1)} aria-label="Photo suivante">→</button></div>}</div></div>}
  </dialog>
 </section>;
}
