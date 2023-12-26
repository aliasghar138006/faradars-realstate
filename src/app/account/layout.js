import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AccountPage from "@/components/templates/AccountPage";

export default async function AccountLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return (
    <div>
      <AccountPage>{children}</AccountPage>
    </div>
  );
}
