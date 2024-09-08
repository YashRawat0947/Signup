import { MailtrapClient } from "mailtrap";

const TOKEN = "5808eed99acdc523ee7e28f989dd7cce";

export const mailTrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
    name: "Yash Rawat",
};

