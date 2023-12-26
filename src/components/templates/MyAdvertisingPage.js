import React from "react";
import Card from "../modules/Card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import styles from "@/components/templates/MyAdvertising.module.css";

async function MyAdvertisingPage() {
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "advertisings",
        foreignField: "userId",
        localField: "_id",
        as: "myAdvertising",
      },
    },
  ]);

  const { myAdvertising } = user;
  console.log(myAdvertising);
  return (
    <div className={styles.container}>
      {myAdvertising.length ? null : <p>آگهی وجود ندارد ابتدا آگهی ثبت کنید</p>}
      {myAdvertising.map((item) => (
        <Card
          key={item._id}
          title={item.title}
          location={item.location}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default MyAdvertisingPage;
