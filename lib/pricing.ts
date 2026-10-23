export type PhotoPlan = {id:string;name:string;nameEn:string;minutes:number;price:number;photos:number;places:string;participants?:string;extras?:string[]};
const names=[['Essentiel','Essential'],['Signature','Signature'],['Évasion','Escape']];
function plans(prices:number[],minutes:number[],photos:number[],participants?:string[]):PhotoPlan[]{return prices.map((price,i)=>({id:['essentiel','signature','evasion'][i],name:names[i][0],nameEn:names[i][1],minutes:minutes[i],price,photos:photos[i],places:['1','2','multiple'][i],participants:participants?.[i]}));}
const classic=()=>plans([90,140,330],[60,120,180],[60,120,250]);
export const servicePlans:Record<string,PhotoPlan[]>={
 couple:plans([140,170,330],[120,120,180],[100,150,250],['1–2','1–2','1–2']).map((p,i)=>({...p,places:['2','3','multiple'][i]})),
 famille:plans([250,320,450],[60,120,180],[140,200,300],['1–5','5–7','7–15']).map((p,i)=>({...p,places:i===0?'2':'multiple'})),
 mariage:plans([300,500,700],[60,180,300],[100,250,300]),
 fiancailles:plans([190,250,330],[60,120,180],[60,120,250]).map((p,i)=>({...p,places:['1','3','multiple'][i]})),
 solo:classic(),
 evjf:plans([250,320,500],[60,120,180],[100,250,250],['10 max.','10 max.','7 max.']).map((p,i)=>({...p,extras:i===2?['Transport privé aller-retour','Balade à dos de chameau','Dîner avec animation en option']:[]})),
 portrait:plans([90,150,330],[60,120,180],[60,120,250]),
 riad:plans([90,140,330],[60,120,180],[100,150,250],['1','1–2','1–2']),
 majorelle:plans([100,140,330],[60,120,180],[60,120,250]),
 souks:classic(),
 hotel:plans([250,300,500],[60,120,180],[100,150,300],['1–2','1–2','1–2']),
 'palais-bahia':classic(),
 agafay:plans([250,350,600],[60,120,180],[200,300,400],['1–2','1–2','1–2']).map(p=>({...p,extras:['Dîner privé : entrée, plat et dessert','Transport privé aller-retour']})),
 'sous-les-etoiles':plans([250,350,600],[120,120,180],[200,300,400],['1–2','1–2','1–2']).map(p=>({...p,extras:['Dîner privé : entrée, plat et dessert','Transport privé aller-retour']})),
 interieur:classic(),
};
export function bookingHref(service:string,plan?:string){const query=new URLSearchParams({service});if(plan)query.set('plan',plan);return '/contact?'+query.toString()+'#demande';}
