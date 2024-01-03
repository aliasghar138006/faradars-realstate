"use client";
import styles from "@/components/templates/Advertising.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Filter() {
  const [query, setQuery] = useState({ category: "" });
  const router = useRouter();
  const changeHandler = (e) => {
    setQuery({ ...query, category: e.target.value });
  };
  return (
    <div className={styles.options}>
      <select onChange={changeHandler}>
        <option value="">همه</option>
        <option value="villa">ویلا</option>
        <option value="appartment">آپارتمان</option>
        <option value="store">فروشگاه</option>
        <option value="office">دفتر</option>
      </select>
      <div
        onClick={() => router.push(`/advertising/?category=${query.category}`)}
      >
        جستجو
      </div>
    </div>
  );
}

export default Filter;
