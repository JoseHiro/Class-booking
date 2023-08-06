import { useState } from "react";
import styles from "./Booking.module.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Checkout from "../components/Checkout";

function Booking() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const today = date.getDate();
  const day = date.getDay();
  let startDate = today;

  const [displayCheckout, setDisplayCheckout] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(month);
  const [hourMode, setHourMode] = useState(true);
  const [bookings, setBookings] = useState<any[]>([]);
  const [price, setPrice] = useState(0);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

  const fullStartDate = Number(
    `${year}${month >= 10 ? month : "0" + month}${
      today >= 10 ? date : "0" + today
    }`
  );

  const week_data = [
    { fullStartDate: fullStartDate, date: startDate, day: days[day] },
    {
      fullStartDate: fullStartDate + 1,
      date: startDate + 1,
      day: day + 1 > 6 ? days[day - 7 + 1] : days[day + 1],
    },
    {
      fullStartDate: fullStartDate + 2,
      date: startDate + 2,
      day: day + 2 > 6 ? days[day - 7 + 2] : days[day + 2],
    },
    {
      fullStartDate: fullStartDate + 3,
      date: startDate + 3,
      day: day + 2 > 6 ? days[day - 7 + 3] : days[day + 3],
    },
    {
      fullStartDate: fullStartDate + 4,
      date: startDate + 4,
      day: day + 2 > 6 ? days[day - 7 + 4] : days[day + 4],
    },
    {
      fullStartDate: fullStartDate + 5,
      date: startDate + 5,
      day: day + 2 > 6 ? days[day - 7 + 5] : days[day + 5],
    },
    {
      fullStartDate: fullStartDate + 6,
      date: startDate + 6,
      day: day + 2 > 6 ? days[day - 7 + 6] : days[day + 6],
    },
  ];

  const hours = [
    ["0:00", 0],
    ["0:30", 0.5],
    ["1:00", 1],
    ["1:30", 1.5],
    ["2:00", 2],
    ["2:30", 2.5],
    ["3:00", 3],
    ["3:30", 3.5],
    ["4:00", 4],
    ["4:30", 4.5],
    ["5:00", 5],
    ["5:30", 5.5],
    ["6:00", 6],
    ["6:30", 6.5],
    ["7:00", 7],
    ["7:30", 7.5],
    ["8:00", 8],
    ["8:30", 8.5],
    ["9:00", 9],
    ["9:30", 9.5],
    ["10:00", 10],
    ["10:30", 10.5],
    ["11:00", 11],
    ["11:30", 11.5],
    ["12:00", 12],
    ["12:30", 12.5],
    ["13:00", 13],
    ["13:30", 13.5],
    ["14:00", 14],
    ["14:30", 14.5],
    ["15:00", 15],
    ["15:30", 15.5],
    ["16:00", 16],
    ["16:30", 16.5],
    ["17:00", 17],
    ["17:30", 17.5],
    ["18:00", 18],
    ["18:30", 18.5],
    ["19:00", 19],
    ["19:30", 19.5],
    ["20:00", 20],
    ["20:30", 20.5],
    ["21:00", 21],
    ["21:30", 21.5],
    ["22:00", 22],
    ["22:30", 22.5],
    ["23:00", 23],
    ["23:30", 23.5],
  ];

  const onMouseEnter = (e: any) => {};

  const onMouseLeave = (e: any) => {};

  const onClick = (e: any) => {
    const detail = e.target.attributes.value.nodeValue;
    if (!e.target.className.includes("colorChange")) {
      e.target.className += " " + styles.colorChange;
      const split_detail = detail.split(" ");
      const selectedDate = split_detail[0];
      const selectedDay = split_detail[1];
      const selectedTime = Number(split_detail[2]);

      let finishTime: number;
      if (hourMode) {
        finishTime = selectedTime + 1;
        setPrice(price + 22);
      } else {
        finishTime = selectedTime + 0.5;
        setPrice(price + 12);
      }
      let updateBookings: any = [
        ...bookings,
        [selectedDate, selectedDay, selectedTime, finishTime],
      ];

      updateBookings = updateBookings.sort((first: any, second: any) => {
        return first.selectedDate - second.selectedDate;
      });

      updateBookings = updateBookings.sort((first: any, second: any) => {
        return first.selectedTime - second.selectedTime;
      });

      setBookings(updateBookings);
    }
  };

  const handleDisplay = () => {
    setDisplayCheckout(!displayCheckout);
  };

  return (
    <div className={`${styles.booking_container} ${displayCheckout? styles.displaying_checkout: undefined}`}>
      {displayCheckout && <Checkout bookings={bookings} onClick={handleDisplay}/>}
      <div className={styles.booking_header}>
        <h4>{month + "/" + today + "~"}</h4>
        <h3>Schedule your lesson</h3>
        <h3>
          <BsFillArrowRightCircleFill />
        </h3>
      </div>

      <div className={styles.calender_container}>
        <div className={styles.hour_list_container}>
          <ul className={styles.hours_container}>
            {hours.map((hour, index) => {
              return (
                <li
                  className={
                    index % 2 === 1 ? styles.halfhour_time_li : undefined
                  }
                  key={index}
                >
                  {hour[0]}
                </li>
              );
            })}
          </ul>
        </div>
        {week_data.map((data, index) => {
          return (
            <div
              key={index}
              className={`${styles.day_container} ${
                index === 0 ? styles.first_day_container : ""
              }${index === 6 ? styles.last_day_container : ""}`}
            >
              <div className={styles.day_week_day}>
                <h5>{data.date}</h5>
                <h3>{data.day}</h3>
              </div>
              <ul className={styles.slot_container}>
                {hours.map((hour, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        index % 2 === 0 ? styles.hour : styles.mid_hour
                      }
                      value={
                        data.fullStartDate + " " + data.day + " " + hour[1]
                      }
                      onMouseOver={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      onClick={onClick}
                    ></li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className={styles.booking_footer_container}>
        <div className={styles.class_time_selector}>
          <h3>Select class time</h3>
          <nav>
            <button>30min / 12$</button>
            <button>60min / 22$</button>
          </nav>
        </div>
        <div className={styles.book_button}>
          <h2>{price} $</h2>
          <button onClick={handleDisplay}>Check your booking</button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
