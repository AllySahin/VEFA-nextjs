'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('.site-header')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const isActivePath = (path: string) => {
    return pathname === path
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo" aria-label="VEFA Anasayfa">
          <Image
            src="/images/logo.png"
            alt="VEFA İş Makineleri Kursu"
            width={180}
            height={60}
            priority
            className="logo-image"
          />
        </Link>
        
        <ul 
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
          id="primary-navigation"
        >
          <li>
            <Link 
              href="/" 
              className={isActivePath('/') ? 'active' : ''}
            >
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link 
              href="/hizmetlerimiz"
              className={isActivePath('/hizmetlerimiz') ? 'active' : ''}
            >
              Hizmetlerimiz
            </Link>
          </li>
          <li>
            <Link 
              href="/kurumsal"
              className={isActivePath('/kurumsal') ? 'active' : ''}
            >
              Kurumsal
            </Link>
          </li>
          <li>
            <Link 
              href="/hakkimizda"
              className={isActivePath('/hakkimizda') ? 'active' : ''}
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link 
              href="/iletisim"
              className={isActivePath('/iletisim') ? 'active' : ''}
            >
              İletişim
            </Link>
          </li>
        </ul>

        <div className="header-actions">
          <Link className="btn-search-header" href="/arama" title="Eğitim Ara">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Eğitim Ara</span>
          </Link>
        </div>
        
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Menüyü Aç/Kapat</span>
        </button>
      </div>
    </header>
  )
}