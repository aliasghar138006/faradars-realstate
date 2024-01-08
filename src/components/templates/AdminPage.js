import styles from "@/components/templates/Admin.module.css";
import Card from "../modules/Card";
function AdminPage({ advertisingData }) {
  console.log(advertisingData);
  return (
    <div className={styles.container}>
      {!advertisingData ? (
        <span>آگهی در انتظار تاییدی وجود ندارد</span>
      ) : (
        <Card data={advertisingData} role="ADMIN" />
      )}
    </div>
  );
}

export default AdminPage;
