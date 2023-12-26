import styles from "@/components/templates/Account.module.css";
import Sidebar from "../modules/Sidebar";

function AccountPage({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default AccountPage;