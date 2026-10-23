'use client';
import {useSearchParams} from 'next/navigation';
import ContactForm from './contact-form';
import {services} from '@/lib/content';
import {servicePlans} from '@/lib/pricing';

export default function ContactBookingForm(){
 const query=useSearchParams();
 const service=services.find(item=>item.slug===query.get('service'));
 const plan=service&&servicePlans[service.slug]?.find(item=>item.id===query.get('plan'));
 return <ContactForm key={(service?.slug??'couple')+'-'+(plan?.id??'')} initialService={service?.slug} initialPlan={plan?.id}/>;
}
