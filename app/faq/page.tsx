import type {Metadata} from 'next';
import {PageIntro,BookingCTA} from '@/components/editorial';
import {faqs} from '@/lib/content';
export const metadata:Metadata={title:'Questions fréquentes — Linagraphy',description:'Les réponses à vos questions pour préparer votre séance photo à Marrakech.'};
export default function FAQ(){return <main id="main"><PageIntro eyebrow="FAQ" title="Avant votre séance." accent="Toutes vos questions." description="Lieu, tenues, organisation et réservation : retrouvez les repères pour préparer votre projet sereinement."/><section className="faq-section section-shell"><div><div className="eyebrow">LES RÉPONSES ESSENTIELLES</div><h2>Une séance à votre rythme.</h2><p>Chaque projet est différent. Nous précisons ensemble les détails de votre expérience avant la réservation.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section><BookingCTA/></main>}
