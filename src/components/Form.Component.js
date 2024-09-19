const FormComponent = () => {
  return (
    <div className="container">
      <form className="form">
        <div className="form-control">
          <label>Username :</label>
          <input type="text" />
          <small>error message</small>
          <label>Email :</label>
          <input type="text" />
          <small>error message</small>
          <label>Password :</label>
          <input type="text" />
          <small>error message</small>
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
