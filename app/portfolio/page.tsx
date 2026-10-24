import type {Metadata} from 'next';
import {PageIntro,BookingCTA} from '@/components/editorial';
import Gallery from '@/components/gallery';
import MarrakechEditorial from '@/components/marrakech-editorial';
export const metadata:Metadata={title:'Portfolio photo à Marrakech — PhotographZ4',description:'Couples, portraits et inspirations de Marrakech : architecture, jardins, médina et artisanat.'};
export default function Portfolio(){return <main id="main" className="portfolio-page"><PageIntro eyebrow="Le portfolio" title="Ce qui nous lie." accent="Ce qui reste." description="Des regards, des gestes, des morceaux de voyage. Explorez les images par univers et ouvrez celles qui vous parlent."/><Gallery/><MarrakechEditorial/><BookingCTA/></main>}
