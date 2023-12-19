import styles from "@/components/modules/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <ul>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
          <li>
            <Link href="/create-residential">ثبت آگهی</Link>
          </li>
          <li>
            <Link href="/about-us">معرفی سایت</Link>
          </li>
        </ul>
      </div>
      <div className={styles.left}>
        <p>آدرس : سمنان</p>
        <p>تلفن تماس : 02333335642</p>
      </div>
    </div>
  );
}

export default Footer;
