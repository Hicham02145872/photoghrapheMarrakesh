'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {useLanguage} from './language-provider';
import {services} from '@/lib/content';

const momentSlugs=['couple','famille','mariage','fiancailles','solo','evjf'];
const placeSlugs=['riad','majorelle','souks','hotel','palais-bahia','agafay','sous-les-etoiles','interieur'];
const english:Record<string,string>={couple:'Couples',famille:'Families',mariage:'Weddings',fiancailles:'Engagements',solo:'Solo traveller',evjf:'Friends & bachelorette',riad:'Riad photoshoot',majorelle:'Majorelle Garden',souks:'The souks',hotel:'Hotel photoshoot','palais-bahia':'Bahia Palace',agafay:'Agafay desert','sous-les-etoiles':'Under the stars',interieur:'Moroccan interiors',beaute:'Beauty',lifestyle:'Lifestyle',packshot:'Products','nouveau-ne':'Newborn',celebrites:'Personalities',portrait:'Portraits'};
export default function HeaderNavigation({mobile=false,onNavigate}:{mobile?:boolean;onNavigate?:()=>void}){
 const path=usePathname();const {locale}=useLanguage();const en=locale==='en';
 const [expanded,setExpanded]=useState<string|null>(null);const [nested,setNested]=useState<string|null>(null);
 const root=useRef<HTMLDivElement>(null);const servicesButton=useRef<HTMLButtonElement>(null);const adviceButton=useRef<HTMLButtonElement>(null);
 const close=()=>{setExpanded(null);setNested(null);};
 useEffect(()=>{const outside=(e:PointerEvent)=>{if(root.current&&!root.current.contains(e.target as Node)){setExpanded(null);setNested(null);}};document.addEventListener('pointerdown',outside);return()=>document.removeEventListener('pointerdown',outside);},[]);
 const follow=()=>{close();onNavigate?.();};
 const serviceLinks=(slugs:string[])=>slugs.map(slug=>{const service=services.find(s=>s.slug===slug);return service&&<Link key={slug} href={'/services/'+slug} onClick={follow} aria-current={path==='/services/'+slug?'page':undefined}>{en?english[slug]:service.title}</Link>;});
 const id=mobile?'mobile':'desktop';
 return <div className="header-navigation" ref={root} onKeyDown={e=>{if(e.key==='Escape'&&expanded){e.preventDefault();e.stopPropagation();const target=expanded==='services'?servicesButton:adviceButton;close();target.current?.focus();}}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))close();}}>
  <div className="nav-dropdown"><div className="nav-dropdown-trigger"><Link href="/services" onClick={follow} aria-current={path.startsWith('/services')?'page':undefined}>Services</Link><button ref={servicesButton} type="button" aria-label={en?'Service menu':'Menu des services'} aria-expanded={expanded==='services'} aria-controls={id+'-services-dropdown'} onClick={()=>{setExpanded(expanded==='services'?null:'services');setNested(null);}}><span aria-hidden="true">⌄</span></button></div>
   <div id={id+'-services-dropdown'} className="nav-dropdown-panel" hidden={expanded!=='services'}>{serviceLinks(momentSlugs)}<button type="button" className="nav-submenu-toggle" aria-expanded={nested==='places'} aria-controls={id+'-places'} onClick={()=>setNested(nested==='places'?null:'places')}>{en?'Photoshoot locations':'Séance photo'}<span aria-hidden="true">{nested==='places'?'−':'+'}</span></button><div id={id+'-places'} className="nav-submenu-links" hidden={nested!=='places'}>{serviceLinks(placeSlugs)}</div><button type="button" className="nav-submenu-toggle" aria-expanded={nested==='other'} aria-controls={id+'-other'} onClick={()=>setNested(nested==='other'?null:'other')}>{en?'More services':'Autres prestations'}<span aria-hidden="true">{nested==='other'?'−':'+'}</span></button><div id={id+'-other'} className="nav-submenu-links" hidden={nested!=='other'}>{serviceLinks(services.map(s=>s.slug).filter(slug=>!momentSlugs.includes(slug)&&!placeSlugs.includes(slug)))}</div><Link className="nav-all-services" href="/services" onClick={follow}>{en?'View all services':'Voir tous les services'} ↗</Link></div>
  </div>
  <Link href="/portfolio" onClick={follow} aria-current={path==='/portfolio'?'page':undefined}>Portfolio</Link>
  <div className="nav-dropdown"><div className="nav-dropdown-trigger"><Link href="/conseils" onClick={follow} aria-current={path.startsWith('/conseils')?'page':undefined}>{en?'Advice':'Conseils'}</Link><button ref={adviceButton} type="button" aria-label={en?'Advice menu':'Menu des conseils'} aria-expanded={expanded==='advice'} aria-controls={id+'-advice-dropdown'} onClick={()=>{setExpanded(expanded==='advice'?null:'advice');setNested(null);}}><span aria-hidden="true">⌄</span></button></div><div id={id+'-advice-dropdown'} className="nav-dropdown-panel" hidden={expanded!=='advice'}><Link href="/services/sous-les-etoiles" onClick={follow}>{en?'Dinner under the stars':'Dîner sous les étoiles'}</Link><Link href="/conseils/maquillage" onClick={follow}>{en?'Makeup for your session':'Maquillage pour votre séance'}</Link><Link href="/conseils" className="nav-all-services" onClick={follow}>{en?'All our advice':'Tous nos conseils'} ↗</Link></div></div>
  <Link href="/blog" onClick={follow} aria-current={path.startsWith('/blog')?'page':undefined}>{en?'Journal':'Blog'}</Link><Link href="/contact" onClick={follow} aria-current={path==='/contact'?'page':undefined}>Contact</Link>
 </div>;
}
