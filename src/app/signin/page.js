import SigninPage from "@/components/templates/SigninPage";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function page(props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/account");
  }
  return <SigninPage />;
}

export default page;
