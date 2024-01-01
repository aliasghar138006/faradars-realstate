import styles from "@/components/templates/Advertising.module.css";
import Card from "../modules/Card";
import Filter from "../modules/Filter";

async function AdvertisingPage({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/advertising", {
    next: { revalidate: 5 },
  });
  const { data } = await res.json();

  let finalData = data;

  if (searchParams.category) {
    finalData = finalData.filter(
      (item) => item.category === searchParams.category
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div>فیلتر بر اساس دسته بندی:</div>
        <Filter />
      </div>
      {finalData ? (
        finalData.map((item) => (
          <Card key={item._id} data={item} operations={false} />
        ))
      ) : (
        <span>آگهی وجود ندارد</span>
      )}
    </div>
  );
}

export default AdvertisingPage;
