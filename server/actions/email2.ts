"use server";

import { Resend } from "resend";

if (!process.env.EMAIL_FROM) {
  throw new Error("EMAIL_FROM environment variable is not set");
}

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail2 = async (
  email: string,
  verificationUrl: string
) => {
  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: "Sprout and Scribble - Confirmation Email",
    html: `<p>Click to <a href='${verificationUrl}'>Confirm your email</a></p>`,
  });
  if (error) return console.log(error);
  if (data) return data;
};

export const sendForgotPasswordEmail = async (
  email: string,
  verificationUrl: string
) => {
  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: "Sprout and Scribble - Forgot Password Email",
    html: `<p>Click to <a href='${verificationUrl}'>Reset your password</a></p>`,
  });
  if (error) return console.log(error);
  if (data) return data;
};

export const sendChangeVerificationEmail = async (
  email: string,
  verificationUrl: string
) => {
  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: "Sprout and Scribble - Change your verification email",
    html: `<p>Click to <a href='${verificationUrl}'>Change your email</a></p>`,
  });
  if (error) return console.log(error);
  if (data) return data;
};
