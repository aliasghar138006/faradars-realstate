import styles from "@/components/templates/Admin.module.css";
function AdminPage({ advertisingData }) {
  console.log(advertisingData);
  return (
    <div className={styles.container}>
      {!advertisingData ? <span>آگهی در انتظار تاییدی وجود ندارد</span> : null}
    </div>
  );
}

export default AdminPage;
