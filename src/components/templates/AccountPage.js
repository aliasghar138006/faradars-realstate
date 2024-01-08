import styles from "@/components/templates/Account.module.css";
import Sidebar from "../modules/Sidebar";

function AccountPage({ children, role }) {
  return (
    <div className={styles.container}>
      <Sidebar role={role} />
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default AccountPage;
