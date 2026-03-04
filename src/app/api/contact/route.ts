import { NextResponse } from 'next/server';
import ticketSender from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, message, phone } = await req.json();

    const transporter = ticketSender.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
        from: `"J&M Industry Web" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER, // Send to self
        subject: `Nuevo Lead: ${name} - Demo Request`,
        html: `
            <h2>Nueva Solicitud de Demo</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
        `,
        replyTo: email
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
