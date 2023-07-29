import styles from "./Dashbored.module.css";
function Dashbord() {
  return (
    <div className={styles["dashbored_container"]}>
      <div>
        <img
          className={styles["dashbored_icon"]}
          alt=""
          src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
        ></img>
        <>Personal info</>
      </div>
    </div>
  );
}

export default Dashbord;
