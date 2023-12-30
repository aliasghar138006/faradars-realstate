import styles from "@/components/templates/Advertising.module.css";
import Card from "../modules/Card";

async function AdvertisingPage() {
  const res = await fetch("http://localhost:3000/api/advertising", {
    next: { revalidate: 5 },
  });
  const { data } = await res.json();
  return (
    <div className={styles.container}>
      {data ? (
        data.map((item) => (
          <Card key={item._id} data={item} operation={false} />
        ))
      ) : (
        <span>آگهی وجود ندارد</span>
      )}
    </div>
  );
}

export default AdvertisingPage;
