function Error(props) {
  return (
    <div
      style={{
        display: "flex",
        margin: "200px",
        alignItems: "center",
      }}
    >
      <span
        style={{
          padding: "5px 20px",
          margin: "auto",
          borderRadius: "10px",
          backgroundColor: "rgb(206, 64, 64)",
          color: "white",
        }}
      >
        صفحه مورد نظر یافت نشد
      </span>
    </div>
  );
}

export default Error;
