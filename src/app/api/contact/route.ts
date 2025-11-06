import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	try {
		const { name, email, message } = await req.json();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
			to: process.env.EMAIL_TO,
			subject: `Nouveau message de ${name}`,
			text: `Nom : ${name}\nEmail : ${email}\nMessage : ${message}`,
		});

		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ success: false }, { status: 500 });
	}
}
