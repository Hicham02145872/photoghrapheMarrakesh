import Link from 'next/link';
import {serviceEditorial} from '@/lib/service-editorial';
import {bookingHref,servicePlans} from '@/lib/pricing';

export function ServiceSectionNav(){return <nav className="service-section-nav section-shell" aria-label="Dans cette prestation"><a href="#presentation">La séance</a><a href="#galerie">Les photos</a><a href="#formules">Les formules</a><a href="#experience">Les conseils</a><a href="#questions">Les questions</a></nav>;}

export function ServiceStory({slug}:{slug:string}){const content=serviceEditorial[slug];return <section id="presentation" className="service-story section-shell" aria-labelledby="service-story-title"><div><span className="eyebrow">UNE SÉANCE QUI VOUS RESSEMBLE</span><h2 id="service-story-title">{content.title}</h2></div><div className="service-story-copy">{content.introduction.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></section>;}

export function ServiceGuide({slug}:{slug:string}){const content=serviceEditorial[slug];return <section id="experience" className="service-guide section-shell" aria-label="Déroulement et conseils pour cette prestation">{content.chapters.map((chapter,index)=><article key={chapter.title}><span className="eyebrow">0{index+1} · VOTRE EXPÉRIENCE</span><h2>{chapter.title}</h2><p>{chapter.body}</p></article>)}</section>;}

export function ServiceFAQ({slug}:{slug:string}){
 const questions=[...serviceEditorial[slug].questions,
 ['Quel budget et combien de photos prévoir ?',servicePlans[slug]?'Les formules présentées sur cette page indiquent leur prix, la durée et le nombre de photos numériques incluses. Nous vérifions ensemble celle qui convient à votre projet. Les accès aux lieux et les options éventuelles sont précisés avant confirmation.':'Cette prestation fait l’objet d’un devis. Le temps de prise de vue, le nombre d’images, la retouche, les usages et les frais éventuels sont définis dans votre proposition.'],
 ['Comment réserver et recevoir les images ?','Indiquez-nous la date souhaitée, le nombre de personnes et vos envies via le formulaire de contact ou WhatsApp. Nous confirmons la disponibilité, les conditions de réservation, la sélection et les modalités de livraison des fichiers numériques lors de nos échanges.']];
 return <section id="questions" className="service-faq section-shell" aria-labelledby="service-faq-title"><div><span className="eyebrow">AVANT DE NOUS RETROUVER</span><h2 id="service-faq-title">Vos questions,<br/><em>nos réponses.</em></h2><p>Les repères utiles pour préparer votre projet.</p><Link href={bookingHref(slug)} className="text-link">Parlons de votre projet ↗</Link></div><div className="faq-list">{questions.map(([question,answer])=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>;
}
