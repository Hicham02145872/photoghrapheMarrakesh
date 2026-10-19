'use client';

import Image from 'next/image';
import ContactForm from '@/components/contact-form';
import { JournalPreview } from '@/components/editorial';
import Gallery from '@/components/gallery';
import PhotographerProfile from '@/components/photographer-profile';
import {Arrow} from '@/components/icons';

export default function Home(){
  return <>
    <main id="main">
      <div className="hero-band"><section className="hero section-shell">
        <div className="hero-copy"><div className="eyebrow"><span className="tiny-line"/> PHOTOGRAPHES À MARRAKECH</div><h1>Vous vivez<br/>l’instant.<br/>Nous gardons<br/><em>l’émotion.</em></h1><p>Une balade dans la médina, un regard complice, la lumière du désert. Faisons de votre passage à Marrakech une histoire à garder.</p><div className="hero-actions"><a href="/portfolio" className="button dark">Explorer nos histoires <Arrow/></a><a href="/contact" className="text-link">Imaginer votre séance</a></div><div className="hero-footnote"><span className="sun" aria-hidden="true">✳</span><span>Des images naturelles.<br/>Des souvenirs profondément personnels.</span></div></div>
        <div className="hero-visual"><div className="arch-frame"><Image src="/images/hero.webp" alt="Un couple enlacé devant la Koutoubia, entouré de pigeons en plein vol" width={800} height={1200} priority sizes="(max-width: 767px) 90vw, 44vw" className="hero-image"/></div><span className="photo-label">01 / UNE HISTOIRE À MARRAKECH</span><span className="vertical-note">L’ART DE SE SOUVENIR</span><div className="image-stamp">Marrakech<br/><em>with love.</em></div></div>
      </section>
      <svg className="hero-curve" viewBox="0 0 1920 140" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 0 Q960 240 1920 0 V140 H0 Z"/></svg>
      </div>
      <div className="ticker" aria-label="Séances disponibles"><span>Couples & amoureux</span><b>✳</b><span>Histoires de famille</span><b>✳</b><span>Échappées dans le désert</span><b>✳</b><span>Portraits de vous</span><b>✳</b></div>
      <section id="regard" className="section-shell about-section scroll-mt-8"><div className="about-images"><Image src="/images/about.webp" width={700} height={700} alt="Photographie de voyage à Marrakech par Linagraphy" sizes="(max-width: 767px) 90vw, 40vw"/><span className="image-caption">LA VILLE OCRE, NOTRE TERRAIN D’INSPIRATION.</span></div><div className="about-copy"><div className="eyebrow">UNE RENCONTRE AVANT UNE PHOTO</div><h2>Moins de poses.<br/>Plus de <em>vous.</em></h2><p>Les plus belles images commencent quand vous oubliez l’objectif. Une conversation, quelques pas, le plaisir d’être là : nous vous accompagnons pour laisser votre personnalité prendre toute sa place.</p><p>De la médina aux paysages d’Agafay, nous imaginons avec vous un cadre qui vous ressemble. Vous profitez du moment. Nous en cherchons la lumière.</p><a className="text-link" href="/contact">Faisons connaissance <Arrow/></a></div></section>
      <section id="experiences" className="experiences scroll-mt-8"><div className="section-shell"><div className="section-heading"><div><div className="eyebrow">À CHACUN SON HISTOIRE</div><h2>Une séance.<br/><em>Votre façon de la vivre.</em></h2></div><div><p>À deux, en famille ou juste pour vous.<br/>Le point de départ, c’est votre envie.</p><a className="text-link section-more" href="/services">Tous nos services <Arrow/></a></div></div><div className="experience-grid">{[{n:'01',title:'À deux',tag:'COUPLES & FIANÇAILLES',src:'couple.jpeg',desc:'Une parenthèse complice dans les ruelles de Marrakech.'},{n:'02',title:'Ensemble',tag:'FAMILLES & AMIS',src:'family.jpeg',desc:'Des gestes spontanés et le bonheur de se retrouver.'},{n:'03',title:'Ailleurs',tag:'DÉSERT D’AGAFAY',src:'desert.jpeg',desc:'L’horizon, la lumière et un peu de liberté.'}].map(item=><a href={`#contact`} key={item.n} className="experience-card"><div className="experience-image"><Image src={`/images/${item.src}`} alt={item.tag} width={600} height={800} sizes="(max-width: 767px) 90vw, 30vw"/><span className="card-number">{item.n}</span><span className="circle-arrow"><Arrow/></span></div><div className="eyebrow">{item.tag}</div><h3>{item.title}</h3><p>{item.desc}</p></a>)}</div></div></section>
      <Gallery/>
      <PhotographerProfile/>
      <JournalPreview/>
      <section className="process"><div className="section-shell"><div className="eyebrow">SIMPLEMENT, ENSEMBLE</div><h2>Du premier bonjour<br/>au dernier <em>souvenir.</em></h2><div className="process-grid">{[{n:'01',title:'On fait connaissance',text:'Vous nous racontez votre envie, vos dates et les personnes qui vous accompagnent.'},{n:'02',title:'On imagine votre séance',text:'Nous échangeons sur le lieu, l’ambiance et les détails pour vous sentir à l’aise.'},{n:'03',title:'Vous profitez de l’instant',text:'Nous vous guidons avec douceur pour laisser place aux moments spontanés.'}].map(s=><div key={s.n}><span className="step">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section>
      <section id="contact" className="section-shell contact scroll-mt-8"><div><div className="eyebrow">ET SI L’ON CRÉAIT VOS SOUVENIRS ?</div><h2>Tout commence<br/>par un <em>bonjour.</em></h2><p>Une idée précise ou une simple envie ?<br/>Racontez-nous votre projet à Marrakech.</p><a className="contact-email" href="mailto:Hello@linagraphy.com">Hello@linagraphy.com <Arrow/></a><a className="phone" href="tel:+212681318181">+212 681 31 81 81</a><span className="contact-location">MARRAKECH · MAROC</span></div><ContactForm/></section>
    </main>

  </>;
}
