import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {services} from '@/lib/content';
import {servicePhotos} from '@/lib/service-photos';
import {BookingCTA} from '@/components/editorial';
import {Arrow} from '@/components/icons';
import ServicePricing from '@/components/service-pricing';
import ServiceContact from '@/components/service-contact';
import ServiceGallery from '@/components/service-gallery';
import {ServiceSectionNav,ServiceStory,ServiceGuide,ServiceFAQ} from '@/components/service-story';
import {bookingHref} from '@/lib/pricing';
export const dynamicParams=false;
export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const service=services.find(s=>s.slug===slug);
 return {title:service?service.title+' — Séance photo PhotographZ4':'Séance introuvable',description:service?.intro};
}
export default async function Service({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const service=services.find(s=>s.slug===slug);
 if(!service)notFound();
 return <main id="main">
  <section className="service-detail section-shell"><div>
   <nav className="breadcrumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span>{service.title}</span></nav>
   <div className="eyebrow">{service.category} · MARRAKECH</div>
   <h1>{service.title}<em>Une histoire à vous.</em></h1>
   <p className="lead">{service.intro}</p><p>{service.detail}</p>
   <Link href={bookingHref(service.slug)} className="button dark">Parlons de cette séance <Arrow/></Link>
  </div><figure><Image src={'/images/'+service.image} width={700} height={900} sizes="(max-width:767px) 88vw, 43vw" alt={'Inspiration PhotographZ4 pour une séance '+service.title.toLowerCase()} priority/><figcaption>{['mariage','riad','majorelle'].includes(service.slug)?'PHOTOGRAPHIE · PHOTOGRAPHZ4':'INSPIRATION PHOTOGRAPHIQUE · PINTEREST'}</figcaption></figure></section>
  <ServiceSectionNav/>
  <ServiceStory slug={slug}/>
  <ServiceGallery photos={servicePhotos[slug]} title={service.title}/>
  <ServicePricing slug={slug} title={service.title}/>
  <ServiceGuide slug={slug}/>
  <section className="service-preparation section-shell"><div><div className="eyebrow">IMAGINONS VOTRE EXPÉRIENCE</div><h2>Les détails font<br/><em>la différence.</em></h2></div><div>{service.ideas.map((idea,i)=><div className="preparation-row" key={idea}><span>0{i+1}</span><h3>{idea}</h3></div>)}<p>Le lieu, la durée, les images livrées, le tarif et les éventuels frais sont précisés lors de nos échanges. Votre demande ne confirme pas une réservation.</p><Link href="/conseils" className="text-link">Bien préparer votre séance <Arrow/></Link></div></section>
  <ServiceFAQ slug={slug}/>
  <ServiceContact slug={slug} title={service.title}/>
  <BookingCTA href={bookingHref(slug)}/>
 </main>;
}
