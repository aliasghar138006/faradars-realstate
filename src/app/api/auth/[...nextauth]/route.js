import User from "@/models/User";
import Connect from "@/utils/Connect";
import { VerifyPassword } from "@/utils/operations/Password";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credential) {
        const { email, password } = credential;

        if (!email || !password) {
          throw new Error("لطفا تمامی فیلدها را پر کنید");
          return;
        }

        await Connect();

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("کاربر ثبت نام نکرده است");
          return;
        }

        const verifyPassword = await VerifyPassword(password, user.password);
        if (!verifyPassword) {
          throw new Error("ایمیل یا کلمه عبور اشتباه است");
          return;
        }
        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
