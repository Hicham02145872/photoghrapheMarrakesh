import type {Metadata} from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {articles} from '@/lib/content';
import {BookingCTA} from '@/components/editorial';
import {Arrow} from '@/components/icons';
export const dynamicParams=false;
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const a=articles.find(a=>a.slug===slug);return {title:a?a.title+' — Journal Linagraphy':'Article introuvable',description:a?.excerpt};}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);if(!a)notFound();return <main id="main"><article className="article-page"><header className="section-shell"><nav className="breadcrumbs" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/blog">Journal</Link><span>/</span><span>{a.category}</span></nav><div className="eyebrow">LE JOURNAL · {a.category}</div><h1>{a.title}</h1><p className="article-deck">{a.excerpt}</p><span className="article-byline">GUIDE PRATIQUE · LINAGRAPHY</span></header><div className="article-cover section-shell"><Image src={'/images/'+a.image} alt={a.title} width={1400} height={800} sizes="88vw" priority/></div><div className="article-body">{a.sections.map(s=><section key={s.title}><h2>{s.title}</h2><p>{s.text}</p></section>)}<Link href="/blog" className="text-link">Tous les articles <Arrow/></Link></div></article><BookingCTA/></main>}
