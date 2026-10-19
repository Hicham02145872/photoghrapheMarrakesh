import Image from 'next/image';
import Link from 'next/link';
import {Arrow} from './icons';

export default function PhotographerProfile(){
  return <section className="photographer-section section-shell" aria-labelledby="photographer-title">
    <div className="photographer-intro">
      <div className="eyebrow">DERRIÈRE L’OBJECTIF</div>
      <h2 id="photographer-title">Un regard.<br/><em>Une rencontre.</em></h2>
      <p>Découvrez l’univers de Zakaria et partagez ce que vous aimeriez raconter à travers vos images.</p>
      <Link href="/portfolio" className="text-link">Explorer le portfolio <Arrow/></Link>
    </div>
    <article className="photographer-card">
      <div className="photographer-card-top"><span>LE PHOTOGRAPHE</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg></div>
      <div className="photographer-identity"><Image src="/images/client-logo.png" width={88} height={88} alt="Logo Z4, photo de profil de Zakaria"/><div><h3>ZAKARIA Als</h3><a href="https://www.instagram.com/photo_graphe.z4/" target="_blank" rel="noopener noreferrer" aria-label="Profil Instagram de photo_graphe.z4, nouvel onglet">@photo_graphe.z4 <span aria-hidden="true">↗</span></a></div></div>
      <p className="photographer-note">L’inspiration commence<br/>par <em>un premier échange.</em></p>
      <div className="photographer-card-actions"><a className="photographer-instagram" href="https://www.instagram.com/photo_graphe.z4/" target="_blank" rel="noopener noreferrer">Découvrir son Instagram <Arrow/><span className="sr-only"> (nouvel onglet)</span></a><Link href="/contact">Parlons de votre projet <span aria-hidden="true">↗</span></Link></div>
    </article>
  </section>;
}
