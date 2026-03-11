import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !smtpPass) {
    console.log("EMAIL (dev mode) >>>", { email, subject });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject,
    html: message,
  });
};

