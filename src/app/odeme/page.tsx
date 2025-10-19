import { Metadata } from 'next'
import PaymentForm from '../components/PaymentForm'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Ödeme | VEFA Eğitim Merkezi',
  description: 'Güvenli ödeme sistemi ile eğitim hizmetlerinizi satın alın.',
}

export default function PaymentPage() {
  return (
    <>
      <PageHero
        title="Güvenli Ödeme"
        subtitle="Eğitim hizmetlerinizi güvenli ödeme sistemi ile satın alın"
      />
      <PaymentForm />
    </>
  )
}