import type { Metadata } from 'next';
import './globals.css';
import './instagram.css';
import './portfolio-teaser.css';
import './service-navigation.css';
import './service-editorial.css';
import localFont from 'next/font/local';
const displayFont = localFont({ src: [{path:'./fonts/playfair-display-400-normal.ttf',weight:'400',style:'normal'},{path:'./fonts/playfair-display-400-italic.ttf',weight:'400',style:'italic'}], variable:'--font-display', display:'swap', fallback:['Georgia'] });
const bodyFont = localFont({ src: [{path:'./fonts/dm-sans-400-normal.ttf',weight:'400',style:'normal'},{path:'./fonts/dm-sans-500-normal.ttf',weight:'500',style:'normal'},{path:'./fonts/dm-sans-600-normal.ttf',weight:'600',style:'normal'}], variable:'--font-body', display:'swap', fallback:['Arial'] });
import { SiteHeader, SiteFooter } from '@/components/site-chrome';
import {LanguageProvider} from '@/components/language-provider';
export const metadata: Metadata = { title: 'PhotographZ4 — Photographe à Marrakech', description: 'Une rencontre, une lumière, votre histoire. Découvrez les séances photo Linagraphy à Marrakech : couples, familles et escapades dans le désert.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr" className={`${displayFont.variable} ${bodyFont.variable}`}><body><LanguageProvider><SiteHeader/>{children}<SiteFooter/></LanguageProvider></body></html>; }
