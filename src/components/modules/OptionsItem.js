import styles from "@/components/templates/Add.module.css";

function OptionsItem({ data, name, setData }) {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const advertisingOptions = [...data[name]];
    advertisingOptions[index] = value;
    setData({ ...data, [name]: advertisingOptions });
  };

  const addHandler = () => {
    setData({ ...data, [name]: [...data[name], ""] });
  };

  const deleteHandler = (e, index) => {
    const advertisingOptions = [...data[name]];
    advertisingOptions.splice(index, 1);
    setData({ ...data, [name]: advertisingOptions });
  };
  return (
    <>
      {data[name].map((item, index) => (
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
