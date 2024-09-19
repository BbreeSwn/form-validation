import './FormComponent.css'

const FormComponent = () => {
  return (
    <div className="container">
      <form className="form">
        <h2>Register Form</h2>
        <div className="form-control">
          <label>Username :</label>
          <input type="text" />
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Email :</label>
          <input type="text" />
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Password :</label>
          <input type="text" />
          <small>error message</small>
        </div>
        <div className="form-control">
          <label>Confirm password :</label>
          <input type="text" />
          <small>error message</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
