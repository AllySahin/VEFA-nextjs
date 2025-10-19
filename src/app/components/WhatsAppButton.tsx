'use client'

import { useState } from 'react'
import { FiX } from 'react-icons/fi'
import Image from 'next/image'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // WhatsApp numarasını buradan değiştirin (ör: 905xxxxxxxxx)
  const whatsappNumber = '905xxxxxxxxx'
  const whatsappMessage = 'Merhaba, VEFA İş Makineleri Kursu hakkında bilgi almak istiyorum.'

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Tooltip */}
      {showTooltip && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          background: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          zIndex: 999,
          maxWidth: '250px',
          animation: 'slideInRight 0.3s ease'
        }}>
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: '#999'
            }}
          >
            <FiX size={16} />
          </button>
          <div style={{ 
            fontSize: '0.9rem', 
            color: '#2c3e50',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            WhatsApp Desteği
          </div>
          <div style={{ 
            fontSize: '0.85rem', 
            color: '#7f8c8d',
            lineHeight: '1.4'
          }}>
            Sorularınız için bize WhatsApp'tan ulaşabilirsiniz!
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: isHovered 
            ? 'linear-gradient(135deg, #1ebea5 0%, #25D366 100%)' 
            : '#25D366',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: isHovered
            ? '0 8px 30px rgba(37, 211, 102, 0.5)'
            : '0 4px 20px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          animation: 'pulse 2s infinite'
        }}
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg 
          viewBox="0 0 32 32" 
          width="32" 
          height="32"
          fill="white"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.396 5.194 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.846-4.507-1.846-6.957 0-7.384 6.083-13.467 13.467-13.467s13.467 6.083 13.467 13.467c0 7.384-6.083 13.467-13.467 13.467zM21.787 18.693c-0.239-0.12-1.413-0.697-1.633-0.777-0.219-0.080-0.379-0.120-0.538 0.12s-0.618 0.777-0.758 0.937c-0.139 0.159-0.279 0.179-0.518 0.060s-1.012-0.373-1.926-1.188c-0.713-0.635-1.193-1.419-1.333-1.658s-0.015-0.368 0.105-0.487c0.108-0.107 0.239-0.279 0.359-0.418s0.159-0.239 0.239-0.398c0.080-0.159 0.040-0.299-0.020-0.418s-0.538-1.293-0.737-1.771c-0.195-0.464-0.394-0.402-0.538-0.41-0.139-0.007-0.299-0.009-0.458-0.009s-0.418 0.060-0.638 0.299c-0.219 0.239-0.837 0.817-0.837 1.991s0.857 2.31 0.976 2.469c0.12 0.159 1.685 2.572 4.082 3.606 0.571 0.247 1.016 0.394 1.363 0.504 0.573 0.181 1.094 0.156 1.506 0.094 0.459-0.069 1.413-0.578 1.613-1.136s0.199-1.036 0.139-1.136c-0.060-0.099-0.219-0.159-0.458-0.279z"/>
        </svg>
      </button>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          }
          50% {
            box-shadow: 0 4px 30px rgba(37, 211, 102, 0.6);
          }
        }
      `}</style>
    </>
  )
}
