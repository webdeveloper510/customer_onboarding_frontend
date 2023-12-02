import React, { useState } from "react";
import logo from "../../../assets/image/logo1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [passVissible, setPassVissible] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    // validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="main">
      <div className="row m-0">
        <div className="col-md-6 signin-colm">
          <div className="py-4"></div>
          <div className="text-end">
            <button className="login-btn">Sign in</button>
          </div>
          <div className="text-end">
            <Link to="/registration">
              <button className="logup-btn">Sign up</button>
            </Link>
          </div>
          <div className="image-section text-center">
            <img src={logo} alt="logo-images" className="logo-images" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-section">
            <div className="mt-5">
              <h2 className="text-center mt-4 heading">Sign in</h2>
              <div>
                <form onSubmit={formik.handleSubmit} noValidate>
                  <div className="mb-3" id="pwd_field">
                    <input
                      placeholder="Email"
                      type="email"
                      autoComplete="off"
                      {...formik.getFieldProps("email")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.email && formik.errors.email,
                        },
                        {
                          "is-valid":
                            formik.touched.email && !formik.errors.email,
                        }
                      )}
                      name="email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="text-danger text-start">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3" id="pwd_field">
                    <input
                      type={passVissible ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="new-password"
                      {...formik.getFieldProps("password")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.password && formik.errors.password,
                        },
                        {
                          "is-valid":
                            formik.touched.password && !formik.errors.password,
                        }
                      )}
                      name="password"
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <div className="text-danger text-start">
                        {formik.errors.password}
                      </div>
                    ) : null}

                    <span class="flex justify-around items-center eye_pwd_icon">
                      {passVissible == true ? (
                        <i
                          className="bi bi-eye-slash absolute mr-10"
                          onClick={() => setPassVissible(!passVissible)}
                        ></i>
                      ) : (
                        <i
                          className="bi bi-eye absolute mr-10"
                          onClick={() => setPassVissible(!passVissible)}
                        ></i>
                      )}
                    </span>
                  </div>

                  <div className="text-center mt-5">
                    <button type="submit" className="submit-btn">
                      Sign in
                    </button>
                  </div>

                  <div className="text-center mt-2">
                    <Link to="/forgot-password" className="forgot-pass">
                      Forget Password
                    </Link>
                  </div>
                  {/* <div className="my-4 text-center">
                    <p>Or</p>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
