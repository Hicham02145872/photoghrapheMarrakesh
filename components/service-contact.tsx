import Link from 'next/link';
import {Bilingual} from './language-provider';
import {bookingHref} from '@/lib/pricing';

export default function ServiceContact({slug,title}:{slug:string;title:string}){
 const whatsapp='https://wa.me/212776090380?text='+encodeURIComponent(`Bonjour, je souhaite des informations pour une séance : ${title}. Mes dates souhaitées : `);
 return <aside className="service-contact section-shell" aria-labelledby="service-contact-title"><div><div className="eyebrow"><Bilingual fr="PARLONS DE VOTRE SÉANCE" en="LET’S TALK ABOUT YOUR SESSION"/></div><h2 id="service-contact-title"><Bilingual fr="Une question sur" en="A question about"/> <em>{title.toLowerCase()} ?</em></h2><p><Bilingual fr="Échangez directement avec Zakaria pour les disponibilités, le lieu et les détails de votre projet." en="Speak directly with Zakaria about availability, the location and your project."/></p></div><div className="service-contact-links"><a className="button dark" href={whatsapp} target="_blank" rel="noopener noreferrer"><Bilingual fr="Écrire sur WhatsApp ↗" en="Message on WhatsApp ↗"/><span className="sr-only"> (nouvel onglet)</span></a><a href="tel:+212776090380">+212 776 090 380</a><a href={'mailto:hamidsos64@gmail.com?subject='+encodeURIComponent('Séance photo — '+title)}>hamidsos64@gmail.com</a><Link href={bookingHref(slug)} className="text-link"><Bilingual fr="Décrire mon projet →" en="Tell us about your project →"/></Link></div></aside>
}
