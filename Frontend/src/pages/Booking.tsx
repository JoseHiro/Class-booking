import styles from "./Booking.module.css";

function Booking() {
  const date = new Date();
  const month = date.getMonth();
  const today = date.getDate();
  const day = date.getDay();

  let startDate = today;

  const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  const week_data = [
    { date: startDate, day: days[day] },
    {
      date: startDate + 1,
      day: day + 1 > 6 ? days[day - 7 + 1] : days[day + 1],
    },
    {
      date: startDate + 2,
      day: day + 2 > 6 ? days[day - 7 + 2] : days[day + 2],
    },
    {
      date: startDate + 3,
      day: day + 2 > 6 ? days[day - 7 + 3] : days[day + 3],
    },
    {
      date: startDate + 4,
      day: day + 2 > 6 ? days[day - 7 + 4] : days[day + 4],
    },
    {
      date: startDate + 5,
      day: day + 2 > 6 ? days[day - 7 + 5] : days[day + 5],
    },
    {
      date: startDate + 6,
      day: day + 2 > 6 ? days[day - 7 + 6] : days[day + 6],
    },
  ];

  const hours = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9,
    9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5,
    17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5,
  ];

  return (
    <div className={styles.booking_container}>
      <div className={styles.booking_header}>
        <h4>{month + "/" + today + "~"}</h4>
      </div>

      <div className={styles.calender_container}>
        <div className={styles.hour_list_container}>
          <div className={styles.hours_container}>
            {hours.map((hour) => {
              return hour % 1 === 0 && <p>{hour}</p>;
            })}
          </div>
        </div>
        {week_data.map((data, index) => {
          return (
            <div
              className={`${styles.day_container} ${
                index === 0 ? "first_day_container" : ""
              }${index === 6 ? "last_day_container" : ""}`}
            >
              <div className={styles.day_week_day}>
                <h5>{data.date}</h5>
                <h3>{data.day}</h3>
              </div>
              <ul className={styles.slot_container}>
                {hours.map((hour) => {
                  return hour % 1 === 0 ? (
                    <li className={styles.hour}></li>
                  ) : (
                    <li className={styles.mid_hour}></li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default Booking;
