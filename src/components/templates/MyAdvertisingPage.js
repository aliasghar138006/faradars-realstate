import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "@/components/templates/MyAdvertising.module.css";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import Card from "../modules/Card";
import { Toaster } from "react-hot-toast";

async function MyAdvertisingPage(props) {
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

  return (
    <div className={styles.container}>
      {myAdvertising.length ? null : <span>هیچ آگهی ثبت نشده است</span>}
      {myAdvertising.map((item) => (
        <Card key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
      <Toaster />
    </div>
  );
}

export default MyAdvertisingPage;
