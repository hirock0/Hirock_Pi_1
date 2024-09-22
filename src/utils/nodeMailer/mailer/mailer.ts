import nodemailer from "nodemailer";
import { UserSchemaStr } from "@/lib/Schema/model";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType == "RESET") {
      await UserSchemaStr.findByIdAndUpdate(userId, {
        isToken: hashedToken,
        isTokenVerified: Date.now() + 3600000,
      });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 2525,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.APP_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject:
          emailType == "VERIFY" ? "Verify your email" : "Reset your password",
        html: `<p> Click <a href="${
          process.env.DOMAIN
        }/user/verifyEmail?token=${hashedToken}">Here</a>
                 to ${
                   emailType === "VERIFY"
                     ? "verify your email."
                     : "reset your password."
                 } </p>`,
      };
      const mailResponse = await transporter.sendMail(mailOptions);
      return mailResponse;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
