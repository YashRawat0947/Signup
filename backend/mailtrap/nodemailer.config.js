import nodemailer from 'nodemailer';

export const sendGmailEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yashgaming0947@gmail.com', // Replace with your Gmail address
      pass: 'wuzr xgvu egrf fsnv', // Replace with your Gmail password or App password
    },
  });
}