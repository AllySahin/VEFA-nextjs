import type { Metadata } from 'next'
import LoginPage from '../components/LoginPage'

export const metadata: Metadata = {
  title: 'Öğrenci Girişi | VEFA Eğitim Merkezi',
  description: 'VEFA Eğitim Merkezi öğrenci portalına güvenli giriş yapın.',
}

export default function Login() {
  return <LoginPage />
}