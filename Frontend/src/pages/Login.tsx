import { Fragment, useState, useRef } from "react";

import InputField from "../components/Input-field";
import classes from "./Login.module.css";

const auth = {
  email: "aaa@com",
  password: "messi",
};

const Login = () => {
  const [login, setLogin] = useState(true);
  const email: any = useRef("");
  const password: any = useRef("");

  const field: any = [
    { name: "mail", type: "mail", placeholder: "Address", ref: email },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      ref: password,
    },
  ];

  const changeInput = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case "mail":
        return (email.current = value);
      case "password":
        return (password.current = value);
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (password.current === auth.password && email.current === auth.email) {
      console.log("got in");
      email.current = "";
      password.current = "";
      setLogin(false);
    } else {
      console.log("try again!");
    }
  };

  const handelMode = (e: any) => {
    e.preventDefault();
    setLogin(!login);
  };

  return (
    <Fragment>
      <div className={classes["login_container"]}>
        <div className={classes["login_description"]}></div>
        <div className={classes["form_container"]}>
          {login ? <h4>Create account</h4> : <h4>Login account</h4>}
          <form onSubmit={submitHandler} className={classes["form"]}>
            {field.map((data: any, index: number) => {
              return (
                <InputField
                  // onChange={changeInput}
                  dataRef={data.ref}
                  key={index}
                  name={data.name}
                  type={data.type}
                  placeholder={data.placeholder}
                />
              );
            })}
            <button>{login ? "Sign in" : "Login"}</button>
            <button onClick={handelMode}>
              {login ? "Login account" : "Create account"}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
