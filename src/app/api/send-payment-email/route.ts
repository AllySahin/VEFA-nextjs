import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface PaymentEmailData {
  email: string
  name: string
  service: string
  price: string
  paymentType: string
  installments?: string
  phone: string
  transactionId: string
}

export async function POST(request: NextRequest) {
  try {
    const data: PaymentEmailData = await request.json()
    
    console.log('📧 E-posta gönderilecek:', {
      to: data.email,
      name: data.name,
      service: data.service,
      price: data.price,
      transactionId: data.transactionId
    })

    // Development mode - just log the email
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 Development modunda - E-posta simüle edildi')
      return NextResponse.json({ 
        success: true, 
        message: 'E-posta başarıyla gönderildi (Development Mode)' 
      })
    }

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ödeme Onayı - VEFA Eğitim Merkezi</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f8fafc; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; }
            .header { background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); padding: 40px 30px; text-align: center; }
            .logo { font-size: 28px; font-weight: bold; color: #ffd700; margin-bottom: 10px; }
            .header-subtitle { color: #cbd5e0; font-size: 16px; }
            .content { padding: 40px 30px; }
            .success-badge { background: #10b981; color: white; padding: 12px 24px; border-radius: 25px; display: inline-block; font-weight: 600; margin-bottom: 25px; }
            .title { color: #2d3748; font-size: 24px; font-weight: 700; margin-bottom: 15px; }
            .subtitle { color: #718096; font-size: 16px; margin-bottom: 30px; line-height: 1.5; }
            .info-card { background: #f7fafc; border-left: 4px solid #ffd700; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .info-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
            .info-row:last-child { margin-bottom: 0; }
            .info-label { color: #4a5568; font-weight: 600; }
            .info-value { color: #2d3748; font-weight: 700; }
            .features { background: #fff5d6; padding: 25px; border-radius: 12px; margin: 25px 0; }
            .features h4 { color: #2d3748; margin-bottom: 15px; font-size: 18px; }
            .features ul { list-style: none; padding: 0; margin: 0; }
            .features li { color: #4a5568; margin-bottom: 8px; position: relative; padding-left: 25px; }
            .features li:before { content: '✓'; position: absolute; left: 0; color: #10b981; font-weight: bold; }
            .next-steps { background: #e6fffa; border: 1px solid #81e6d9; padding: 25px; border-radius: 12px; margin: 25px 0; }
            .next-steps h4 { color: #234e52; margin-bottom: 15px; }
            .next-steps p { color: #285e61; line-height: 1.6; margin-bottom: 10px; }
            .cta-button { background: linear-gradient(145deg, #ffd700 0%, #e6c200 100%); color: #2d3748; padding: 15px 30px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600; margin: 20px 0; }
            .footer { background: #2d3748; color: #cbd5e0; padding: 30px; text-align: center; }
            .footer h4 { color: #ffd700; margin-bottom: 15px; }
            .contact-info { margin-bottom: 20px; }
            .contact-info p { margin: 5px 0; }
            .social-links { margin-top: 20px; }
            .social-links a { color: #ffd700; text-decoration: none; margin: 0 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header -->
            <div class="header">
              <div class="logo">VEFA EĞİTİM MERKEZİ</div>
              <div class="header-subtitle">MEB Onaylı Sertifikalı Eğitimler</div>
            </div>

            <!-- Main Content -->
            <div class="content">
              <div class="success-badge">✓ Ödeme Onaylandı</div>
              
              <h1 class="title">Sayın ${data.name},</h1>
              <p class="subtitle">
                ${data.service} eğitimi için ödemeniz başarıyla alınmıştır. 
                Eğitim süreciniz için gerekli tüm hazırlıklar başlatılmıştır.
              </p>

              <!-- Payment Details -->
              <div class="info-card">
                <div class="info-row">
                  <span class="info-label">Eğitim Programı:</span>
                  <span class="info-value">${data.service}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Ödeme Tutarı:</span>
                  <span class="info-value">${data.price}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Ödeme Tipi:</span>
                  <span class="info-value">${data.paymentType === 'full' ? 'Peşin (%10 İndirimli)' : `${data.installments} Taksit`}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">İşlem No:</span>
                  <span class="info-value">${data.transactionId}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">İşlem Tarihi:</span>
                  <span class="info-value">${new Date().toLocaleDateString('tr-TR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span>
                </div>
              </div>

              <!-- Program Benefits -->
              <div class="features">
                <h4>Eğitim Programınızın Avantajları</h4>
                <ul>
                  <li>MEB onaylı resmi sertifika</li>
                  <li>Uzman eğitmen kadrosu ile praktik eğitim</li>
                  <li>Modern araç ve ekipmanlarla uygulamalı eğitim</li>
                  <li>İş bulma desteği ve kariyer danışmanlığı</li>
                  <li>Eğitim sonrası sürekli destek hizmeti</li>
                </ul>
              </div>

              <!-- Next Steps -->
              <div class="next-steps">
                <h4>🎯 Sonraki Adımlar</h4>
                <p><strong>1. Eğitim Koordinatörümüz Size Ulaşacak:</strong> En geç 2 iş günü içinde eğitim programınız hakkında detaylı bilgi verilecek.</p>
                <p><strong>2. Eğitim Takvimi:</strong> Size uygun tarih ve saat aralığı belirlenecek.</p>
                <p><strong>3. Eğitim Materyalleri:</strong> Teorik eğitim kitapçığı ve gerekli dokümanlar teslim edilecek.</p>
                <p><strong>4. Pratik Eğitim:</strong> Modern araçlarımızla güvenli ortamda uygulamalı eğitim.</p>
              </div>

              <a href="https://vefaegitim.com/hizmetlerimiz" class="cta-button">
                Diğer Eğitim Programlarını İncele →
              </a>
            </div>

            <!-- Footer -->
            <div class="footer">
              <h4>İletişim Bilgileri</h4>
              <div class="contact-info">
                <p>📍 Beylikdüzü, İstanbul</p>
                <p>📞 +90 555 123 45 67</p>
                <p>✉️ info@vefaegitim.com</p>
                <p>🌐 www.vefaegitim.com</p>
              </div>
              <p>
                Bu e-posta size otomatik olarak gönderilmiştir. Herhangi bir sorunuz için 
                <a href="mailto:destek@vefaegitim.com" style="color: #ffd700;">destek@vefaegitim.com</a> 
                adresinden bizimle iletişime geçebilirsiniz.
              </p>
              <div class="social-links">
                <a href="https://wa.me/905551234567">WhatsApp</a> |
                <a href="https://instagram.com/vefaegitim">Instagram</a> |
                <a href="https://linkedin.com/company/vefaegitim">LinkedIn</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email
    const mailOptions = {
      from: {
        name: 'VEFA Eğitim Merkezi',
        address: process.env.GMAIL_USER || 'noreply@vefaegitim.com'
      },
      to: data.email,
      subject: `✅ Ödeme Onayı - ${data.service} Eğitimi`,
      html: htmlTemplate,
      text: `
VEFA EĞİTİM MERKEZİ - ÖDEME ONAYI

Sayın ${data.name},

${data.service} eğitimi için ödemeniz başarıyla alınmıştır.

ÖDEME BİLGİLERİ:
- Eğitim: ${data.service}
- Tutar: ${data.price}
- Ödeme Tipi: ${data.paymentType === 'full' ? 'Peşin' : `${data.installments} Taksit`}
- İşlem No: ${data.transactionId}
- Tarih: ${new Date().toLocaleString('tr-TR')}

Eğitim koordinatörümüz en kısa sürede sizinle iletişime geçecektir.

İletişim: +90 555 123 45 67
E-posta: info@vefaegitim.com

VEFA Eğitim Merkezi
      `
    }

    await transporter.sendMail(mailOptions)
    
    return NextResponse.json({ 
      success: true, 
      message: 'E-posta başarıyla gönderildi' 
    })

  } catch (error) {
    console.error('E-posta gönderme hatası:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'E-posta gönderilemedi',
        error: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}