import { Fragment } from "react";
import styles from "./Checkout.module.css";
import { GiCancel } from "react-icons/gi";

function Checkout(props: any) {
  console.log(props.bookings);

  return (
    <div className={styles.checkout_container}>
      <div className={styles.checkout_title}>
        <h2>Booking list</h2>
        <h2>
          <GiCancel onClick={props.onClick} />
        </h2>
      </div>
      {props.bookings.map((booking: any, index: number) => {
        return (
          <Fragment key={index}>
            <div className={styles.class_data}>
              <h4>{booking[0]}</h4>
              <h4>{booking[1]}</h4>
              <h4>
                {booking[2] % 1 === 0.5
                  ? `${booking[2] - 0.5}:30`
                  : `${booking[2]}:00`}{" "}
                ~{" "}
                {booking[3] % 1 === 0.5
                  ? `${booking[3] - 0.5}:30`
                  : `${booking[3]}:00`}
              </h4>
            </div>
          </Fragment>
        );
      })}
      <div className={styles.confirm_container}>
        <button>Confirm</button>
      </div>
    </div>
  );
}

export default Checkout;
