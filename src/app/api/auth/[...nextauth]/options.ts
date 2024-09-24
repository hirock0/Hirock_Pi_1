import dbConnect from "@/lib/dbConnection/dbConection";
import { UserSchemaStr } from "@/lib/Schema/model";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcryptjs from "bcryptjs";
export const authOption: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email!",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const findUser = await UserSchemaStr.findOne({
            email: credentials?.email,
          });
          if (findUser == null) {
            return false;
          }
          const isPasswordCorrect = await bcryptjs.compare(
            credentials.password,
            findUser.password
          );
          if (isPasswordCorrect) {
            return findUser;
          } else {
            throw new Error("Password is incorrect");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await dbConnect();
      try {
        const findUser = await UserSchemaStr.findOne({ email: user?.email });
        if (findUser == null) {
          const preSaveData = await new UserSchemaStr({
            userName: user?.name,
            email: user?.email,
            password: "",
            userImage: user?.image,
            address: {
              villageOrTown: "",
              postOffice: "",
              thana: "",
              district: "",
              postCode: "",
              country: "",
            },
            educations: {
              ssc: {
                institution: "",
                result: "",
                passingYear: "",
              },
              hsc: {
                institution: "",
                result: "",
                passingYear: "",
              },
              ba: {
                institution: "",
                result: "",
                passingYear: "",
              },
              ma: {
                institution: "",
                result: "",
                passingYear: "",
              },
              another: {
                institution: "",
                result: "",
                passingYear: "",
              },
            },
            contact: "",
            recentDate: new Date().toLocaleDateString(),
          });
          const saveData = await preSaveData.save();
          return saveData;
        } else {
          return findUser;
        }
      } catch (error: any) {
        throw new Error(error);
      }
    },

    async jwt({ token, user }) {
      await dbConnect();
      if (user) {
        const findUser = await UserSchemaStr.findOne({ email: user?.email });
        token._id = findUser._id.toString();
        token.name = findUser.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.name = token.name;
      }
      return session;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/user/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
