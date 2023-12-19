import Link from "next/link";
import styles from "@/components/modules/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Link href="/">صفحه اصلی</Link>
        <Link href="/buy-residential">آگهی ها</Link>
      </div>
      <div className={styles.left}>
        <div className={styles.login}>
          <Link href="/login">ورود</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
