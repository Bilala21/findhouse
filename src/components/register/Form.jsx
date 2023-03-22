import Link from "next/link";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({})
  const [auth, setAuth] = useState({})
  const create = (ev) => {
    ev.preventDefault();
    fetch('http://localhost:3000/api/auth/create', {
      method: "post",
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => setAuth(data))
  }

  const handleChange = (ev) => {
    if (ev.target.name !== "policy" && ev.target.name !== "repassword") {
      setUser(prevState => {
        return {
          ...prevState,
          [ev.target.name]: ev.target.value
        }
      })
    }
  }
  let message = ""
  console.log(auth,'auth');
  if (auth.status === 201) {
    message = <div className="input-group mb-2 mr-sm-2 py-2 bg-success text-white">
      <span className="mx-auto">Usre created</span>
    </div>
  }
  if (auth.status === 409) {
    message = <div className="input-group mb-2 mr-sm-2 py-2 bg-info text-dark">
      <span className="mx-auto">{auth.message}</span>
    </div>
  }

  return (
    <form onSubmit={create}>
      <div className="heading text-center">
        <h3>Register to your account</h3>
        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-thm">Login</a>
          </Link>
        </p>
      </div>
      {/* End .heading */}
      {message}
      <div className="form-group input-group ">
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          name="username"
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group input-group  ">
        <input
          type="password"
          className="form-control"
          name="repassword"
          placeholder="Re-enter password"
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .form-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          name="policy"
          id="terms"
          onChange={handleChange}
        />
        <label className="form-check-label form-check-label" htmlFor="terms">
          I have read and accept the Terms and Privacy Policy?
        </label>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Register
      </button>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  );
};

export default Form;
