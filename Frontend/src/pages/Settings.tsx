import { useRef } from "react";
import styles from "./Settings.module.css";
import InputField from "../components/Input-field";

const booklist = [
  { value: "genki1", name: "Genki 1" },
  { value: "genki2", name: "Genki 2" },
  { value: "tobira", name: "とびら" },
  { value: "minnaNoNihongo", name: "みんなの日本語1" },
  { value: "jlptN5_N4", name: "JLPT Books N5 - N4" },
  { value: "jlptN2", name: "JLPT Books N2" },
  { value: "jlptN3", name: "JLPT Books N3" },
  { value: "jlptN1", name: "JLPT Books N1" },
];

const allLevel = [
  { value: "N5", name: "N5" },
  { value: "N4", name: "N4" },
  { value: "N3", name: "N3" },
  { value: "N2", name: "N2" },
  { value: "N1", name: "N1" },
];

const Settings = () => {
  const userName = useRef<HTMLInputElement>(null!);
  const intrests = useRef<HTMLInputElement>(null!);

  const field: any = [
    { name: "name", type: "text", placeholder: "name", ref: userName },
    {
      name: "interests",
      type: "text",
      placeholder: "interests",
      ref: intrests,
    },
  ];

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (userName.current && intrests.current) {
      console.log(userName.current);
      userName.current.value = "";
      intrests.current.value = "";
      console.log("worked");
      console.log(userName.current);
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div className={styles.settings_container}>
      <img
        alt=""
        src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
      ></img>
      <div className={styles.form_container}>
        <form onSubmit={submitHandler} className={styles.form}>
          {field.map((data: any, index: number) => (

            <InputField
              key={index}
              name={data.name}
              dataRef={data.ref}
              type={data.type}
              placeholder={data.placeholder}
            />
          ))}
          <select name="textbooks">
          <option value="">Your latest textbook</option>
            {booklist.map((book: any, index: number) => {
              return (
                <option key={index} value={book.value}>
                  {book.name}
                </option>
              );
            })}
          </select>

          <select name="level">
          <option value="">What level is your Japanese?</option>
            {allLevel.map((level: any, index: number) => {
              return <option value={level.value}>{level.name}</option>;
            })}
          </select>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
