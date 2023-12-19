import User from "@/models/User";
import Connect from "@/utils/Connect";
import { HashPassword } from "@/utils/operations/Password";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({
        status: 422,
        message: "لطفا تمامی فیلد ها را پر کنید",
      });
    }

    await Connect();
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        status: 401,
        message: "کاربر ثبت نام کرده است",
      });
    }
    const hashedPassword = await HashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      status: 201,
      message: "ثبت نام انجام شد",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "server error!" });
  }
}
