import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import redirectAfterAuthenticate from "../../../middleware/redirectAfterAuthenticate";
import {getSession, signIn} from "next-auth/client"

const Form = () => {
  const [user, setUser] = useState({})
  const [auth, setAuth] = useState({})
  const router = useRouter()
  const login = async (ev) => {
    ev.preventDefault();
    const logdInuser = await signIn("credentials",{...user,redirect:false})
    const session = await getSession();
    console.log(session);
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


  let error_message=""
  if (auth.status === 404) {
    error_message = <div className="input-group mb-2 mr-sm-2 py-2 bg-danger text-white">
      <span className="mx-auto">{auth.message}</span>
    </div>
  }
  return (
    <form onSubmit={login}>
      <div className="heading text-center">
        <h3>Login to your account</h3>
        <p className="text-center">
          Dont have an account?{" "}
          <Link href="/register">
            <a className="text-thm">Sign Up!</a>
          </Link>
        </p>
      </div>
      {error_message}
      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          required
          placeholder="User Name Or Email"
          name="email"
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          required
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="remeberMe"
        />
        <label
          className="form-check-label form-check-label"
          htmlFor="remeberMe"
        >
          Remember me
        </label>

        <a className="btn-fpswd float-end" href="#">
          Forgot password?
        </a>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Log In
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
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
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
