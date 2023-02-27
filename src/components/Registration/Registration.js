import Footer from "../footer/Footer";
import Input_lable_component from "./Input_lable_component";
import { useState } from "react";
import registration_submit from "../../action/registr";
const Registration = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="registration">
      <h2>Registration</h2>
      <form >
        <Input_lable_component
          props={{
            text: "Name",
            name: "name",
            type: "text",
            value: name,
            setValue: setName
          }}
        />
        <Input_lable_component
          props={{
            text: "Email",
            name: "Email",
            type: "email",
            value: email,
            setValue: setEmail
          }}
        />
        <Input_lable_component
          props={{
            text: "Login",
            name: "Login",
            type: "login",
            value: login,
            setValue: setLogin
          }}
        />
        <Input_lable_component
          props={{
            text: "Password",
            name: "Password",
            type: "password",
            value: password,
            setValue: setPassword
          }} />
        <button type="submit" onClick={() => registration_submit(name, email, login, password)} >Submit</button>
        <Footer></Footer>
      </form>
    </div>
  );
};

export default Registration;