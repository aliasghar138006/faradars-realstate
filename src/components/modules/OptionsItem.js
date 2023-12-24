import styles from "@/components/templates/Add.module.css";

function OptionsItem({ data, setData, type }) {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const advertisingOptions = [...data[type]];
    advertisingOptions[index] = value;
    setData({ ...data, [type]: advertisingOptions });
  };
  const addHandler = () => {
    setData({ ...data, [type]: [...data[type], ""] });
  };
  const deleteHandler = (e, index) => {
    const advertisingOptions = [...data[type]];
    advertisingOptions.splice(index, 1);
    setData({ ...data, [type]: advertisingOptions });
  };
  return (
    <>
      {data[type].map((item, index) => (
        <div key={index}>
          <input
            type="text"
            value={item}
            onChange={(e) => changeHandler(e, index)}
          />
          <div className={styles.btn} onClick={(e) => deleteHandler(e, index)}>
            حذف
          </div>
        </div>
      ))}
      <div className={styles.btn} onClick={addHandler}>
        افزودن
      </div>
    </>
  );
}

export default OptionsItem;
