import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  //error message
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (userName.length > 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("Please enter username more than 8 charecter");
      setUserNameColor("red");
    }
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Invalid email");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be more than 8 character");
      setPasswordColor("red");
    }
    if (confirmPassword === password && confirmPassword != "") {
      setErrorConfirmPassword("");
      setConfirmPasswordColor('green')
    } else {
      setErrorConfirmPassword("Password not match");
      setConfirmPasswordColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={validateForm}>
        <h2>Register Form</h2>
        <div className="form-control">
          <label>Username :</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{color:userNameColor}}>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>Email :</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{color:emailColor}}>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{color:passwordColor}}>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>Confirm password :</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: confirmPasswordColor }}
          />
          <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;


/*
นำไปสร้าง Component 

const InputField = ({ label, value, onChange, errorMessage, borderColor }) => {
  return (
    <div className="form-control">
      <label>{label} :</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{ borderColor: borderColor }}
      />
      <small style={{ color: borderColor }}>{errorMessage}</small>
    </div>
  );
};

export default InputField;


*************ดึงไปใช้*****************************
<InputField
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          errorMessage={errorConfirmPassword}
          borderColor={confirmPasswordColor}
        />


*/
