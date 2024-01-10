import Advertising from "@/models/Advertising";
import User from "@/models/User";
import Connect from "@/utils/Connect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, { params: { advertisingId } }) {
  try {
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ status: 401, message: "وارد حساب شوید" });
    }
    await Connect();
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ status: 401, message: "کاربر یافت نشد" });
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ status: 403, message: "عدم دسترسی" });
    }
    const advertisingData = await Advertising.findOne({ _id: advertisingId });
    advertisingData.published = true;
    advertisingData.save();
    return NextResponse.json({ status: 200, message: "آگهی منتشر شد" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "server error!" });
  }
}
