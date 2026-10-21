'use client';

import Image from 'next/image';
import ImmersiveHero from '@/components/immersive-hero';
import MarrakechPlaces from '@/components/marrakech-places';
import ContactForm from '@/components/contact-form';
import { JournalPreview } from '@/components/editorial';
import Link from 'next/link';
import PhotographerProfile from '@/components/photographer-profile';
import {Arrow} from '@/components/icons';

export default function Home(){
  return <>
    <main id="main">
      <ImmersiveHero/>
      <div className="ticker" aria-label="Séances disponibles"><span>Couples & amoureux</span><b>✳</b><span>Histoires de famille</span><b>✳</b><span>Échappées dans le désert</span><b>✳</b><span>Portraits de vous</span><b>✳</b></div>
      <section id="regard" className="section-shell about-section scroll-mt-8"><div className="about-images"><Image src="/images/pinterest-401946335507060260.webp" width={700} height={700} alt="Lumière douce et arche dans un riad de Marrakech" sizes="(max-width: 767px) 90vw, 40vw"/><span className="image-caption">LA VILLE OCRE, NOTRE TERRAIN D’INSPIRATION.</span></div><div className="about-copy"><div className="eyebrow">UNE RENCONTRE AVANT UNE PHOTO</div><h2>Moins de poses.<br/>Plus de <em>vous.</em></h2><p>Les plus belles images commencent quand vous oubliez l’objectif. Une conversation, quelques pas, le plaisir d’être là : nous vous accompagnons pour laisser votre personnalité prendre toute sa place.</p><p>De la médina aux paysages d’Agafay, nous imaginons avec vous un cadre qui vous ressemble. Vous profitez du moment. Nous en cherchons la lumière.</p><a className="text-link" href="/contact">Faisons connaissance <Arrow/></a></div></section>
      <section id="experiences" className="experiences scroll-mt-8"><div className="section-shell"><div className="section-heading"><div><div className="eyebrow">À CHACUN SON HISTOIRE</div><h2>Une séance.<br/><em>Votre façon de la vivre.</em></h2></div><div><p>À deux, en famille ou juste pour vous.<br/>Le point de départ, c’est votre envie.</p><a className="text-link section-more" href="/services">Tous nos services <Arrow/></a></div></div><div className="experience-grid">{[{n:'01',title:'À deux',tag:'COUPLES & FIANÇAILLES',src:'pinterest-1114852082747935404.webp',desc:'Une parenthèse complice au cœur de Marrakech.'},{n:'02',title:'Juste vous',tag:'PORTRAITS À MARRAKECH',src:'pinterest-964685182794589380.webp',desc:'Un regard, une lumière et toute votre personnalité.'},{n:'03',title:'Ailleurs',tag:'DÉSERT D’AGAFAY',src:'pinterest-1096274734295672430.webp',desc:'L’horizon, la lumière et un peu de liberté.'}].map(item=><a href={`#contact`} key={item.n} className="experience-card"><div className="experience-image"><Image src={`/images/${item.src}`} alt={item.tag} width={600} height={800} sizes="(max-width: 767px) 90vw, 30vw"/><span className="card-number">{item.n}</span><span className="circle-arrow"><Arrow/></span></div><div className="eyebrow">{item.tag}</div><h3>{item.title}</h3><p>{item.desc}</p></a>)}</div></div></section>
      <MarrakechPlaces/>
      <section id="portfolio" className="section-shell portfolio-teaser" aria-labelledby="portfolio-teaser-title"><div><div className="eyebrow">NOS PHOTOGRAPHIES</div><h2 id="portfolio-teaser-title">Vos instants.<br/><em>Notre regard.</em></h2></div><div className="portfolio-teaser-action"><p>Découvrez nos portraits et notre séance à deux dans le portfolio.</p><Link href="/portfolio" className="button dark">Découvrir le portfolio <Arrow/></Link></div></section>
      <PhotographerProfile/>
      <JournalPreview/>
      <section className="process"><div className="section-shell"><div className="eyebrow">SIMPLEMENT, ENSEMBLE</div><h2>Du premier bonjour<br/>au dernier <em>souvenir.</em></h2><div className="process-grid">{[{n:'01',title:'On fait connaissance',text:'Vous nous racontez votre envie, vos dates et les personnes qui vous accompagnent.'},{n:'02',title:'On imagine votre séance',text:'Nous échangeons sur le lieu, l’ambiance et les détails pour vous sentir à l’aise.'},{n:'03',title:'Vous profitez de l’instant',text:'Nous vous guidons avec douceur pour laisser place aux moments spontanés.'}].map(s=><div key={s.n}><span className="step">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section>
      <section id="contact" className="section-shell contact scroll-mt-8"><div><div className="eyebrow">ET SI L’ON CRÉAIT VOS SOUVENIRS ?</div><h2>Tout commence<br/>par un <em>bonjour.</em></h2><p>Une idée précise ou une simple envie ?<br/>Racontez-nous votre projet à Marrakech.</p><a className="contact-email" href="mailto:Hello@linagraphy.com">Hello@linagraphy.com <Arrow/></a><a className="phone" href="tel:+212681318181">+212 681 31 81 81</a><span className="contact-location">MARRAKECH · MAROC</span></div><ContactForm/></section>
    </main>
    <a className="whatsapp-float" href="https://wa.me/212776090380" target="_blank" rel="noopener noreferrer" aria-label="Nous contacter sur WhatsApp (nouvel onglet)">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Zm-8.4 18.1h-.1c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.3 6.4 6.7 2 12.1 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.8 5.1 2.2.9 2.7.7 3.2.7.5-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/></svg>
    </a>
  </>;
}
