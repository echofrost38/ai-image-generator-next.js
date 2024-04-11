import { render } from "mjml-react";
import nodemailer from "nodemailer";
import { ReactElement } from "react";

export const EMAIL_SUBJECTS = {
  LOGIN: "Your Photoshot Login Link",
};

// const transporter = nodemailer.createTransport({
//   host: "localhost",
//   port: 25,
//   secure: false
// });

console.log("here")
console.log(process.env.EMAIL_SERVER)
const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER);

export const sendEmail = async ({
  to,
  subject,
  component,
}: {
  to: string;
  subject: string;
  component: ReactElement;
}) => {
  const { html } = render(component);

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  });
};
