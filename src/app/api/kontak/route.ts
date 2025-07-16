import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Form Kontak Jemaat" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      subject: "Pesan dari Form Kontak Jemaat",
      html: `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email/WA:</strong> ${email}</p>
        <p><strong>Pesan:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gagal kirim email:", error);
    return NextResponse.json({ error: "Gagal kirim email" }, { status: 500 });
  }
}
