import styles from "@/components/templates/Admin.module.css";

function AdminPage({ advertisingData }) {
  return (
    <div className={styles.container}>
      {!advertisingData.length ? (
        <span>آگهی در انتظار تاییدی وجود ندارد</span>
      ) : null}
    </div>
  );
}

export default AdminPage;
