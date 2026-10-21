import Image from 'next/image';
import Link from 'next/link';
import {Bilingual} from './language-provider';
import {Arrow} from './icons';

export default function ImmersiveHero(){return <section className="immersive-hero" aria-labelledby="hero-title">
  <Image className="immersive-photo" src="/images/pinterest-811492426651206525.webp" alt="Les ruelles ocre de Marrakech baignées de lumière" fill preload sizes="100vw"/>
  <div className="immersive-shade"/>
  <div className="immersive-content section-shell">
    <div className="eyebrow"><span/><Bilingual fr="PHOTOGRAPHE À MARRAKECH" en="MARRAKECH PHOTOGRAPHER"/></div>
    <h1 id="hero-title"><Bilingual fr={<>Des souvenirs<br/>qui <em>durent.</em></>} en={<>Memories<br/>that <em>last.</em></>}/></h1>
    <p><Bilingual fr="Votre histoire, la lumière de Marrakech, des images à garder. À deux, en famille ou juste pour vous." en="Your story, the light of Marrakech, images to cherish. As a couple, with family, or simply for yourself."/></p>
    <div className="immersive-actions"><Link href="/portfolio" className="immersive-button"><Bilingual fr="Découvrir le portfolio" en="Explore the portfolio"/><Arrow/></Link><Link href="/contact" className="immersive-contact"><Bilingual fr="Imaginer votre séance" en="Plan your session"/><span aria-hidden="true">↗</span></Link></div>
  </div>
  <div className="immersive-bottom section-shell"><span>MARRAKECH · MAROC</span><a href="#regard"><Bilingual fr="DÉCOUVRIR L’UNIVERS" en="DISCOVER THE STORY"/><span aria-hidden="true">↓</span></a><a href="https://www.pinterest.com/pin/811492426651206525/" target="_blank" rel="noopener noreferrer">INSPIRATION · PINTEREST ↗</a></div>
</section>}
