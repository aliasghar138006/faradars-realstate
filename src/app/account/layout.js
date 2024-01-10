import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AccountPage from "@/components/templates/AccountPage";
import User from "@/models/User";

export default async function AccountLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const { role } = await User.findOne({ email: session.user.email });
  return (
    <div>
      <AccountPage role={role}>{children}</AccountPage>
    </div>
  );
}

export const generateMetadata = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const { role } = await User.findOne({ email: session.user.email });
  if (role === "ADMIN") {
    return {
      title: "پنل کاربری ادمین",
    };
  } else {
    return {
      title: "پنل کاربری",
    };
  }
};
