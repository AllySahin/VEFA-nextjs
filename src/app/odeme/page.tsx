import { Metadata } from 'next'
import PaymentForm from '../components/PaymentForm'

export const metadata: Metadata = {
  title: 'Ödeme | VEFA Eğitim Merkezi',
  description: 'Güvenli ödeme sistemi ile eğitim hizmetlerinizi satın alın.',
}

export default function PaymentPage() {
  return (
    <>
      <section className="compact-page-title">
        <div className="container">
          <h1>Güvenli Ödeme</h1>
          <p className="subtitle">Eğitim hizmetlerinizi güvenli ödeme sistemi ile satın alın</p>
        </div>
      </section>
      <PaymentForm />
    </>
  )
}