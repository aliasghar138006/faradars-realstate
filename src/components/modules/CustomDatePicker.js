import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "@/components/modules/CustomDatePicker.module.css";

function CustomDatePicker({ data, setData }) {
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={data.constructionDate}
        onChange={(e) => {
          setData({ ...data, constructionDate: new Date(e) });
        }}
      />
    </div>
  );
}

export default CustomDatePicker;
