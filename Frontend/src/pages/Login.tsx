import { Fragment } from "react";

import InputField from "../components/Input-field";
import classes from "./Login.module.css";

const field: any = [
  { name: "Mail", type: "address", placeholder: "Address" },
  { name: "Password", type: "password", placeholder: "Password" },
];

const Login = () => {
  return (
    <Fragment>
      <div className={classes["login_container"]}>
        <div className={classes["login_description"]}></div>
        <div className={classes["form_container"]}>
          <h4>Login account</h4>
          <form className={classes["form"]}>
            {field.map((data: any, index: number) => {
              return (
                <InputField
                  key={data.index}
                  name={data.name}
                  type={data.type}
                  placeholder={data.placeholder}
                />
              );
            })}
            <button>Login</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
