import AdminPage from "@/components/templates/AdminPage";
import Advertising from "@/models/Advertising";
import User from "@/models/User";
import Connect from "@/utils/Connect";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function page() {
  const session = await getServerSession(authOptions);
  await Connect();
  const { role } = await User.findOne({ email: session.user.email });
  if (role !== "ADMIN") redirect("/account");
  const advertisingData = await Advertising.find({ published: false });
  return <AdminPage advertisingData={advertisingData} />;
}

export default page;
