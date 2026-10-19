'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {Arrow,MenuIcon} from './icons';
const links=[['Services','/services'],['Portfolio','/portfolio'],['Conseils','/conseils'],['Blog','/blog'],['Contact','/contact']];
export function SiteHeader(){const path=usePathname();const [open,setOpen]=useState(false);const toggle=useRef<HTMLButtonElement>(null);
useEffect(()=>{if(!open)return;const listener=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}};document.addEventListener('keydown',listener);return()=>document.removeEventListener('keydown',listener);},[open]);
const nav=()=>links.map(([label,href])=><Link key={href} href={href} aria-current={path===href||path.startsWith(href+'/')?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>);
return <><a href="#main" className="skip-link">Aller au contenu</a><div className="topbar">DES HISTOIRES VRAIES. UNE LUMIÈRE UNIQUE. <span>MARRAKECH, MAROC</span></div><header className="header"><Link href="/" onClick={()=>setOpen(false)} className="wordmark" aria-label="Linagraphy, accueil">lina<span>graphy</span><i>PHOTOGRAPHIE · MARRAKECH</i></Link><nav className="desktop-nav" aria-label="Navigation principale">{nav()}</nav><Link href="/contact" className="header-cta">Votre séance commence ici <Arrow/></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Fermer le menu':'Ouvrir le menu'} onClick={()=>setOpen(!open)}><span>{open?'Fermer':'Menu'}</span><MenuIcon open={open}/></button></header><nav id="mobile-nav" hidden={!open} className="mobile-nav" aria-label="Navigation mobile">{nav()}</nav></>}

const photoSpots=[
 ['Séance photo de couple','/services/couple'],
 ['Séance photo dans les Souks','/services/souks'],
 ['Séance photo désert d’Agafay','/services/agafay'],
 ['Séance photo et dîner à Agafay','/services/sous-les-etoiles'],
 ['Séance photo au jardin Majorelle','/services/majorelle'],
 ['Séance photo au Palais de la Bahia','/services/palais-bahia'],
 ['Séance photo dans les meilleurs hôtels','/services/hotel'],
 ['Séance photo intérieure marocaine','/services/interieur'],
];
const footerServices=[
 ['Photographe beauté','/services/beaute'],
 ['Photographe Lifestyle','/services/lifestyle'],
 ['Photographe Packshot','/services/packshot'],
 ['Photographe de portrait','/services/portrait'],
 ['Photographe de mariage','/services/mariage'],
 ['Photographe nouveau-né','/services/nouveau-ne'],
 ['Photographe de fiançailles','/services/fiancailles'],
 ['Photographe de célébrités','/services/celebrites'],
];
function FooterLinks({items,label}:{items:string[][];label:string}){return <nav aria-label={label}><ul>{items.map(([text,path])=><li key={path}><Link href={path}><span aria-hidden="true">· </span>{text}</Link></li>)}</ul></nav>}
export function SiteFooter(){return <footer className="reference-footer">
 <svg className="footer-curve" viewBox="0 0 1920 160" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 0 H1920 V20 Q960 280 0 20 Z"/></svg>
 <div className="section-shell reference-footer-grid">
  <section><h2>Meilleurs spots photos</h2><FooterLinks items={photoSpots} label="Meilleurs spots photos"/></section>
  <section><h2>Nos Services</h2><FooterLinks items={footerServices} label="Services de photographie"/></section>
  <section className="footer-contact-column"><h2>Contactez-nous</h2><FooterLinks items={[["Faq","/faq/"],["Portfolio","/portfolio/"],["À propos de nous","/a-propos/"]]} label="Informations et contact"/>
   
   <address><a href="tel:+212776090380">+212 776 090 380</a><a href="mailto:Hello@linagraphy.com">Hello@linagraphy.com</a><a href="https://www.instagram.com/photo_graphe.z4/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @photo_graphe.z4 (nouvel onglet)">Instagram · @photo_graphe.z4</a></address>
  </section>
 </div>
 <div className="section-shell reference-footer-bottom"><span>© {new Date().getFullYear()} Linagraphy · <Link href="/">Photographe Marrakech</Link></span><a href="#main">Retour en haut ↑</a></div>
 </footer>}
