import Image from 'next/image';
import Link from 'next/link';
import {Bilingual} from './language-provider';
import {Arrow} from './icons';

const places=[
 {name:'La Koutoubia',image:'koutoubia',tag:'LA VILLE OCRE',en:'THE OCHRE CITY',text:'La silhouette emblématique de Marrakech, entre ombre et lumière.',english:'The iconic silhouette of Marrakech, between light and shadow.',href:'/contact',width:1080,height:1620,source:'https://www.pinterest.com/pin/398639004537877011/'},
 {name:'Jardin Majorelle',image:'majorelle',tag:'LE BLEU & LE VÉGÉTAL',en:'BLUE & BOTANICAL',text:'Un dialogue de bleu profond, de lignes architecturales et de verdure.',english:'Deep blue, architectural lines and lush greenery in conversation.',href:'/services/majorelle',width:430,height:640,source:'https://www.pinterest.com/pin/130111876707470440/'},
 {name:'Palais Bahia',image:'bahia',tag:'L’ART DU DÉTAIL',en:'THE ART OF DETAIL',text:'Des arches, des zelliges et des perspectives pour imaginer votre ambiance.',english:'Arches, mosaics and perspectives to inspire your photographic mood.',href:'/services/palais-bahia',width:1517,height:1896,source:'https://www.pinterest.com/pin/1022035709202884188/'}
];
export default function MarrakechPlaces(){return <section id="lieux" className="marrakech-places section-shell" aria-labelledby="places-title">
 <div className="section-heading"><div><div className="eyebrow"><Bilingual fr="MARRAKECH, EN INSPIRATION" en="INSPIRED BY MARRAKECH"/></div><h2 id="places-title"><Bilingual fr={<>Des lieux iconiques.<br/><em>Une atmosphère à vous.</em></>} en={<>Iconic places.<br/><em>Your own atmosphere.</em></>}/></h2></div><p><Bilingual fr="Couleurs, matières, lumière. Trouvons le décor qui vous ressemble." en="Colour, texture, light. Let’s find the setting that feels like you."/></p></div>
 <div className="places-grid">{places.map((p,i)=><article className="place-card" key={p.image}><Link href={p.href} className="place-photo" aria-label={p.name}><Image src={'/images/pinterest-'+p.image+'.jpg'} alt={p.name+' — Marrakech'} width={p.width} height={p.height} sizes="(max-width:767px) 88vw,30vw"/><span className="place-number">0{i+1}</span><span className="place-discover"><Bilingual fr="Explorer ce lieu" en="Explore this place"/><Arrow/></span></Link><div className="eyebrow"><Bilingual fr={p.tag} en={p.en}/></div><h3><Link href={p.href}>{p.name}</Link></h3><p><Bilingual fr={p.text} en={p.english}/></p><a className="place-credit" href={p.source} target="_blank" rel="noopener noreferrer">Source : Pinterest ↗<span className="sr-only"> (nouvel onglet)</span></a></article>)}</div>
 <p className="places-note"><Bilingual fr="Photographies d’inspiration des lieux. L’accès et les autorisations de prise de vue sont à confirmer avant votre séance." en="Location inspiration photography. Access and photography permissions must be confirmed before your session."/></p>
 </section>}
