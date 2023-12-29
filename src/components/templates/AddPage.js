"use client";

import styles from "@/components/templates/Add.module.css";
import { useEffect, useState } from "react";
import TextInput from "../modules/TextInput";
import RadioItem from "../modules/RadioItem";
import OptionsItem from "../modules/OptionsItem";
import CustomDatePicker from "../modules/CustomDatePicker";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AddPage({ advertisingData }) {
  const [data, setData] = useState({
    title: "",
    description: "",
    realState: "",
    constructionDate: new Date(),
    price: "",
    phone: "",
    location: "",
    category: "villa",
    amenities: [],
    rules: [],
  });

  const router = useRouter();

  useEffect(() => {
    if (advertisingData) {
      setData(advertisingData);
    }
  }, []);

  const editHandler = async () => {
    const res = await fetch("/api/advertising", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.status === 200) {
      toast.success(result.message);
      router.push("/account/my-advertising");
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };

  const addHandler = async () => {
    const res = await fetch("/api/advertising", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.status === 201) {
      toast.success(result.message);
      router.push("/account/my-advertising");
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <div className={styles.container}>
      {advertisingData ? <h3>ویرایش آگهی</h3> : <h3>ثبت آگهی</h3>}
      <form>
        <div className={styles.fields}>
          <TextInput
            title="عنوان آگهی"
            name="title"
            data={data}
            setData={setData}
          />
          <TextInput
            title="توضیحات کوتاه"
            name="description"
            data={data}
            setData={setData}
          />
          <TextInput
            title="آدرس"
            name="location"
            data={data}
            setData={setData}
          />
          <TextInput title="قیمت" name="price" data={data} setData={setData} />
          <TextInput
            title="شماره تماس"
            name="phone"
            data={data}
            setData={setData}
          />
          <TextInput
            title="نام املاک"
            name="realState"
            data={data}
            setData={setData}
          />
        </div>
        <h4>دسته بندی</h4>
        <div className={styles.category}>
          <RadioItem title="ویلا" name="villa" data={data} setData={setData} />
          <RadioItem
            title="آپارتمان"
            name="appartment"
            data={data}
            setData={setData}
          />
          <RadioItem title="دفتر" name="office" data={data} setData={setData} />
          <RadioItem
            title="فروشگاه"
            name="store"
            data={data}
            setData={setData}
          />
        </div>
        <h4>امکانات رفاهی</h4>
        <div className={styles.options}>
          <OptionsItem data={data} setData={setData} name="amenities" />
          <h4>قوانین</h4>
          <OptionsItem data={data} setData={setData} name="rules" />
        </div>
        <CustomDatePicker data={data} setData={setData} />

        {advertisingData ? (
          <div className={styles.add} onClick={editHandler}>
            ویرایش آگهی
          </div>
        ) : (
          <div className={styles.add} onClick={addHandler}>
            ثبت آگهی
          </div>
        )}
      </form>
      <Toaster />
    </div>
  );
}

export default AddPage;
