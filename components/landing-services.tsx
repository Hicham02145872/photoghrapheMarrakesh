import Image from 'next/image';
import Link from 'next/link';
import {services} from '@/lib/content';
import {Bilingual} from './language-provider';
import {Arrow} from './icons';

const selection=[
 {slug:'couple',title:'Séance photo de couple',en:'Couple photography',description:'Un moment à deux, des regards complices et des souvenirs qui vous ressemblent.'},
 {slug:'portrait',title:'Portrait professionnel',en:'Professional portraits',description:'Votre personnalité, votre présence et une lumière qui vous met en valeur.'},
 {slug:'mariage',title:'Photographie de mariage',en:'Wedding photography',description:'Les émotions de votre journée, des grands moments aux gestes les plus discrets.'},
 {slug:'agafay',title:'Séance photo à Agafay',en:'Agafay photoshoot',description:'Une échappée dans les paysages du désert, entre lumière douce et horizons ouverts.'},
 {slug:'fiancailles',title:'Photographie de fiançailles',en:'Engagement photography',description:'Célébrez une nouvelle page de votre histoire dans un cadre choisi ensemble.'},
 {slug:'interieur',title:'Intérieurs marocains',en:'Moroccan interiors',description:'Patios, matières et jeux d’ombre : une ambiance intime au cœur de Marrakech.'}
];
export default function LandingServices(){return <section id="services" className="landing-services" aria-labelledby="landing-services-title"><div className="section-shell"><div className="section-heading"><div><div className="eyebrow"><Bilingual fr="SERVICES DE PHOTOGRAPHIE" en="PHOTOGRAPHY SERVICES"/></div><h2 id="landing-services-title"><Bilingual fr={<>Nos séances photo<br/><em>populaires.</em></>} en={<>Our most loved<br/><em>photo sessions.</em></>}/></h2></div><Link href="/services" className="text-link"><Bilingual fr="Toutes les séances photo" en="Explore all sessions"/><Arrow/></Link></div><div className="landing-services-grid">{selection.map(item=>{const service=services.find(s=>s.slug===item.slug)!;return <article className="landing-service-card" key={item.slug}><Image src={'/images/'+service.image} alt={item.title} fill sizes="(max-width:767px) 88vw,(max-width:1000px) 43vw,29vw"/><div className="landing-service-shade"/><div className="landing-service-copy"><h3><Bilingual fr={item.title} en={item.en}/></h3><p><Bilingual fr={item.description} en={service.intro}/></p><Link href={'/services/'+item.slug} className="landing-service-link"><Bilingual fr="Lire la suite" en="Discover more"/><Arrow/><span className="sr-only"> — {item.title}</span></Link></div></article>;})}</div></div></section>}
