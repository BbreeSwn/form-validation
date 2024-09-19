import './FormComponent.css'
import {useState} from 'react'

const FormComponent = () => {
  const [userName , setUserName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')

  //error message
  const [errorUserName , setErrorUserName] = useState('Invalid username')
  const [errorEmail , setErrorEmail] = useState('Invalid email')
  const [errorPassword , setErrorPassword] = useState('Password must be more than 8 character')
  const [errorConfirmPassword , setErrorConfirmPassword] = useState('Password not match')

  return (
    <div className="container">
      <form className="form">
        <h2>Register Form</h2>
        <div className="form-control">
          <label >Username :</label>
          <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
          <small>{errorUserName}</small>
        </div>
        <div className="form-control">
          <label>Email :</label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <small>{errorEmail}</small>
        </div>
        <div className="form-control">
          <label>Password :</label>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>Confirm password :</label>
          <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
          <small>{errorConfirmPassword}</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
