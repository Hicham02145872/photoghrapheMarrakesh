'use client';
import Link from 'next/link';
import Image from 'next/image';
import HeaderNavigation from './header-navigation';
import {useEffect,useRef,useState} from 'react';
import {Arrow,MenuIcon} from './icons';
import LocationMap from './location-map';
import {Bilingual, useLanguage} from './language-provider';
export function SiteHeader(){const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);const toggle=useRef<HTMLButtonElement>(null);
useEffect(()=>{if(!open)return;const listener=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}};document.addEventListener('keydown',listener);return()=>document.removeEventListener('keydown',listener);},[open]);
useEffect(()=>{const update=()=>setScrolled(window.scrollY>36);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update);},[]);
const {locale,setLocale}=useLanguage();
return <><a href="#main" className="skip-link"><Bilingual fr="Aller au contenu" en="Skip to content"/></a><div className="topbar"><Bilingual fr="DES HISTOIRES VRAIES. UNE LUMIÈRE UNIQUE." en="TRUE STORIES. A UNIQUE LIGHT."/> <span>MARRAKECH, MAROC</span></div><div className={"site-header-shell"+(scrolled?" is-scrolled":"")}><header className="header"><Link href="/" onClick={()=>setOpen(false)} className="brand-logo" aria-label="PhotographZ4, accueil"><Image src="/images/photographz4-transparent.png" width={1857} height={847} alt="PhotographZ4 — Capture, Create, Tell Stories" priority sizes="230px"/></Link><nav className="desktop-nav" aria-label="Navigation principale"><HeaderNavigation/></nav><Link href="/contact" className="header-cta"><Bilingual fr="Votre séance commence ici" en="Your session starts here"/> <Arrow/></Link><div className="language-switcher" role="group" aria-label="Choisir la langue"><button type="button" className={locale==='fr'?'active':''} onClick={()=>setLocale('fr')} aria-pressed={locale==='fr'}>🇫🇷 FR</button><button type="button" className={locale==='en'?'active':''} onClick={()=>setLocale('en')} aria-pressed={locale==='en'}>🇬🇧 EN</button></div><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Fermer le menu':'Ouvrir le menu'} onClick={()=>setOpen(!open)}><span>{open?'Fermer':'Menu'}</span><MenuIcon open={open}/></button></header><nav id="mobile-nav" hidden={!open} className="mobile-nav" aria-label="Navigation mobile"><HeaderNavigation mobile key={String(open)} onNavigate={()=>setOpen(false)}/><div className="mobile-language-switcher"><button type="button" onClick={()=>setLocale('fr')} className={locale==='fr'?'active':''}>🇫🇷 Français</button><button type="button" onClick={()=>setLocale('en')} className={locale==='en'?'active':''}>🇬🇧 English</button></div></nav></div></>}

const photoSpots=[
 ['Séance photo de couple','/services/couple','Couple photo session'],
 ['Séance photo dans les Souks','/services/souks','Photo session in the souks'],
 ['Séance photo désert d’Agafay','/services/agafay','Agafay desert photo session'],
 ['Séance photo et dîner à Agafay','/services/sous-les-etoiles','Photo session and dinner in Agafay'],
 ['Séance photo au jardin Majorelle','/services/majorelle','Majorelle Garden photo session'],
 ['Séance photo au Palais de la Bahia','/services/palais-bahia','Bahia Palace photo session'],
 ['Séance photo dans les meilleurs hôtels','/services/hotel','Photo session in Marrakech hotels'],
 ['Séance photo intérieure marocaine','/services/interieur','Moroccan interior photo session'],
];
const footerServices=[
 ['Photographe beauté','/services/beaute','Beauty photographer'],
 ['Photographe Lifestyle','/services/lifestyle','Lifestyle photographer'],
 ['Photographe Packshot','/services/packshot','Product photographer'],
 ['Photographe de portrait','/services/portrait','Portrait photographer'],
 ['Photographe de mariage','/services/mariage','Wedding photographer'],
 ['Photographe nouveau-né','/services/nouveau-ne','Newborn photographer'],
 ['Photographe de fiançailles','/services/fiancailles','Engagement photographer'],
 ['Photographe de célébrités','/services/celebrites','Celebrity photographer'],
];
function FooterLinks({items,label}:{items:string[][];label:string}){const {locale}=useLanguage();return <nav aria-label={label}><ul>{items.map(([text,path,en])=><li key={path}><Link href={path}><span aria-hidden="true">· </span>{locale==='en'&&en?en:text}</Link></li>)}</ul></nav>}
export function SiteFooter(){const {locale,setLocale}=useLanguage();return <footer className="reference-footer">
 <svg className="footer-curve" viewBox="0 0 1920 160" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 0 H1920 V20 Q960 280 0 20 Z"/></svg>
 <div className="section-shell reference-footer-grid">
  <section><h2><Bilingual fr="Meilleurs spots photos" en="Best photo spots"/></h2><FooterLinks items={photoSpots} label="Meilleurs spots photos"/></section>
  <section><h2><Bilingual fr="Nos Services" en="Our services"/></h2><FooterLinks items={footerServices} label="Services de photographie"/></section>
  <section className="footer-contact-column"><h2><Bilingual fr="Contactez-nous" en="Get in touch"/></h2><FooterLinks items={[["Faq","/faq/","FAQ"],["Portfolio","/portfolio/","Portfolio"],["À propos de nous","/a-propos/","About us"]]} label="Informations et contact"/>
   
   <address><a href="tel:+212776090380">+212 776 090 380</a><a href="mailto:hamidsos64@gmail.com">hamidsos64@gmail.com</a><a href="https://www.instagram.com/photo_graphe.z4/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @photo_graphe.z4 (nouvel onglet)">Instagram · @photo_graphe.z4</a></address>
  </section>
 </div>
 <div className="section-shell footer-map"><div><div className="eyebrow"><Bilingual fr="NOUS TROUVER" en="FIND US"/></div><h2>La Koutoubia,<br/><em>Marrakech.</em></h2></div><LocationMap compact/></div>
 <div className="section-shell reference-footer-bottom"><span>© {new Date().getFullYear()} Linagraphy · <Link href="/"><Bilingual fr="Photographe Marrakech" en="Marrakech photographer"/></Link></span><div className="footer-bottom-actions"><div className="language-switcher" role="group" aria-label="Choisir la langue"><button type="button" className={locale==='fr'?'active':''} onClick={()=>setLocale('fr')} aria-pressed={locale==='fr'}>🇫🇷 FR</button><button type="button" className={locale==='en'?'active':''} onClick={()=>setLocale('en')} aria-pressed={locale==='en'}>🇬🇧 EN</button></div><a href="#main"><Bilingual fr="Retour en haut ↑" en="Back to top ↑"/></a></div></div>
 </footer>}
