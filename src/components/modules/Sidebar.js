"use client";
import styles from "@/components/templates/Account.module.css";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.icon}>
        <CgProfile />
      </div>
      <div className={styles.menu}>
        <Link href="/account">داشبورد</Link>
        <Link href="/account/my-advertising">آگهی های من</Link>
        <Link href="/account/add">ثبت آگهی</Link>
        <Link href="/account/admin">تایید آگهی</Link>
        <Link href="/signin" onClick={signOut}>
          خروج
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
