import styles from "@/components/templates/Admin.module.css";
import Card from "../modules/Card";
import { Toaster } from "react-hot-toast";
function AdminPage({ advertisingData }) {
  console.log(advertisingData);
  return (
    <div className={styles.container}>
      {!advertisingData ? (
        <span>آگهی در انتظار تاییدی وجود ندارد</span>
      ) : (
        advertisingData.map((item) => (
          <Card
            key={item._id}
            data={JSON.parse(JSON.stringify(item))}
            role="ADMIN"
          />
        ))
      )}
      <Toaster />
    </div>
  );
}

export default AdminPage;
