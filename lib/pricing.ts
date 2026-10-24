export type PhotoPlan = {id:string;name:string;nameEn:string;minutes:number;price:number;photos:number;places:string;participants?:string;extras?:string[]};
const names=[['Essentiel','Essential'],['Signature','Signature'],['Évasion','Escape']];
function plans(prices:number[],minutes:number[],photos:number[],participants?:string[]):PhotoPlan[]{return prices.map((price,i)=>({id:['essentiel','signature','evasion'][i],name:names[i][0],nameEn:names[i][1],minutes:minutes[i],price,photos:photos[i],places:['1','2','multiple'][i],participants:participants?.[i]}));}
const classic=()=>plans([70,120,310],[60,120,180],[60,120,250]);
export const servicePlans:Record<string,PhotoPlan[]>={
 couple:plans([120,150,310],[120,120,180],[100,150,250],['1–2','1–2','1–2']).map((p,i)=>({...p,places:['2','3','multiple'][i]})),
 famille:plans([230,300,430],[60,120,180],[140,200,300],['1–5','5–7','7–15']).map((p,i)=>({...p,places:i===0?'2':'multiple'})),
 mariage:plans([280,480,680],[60,180,300],[100,250,300]),
 fiancailles:plans([170,230,310],[60,120,180],[60,120,250]).map((p,i)=>({...p,places:['1','3','multiple'][i]})),
 solo:classic(),
 evjf:plans([230,300,480],[60,120,180],[100,250,250],['10 max.','10 max.','7 max.']).map((p,i)=>({...p,extras:i===2?['Transport privé aller-retour','Balade à dos de chameau','Dîner avec animation en option']:[]})),
 portrait:plans([70,130,310],[60,120,180],[60,120,250]),
 riad:plans([70,120,310],[60,120,180],[100,150,250],['1','1–2','1–2']),
 majorelle:plans([80,120,310],[60,120,180],[60,120,250]),
 souks:classic(),
 hotel:plans([230,280,480],[60,120,180],[100,150,300],['1–2','1–2','1–2']),
 'palais-bahia':classic(),
 agafay:plans([230,330,580],[60,120,180],[200,300,400],['1–2','1–2','1–2']).map(p=>({...p,extras:['Dîner privé : entrée, plat et dessert','Transport privé aller-retour']})),
 'sous-les-etoiles':plans([230,330,580],[120,120,180],[200,300,400],['1–2','1–2','1–2']).map(p=>({...p,extras:['Dîner privé : entrée, plat et dessert','Transport privé aller-retour']})),
 interieur:classic(),
};
export function bookingHref(service:string,plan?:string){const query=new URLSearchParams({service});if(plan)query.set('plan',plan);return '/contact?'+query.toString()+'#demande';}
