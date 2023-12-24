import styles from "@/components/templates/Account.module.css";
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
        <Link href="/my-advertising">آگهی های من</Link>
        <Link href="/create-advertising">ثبت آگهی</Link>
        <Link href="/">خروج</Link>
      </div>
    </div>
  );
}

export default Sidebar;
