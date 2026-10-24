'use client';
import Image from 'next/image';
import {useRef,useState} from 'react';

const images=[
 {id:'bahia',title:'Arches & zelliges',place:'Palais Bahia',category:'Architecture',author:'Tugce Turan',url:'https://www.pexels.com/photo/courtyard-of-bahia-palace-in-marrakesh-morocco-25748823/'},
 {id:'souks',title:'La lumière des souks',place:'Médina de Marrakech',category:'Souks & artisanat',author:'Harriet B.',url:'https://www.pexels.com/photo/a-market-with-many-lamps-hanging-from-the-ceiling-18687094/'},
 {id:'majorelle',title:'Une parenthèse de bleu',place:'Jardin Majorelle',category:'Jardins',author:'Piotr Arnoldes',url:'https://www.pexels.com/photo/bright-blue-villa-in-lush-green-garden-in-daylight-6441178/'},
 {id:'ben-youssef',title:'L’art des perspectives',place:'Médersa Ben Youssef',category:'Architecture',author:'Furknsaglam',url:'https://www.pexels.com/photo/ben-youssef-madrasa-in-marrakesh-20686584/'},
 {id:'koutoubia',title:'La silhouette de Marrakech',place:'La Koutoubia',category:'Architecture',author:'Tugce Turan',url:'https://www.pexels.com/photo/the-koutoubia-mosque-and-palm-trees-in-marrakesh-morocco-25748808/'},
 {id:'el-badi',title:'La mémoire des murs',place:'Palais El Badi',category:'Architecture',author:'abdellatif jellab',url:'https://www.pexels.com/photo/exploring-ruins-of-el-badi-palace-in-marrakech-35784107/'}
];
export default function MarrakechEditorial(){
 const [filter,setFilter]=useState('Tout');const [active,setActive]=useState<typeof images[number]|null>(null);const dialog=useRef<HTMLDialogElement>(null);const opener=useRef<HTMLButtonElement|null>(null);
 const close=()=>{dialog.current?.close();setActive(null);opener.current?.focus();};
 return <section id="inspirations" className="editorial-collection section-shell" aria-labelledby="editorial-title"><header><div className="eyebrow">CARNET D’INSPIRATION · MARRAKECH</div><h2 id="editorial-title">Une ville.<br/><em>Mille façons de la voir.</em></h2><p>Architecture, jardins et lumières des souks : explorez les ambiances de Marrakech pour imaginer votre séance. Cette sélection d’images d’inspiration créditées complète les séances PhotographZ4 présentées plus haut.</p></header>
 <div className="filters" role="group" aria-label="Filtrer les inspirations de Marrakech">{['Tout','Architecture','Jardins','Souks & artisanat'].map(c=><button key={c} aria-pressed={c===filter} className={c===filter?'selected':''} onClick={()=>setFilter(c)}>{c}</button>)}</div>
 <div className="editorial-mosaic">{images.filter(p=>filter==='Tout'||p.category===filter).map(p=><figure key={p.id}><button onClick={e=>{opener.current=e.currentTarget;setActive(p);dialog.current?.showModal();}} aria-label={'Agrandir : '+p.place}><Image src={'/images/editorial-'+p.id+'.webp'} alt={p.title+' — '+p.place} width={2400} height={{bahia:3201,souks:3595,majorelle:3614,'ben-youssef':3601,koutoubia:3200,'el-badi':3200}[p.id]} sizes="(max-width:640px) 88vw,(max-width:1000px) 43vw,28vw"/><span className="editorial-overlay"><span>{p.place}<small>{p.category}</small></span><span aria-hidden="true">↗</span></span></button><figcaption><h3>{p.title}</h3><a href={p.url} target="_blank" rel="noopener noreferrer">{p.author} · Pexels ↗<span className="sr-only"> (nouvel onglet)</span></a></figcaption></figure>)}</div>
 <dialog ref={dialog} className="lightbox" aria-label="Inspiration de Marrakech agrandie" onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===e.currentTarget)close();}}><button className="lightbox-close" onClick={close} autoFocus>Fermer ×</button>{active&&<><img src={'/images/editorial-'+active.id+'.webp'} alt={active.title+' — '+active.place}/><p>{active.place} · Photo : <a href={active.url} target="_blank" rel="noopener noreferrer">{active.author} / Pexels ↗</a></p></>}</dialog></section>
}
