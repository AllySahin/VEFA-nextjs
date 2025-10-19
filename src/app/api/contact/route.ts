import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    // Mail konfigürasyonu
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'alisahin12.05@gmail.com',
        pass: 'nufk zwzm tjfu zppe'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Mail içeriği
    const mailOptions = {
      from: 'alisahin12.05@gmail.com',
      to: 'alisahin12.05@gmail.com', // Gelen maillerin gideceği adres
      subject: `VEFA İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; margin-bottom: 20px; text-align: center;">VEFA İletişim Formu</h2>
            
            <div style="margin-bottom: 15px; padding: 15px; background-color: #f1f2f6; border-radius: 8px;">
              <strong style="color: #34495e;">Ad Soyad:</strong> 
              <span style="color: #2c3e50;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 15px; background-color: #f1f2f6; border-radius: 8px;">
              <strong style="color: #34495e;">E-posta:</strong> 
              <span style="color: #2c3e50;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 15px; background-color: #f1f2f6; border-radius: 8px;">
              <strong style="color: #34495e;">Telefon:</strong> 
              <span style="color: #2c3e50;">${phone}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 15px; background-color: #f1f2f6; border-radius: 8px;">
              <strong style="color: #34495e;">Konu:</strong> 
              <span style="color: #2c3e50;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 20px; padding: 20px; background-color: #fff; border: 1px solid #e1e5e9; border-radius: 8px;">
              <strong style="color: #34495e; margin-bottom: 10px; display: block;">Mesaj:</strong>
              <p style="color: #2c3e50; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e1e5e9;">
              <p style="color: #7f8c8d; font-size: 14px; margin: 0;">
                Bu mesaj VEFA Eğitim web sitesi iletişim formundan gönderilmiştir.
              </p>
            </div>
          </div>
        </div>
      `
    }

    // Otomatik yanıt maili
    const autoReplyOptions = {
      from: 'alisahin12.05@gmail.com',
      to: email,
      subject: 'VEFA Eğitim - Mesajınızı Aldık',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #2c3e50; margin-bottom: 10px;">VEFA EĞİTİM</h2>
              <p style="color: #7f8c8d; font-size: 16px; margin: 0;">Mesajınızı Aldık</p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <p style="color: #2c3e50; font-size: 16px; line-height: 1.6;">
                Sayın <strong>${name}</strong>,
              </p>
              <p style="color: #2c3e50; font-size: 16px; line-height: 1.6;">
                VEFA Eğitim'e gösterdiğiniz ilgi için teşekkür ederiz. Mesajınızı aldık ve en kısa sürede size dönüş yapacağız.
              </p>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <p style="color: #2c3e50; margin: 0; font-size: 14px;">
                <strong>Konu:</strong> ${subject}
              </p>
            </div>
            
            <div style="margin-bottom: 25px;">
              <p style="color: #2c3e50; font-size: 14px; line-height: 1.6;">
                Acil durumlar için bizi aşağıdaki iletişim bilgilerinden ulaşabilirsiniz:
              </p>
              <ul style="color: #2c3e50; font-size: 14px; line-height: 1.6;">
                <li>Telefon: +90 (XXX) XXX XX XX</li>
                <li>WhatsApp: +90 (XXX) XXX XX XX</li>
                <li>Adres: İstanbul, Türkiye</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e1e5e9;">
              <p style="color: #7f8c8d; font-size: 12px; margin: 0;">
                Bu mesaj otomatik olarak gönderilmiştir. Lütfen yanıtlamayınız.
              </p>
            </div>
          </div>
        </div>
      `
    }

    // Mailleri gönder
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Mesajınız başarıyla gönderildi!' 
    })

  } catch (error) {
    console.error('Mail gönderme hatası:', error)
    return NextResponse.json({ 
      success: false, 
      message: 'Mail gönderilirken bir hata oluştu.' 
    }, { status: 500 })
  }
}