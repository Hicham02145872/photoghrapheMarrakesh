import type {Metadata} from 'next';
import {PageIntro,ArticleCards,BookingCTA} from '@/components/editorial';
import {Bilingual} from '@/components/language-provider';
export const metadata:Metadata={title:'Le journal — Inspiration photo à Marrakech | PhotographZ4',description:'Des idées et conseils pour imaginer votre séance photo à Marrakech, en couple ou en famille.'};
export default function Blog(){return <main id="main"><PageIntro eyebrow="Le journal" title="Des idées à emporter." accent="Des envies à partager." description="Préparer une rencontre, choisir une ambiance, laisser de la place au naturel. Quelques lectures avant de passer de l’autre côté de l’objectif."/><section className="blog-list section-shell" aria-label="Les articles"><ArticleCards/></section><BookingCTA/></main>}
