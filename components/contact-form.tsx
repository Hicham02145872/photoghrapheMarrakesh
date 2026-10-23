'use client';
import {useState} from 'react';
import {Arrow} from './icons';
import {Bilingual,useLanguage} from './language-provider';
import {services} from '@/lib/content';
import {servicePlans} from '@/lib/pricing';

export default function ContactForm({initialService='couple',initialPlan=''}:{initialService?:string;initialPlan?:string}){
 const [draft,setDraft]=useState(false);
 const [session,setSession]=useState(initialService);
 const [planId,setPlanId]=useState(initialPlan);
 const {locale}=useLanguage();const en=locale==='en';
 const service=services.find(item=>item.slug===session);
 const plans=servicePlans[session]??[];
 const plan=plans.find(item=>item.id===planId);
 function contact(event:React.FormEvent<HTMLFormElement>){
  event.preventDefault();const data=new FormData(event.currentTarget);
  const body=`Bonjour PhotographZ4,\n\nJe m'appelle ${data.get('name')}.\nSéance : ${service?.title??'Autre projet'}.\nFormule : ${plan?`${plan.name} — ${plan.price} EUR — ${plan.minutes} min`:'À définir ensemble'}.\nDate souhaitée : ${data.get('date')||'À définir'}.\nLieu : ${data.get('location')||'À définir'}.\nParticipants : ${data.get('participants')||'À préciser'}.\nBudget : ${data.get('budget')||'À préciser'}.\nTéléphone : ${data.get('phone')||'Non renseigné'}.\nMon adresse e-mail : ${data.get('email')}.\n\n${data.get('message')}\n`;
  window.location.href=`mailto:hamidsos64@gmail.com?subject=${encodeURIComponent('Mon projet photo — '+(service?.title??'PhotographZ4'))}&body=${encodeURIComponent(body)}`;setDraft(true);
 }
 return <form id="demande" onSubmit={contact} className="booking-form">
  {plan&&<div className="booking-selection" role="status"><span className="eyebrow"><Bilingual fr="VOTRE SÉLECTION" en="YOUR SELECTION"/></span><strong>{service?.title} · {en?plan.nameEn:plan.name}</strong><span>{plan.price} € · {plan.minutes} min · {plan.photos} photos</span></div>}
  <div className="form-grid">
   <label><Bilingual fr="Votre prénom" en="Your first name"/><input autoComplete="given-name" name="name" placeholder={en?'Your name':'Votre prénom'} required maxLength={100}/></label>
   <label><Bilingual fr="Votre e-mail" en="Your email"/><input autoComplete="email" type="email" name="email" placeholder="you@example.com" required/></label>
   <label><Bilingual fr="Votre séance" en="Your session"/><select name="session" value={session} onChange={e=>{setSession(e.target.value);setPlanId('');setDraft(false);}}>{services.map(item=><option key={item.slug} value={item.slug}>{item.title}</option>)}<option value="autre">{en?'Other project':'Autre projet'}</option></select></label>
   <label><Bilingual fr="Votre formule" en="Your package"/><select name="plan" value={planId} onChange={e=>{setPlanId(e.target.value);setDraft(false);}}><option value="">{plans.length?(en?'Choose together':'À définir ensemble'):(en?'Tailored quote':'Sur devis')}</option>{plans.map(item=><option key={item.id} value={item.id}>{en?item.nameEn:item.name} — {item.price} €</option>)}</select></label>
   <label><Bilingual fr="Date envisagée" en="Preferred date"/><input type="date" name="date"/></label>
   <label><Bilingual fr="Nombre de participants" en="Number of people"/><input name="participants" type="number" min={1} max={200} step={1} placeholder="2"/></label>
   <label><Bilingual fr="Lieu souhaité" en="Preferred location"/><input name="location" maxLength={200} placeholder={en?'A riad, the medina…':'Un riad, la médina…'}/></label>
   <label><Bilingual fr="Budget en euros" en="Budget in euros"/><input name="budget" type="number" min={0} step={1} placeholder={plan?String(plan.price):(en?'Optional':'Facultatif')} key={session+planId}/></label>
   <label className="booking-phone"><Bilingual fr="Téléphone (facultatif)" en="Phone (optional)"/><input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+212 …"/></label>
  </div>
  <label><Bilingual fr="Quelques mots sur votre projet" en="A few words about your project"/><textarea name="message" rows={3} placeholder={en?'Tell us about the occasion…':'Racontez-nous votre occasion…'} required maxLength={3000}/></label>
  <button className="button dark" type="submit"><Bilingual fr="Préparer ma demande" en="Prepare my enquiry"/><Arrow/></button>
  <p className="form-note" role="status">{draft?<Bilingual fr="Votre demande est préparée. Finalisez son envoi dans votre application e-mail." en="Your request is ready. Finish sending it in your email app."/>:<Bilingual fr="Votre demande sera préremplie dans votre application e-mail. La réservation sera confirmée après notre échange." en="Your enquiry will open in your email app. The booking will be confirmed after we speak."/>}</p>
 </form>;
}
