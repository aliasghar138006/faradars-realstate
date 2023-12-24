import Advertising from "@/models/Advertising";
import User from "@/models/User";
import Connect from "@/utils/Connect";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      title,
      description,
      phone,
      location,
      price,
      realState,
      category,
      constructionDate,
      amenities,
      rules,
    } = await req.json();
    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json({
        status: 422,
        message: "لطفا فیلدها را پر کنید",
      });
    }
    await Connect();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ status: 403, message: "ابتدا وارد شوید" });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "کاربر ثبت نام نکرده است",
      });
    }

    const newAdvertising = await Advertising.create({
      title,
      description,
      phone,
      location,
      price: +price,
      realState,
      category,
      constructionDate,
      amenities,
      rules,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json({
      status: 201,
      message: "آگهی با موفقیت ثبت شد",
      data: newAdvertising,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "server errror" });
  }
}

export async function PATCH(req) {
  try {
    const {
      _id,
      title,
      description,
      phone,
      location,
      price,
      realState,
      category,
      constructionDate,
      amenities,
      rules,
    } = await req.json();
    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json({
        status: 422,
        message: "لطفا فیلدها را پر کنید",
      });
    }
    await Connect();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ status: 403, message: "ابتدا وارد شوید" });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({
        status: 404,
        message: "کاربر ثبت نام نکرده است",
      });
    }

    const advertising = await Advertising.findOne({ _id });

    if (!user._id.equals(advertising.userId)) {
      return NextResponse.json({
        status: 403,
        message: "امکان ویرایش آگهی توسط شما وجود ندارد",
      });
    }

    advertising.title = title;
    advertising.description = description;
    advertising.category = category;
    advertising.phone = phone;
    advertising.price = +price;
    advertising.location = location;
    advertising.rules = rules;
    advertising.amenities = amenities;
    advertising.constructionDate = constructionDate;
    advertising.realState = realState;
    advertising.save();

    return NextResponse.json({
      status: 200,
      message: "اگهی با موفقیت ویرایش شد",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "server errror" });
  }
}
