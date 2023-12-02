import React, { useState } from "react";
import "./signup.scss";
import logo from "../../../assets/image/logo1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Signup = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  const [passVissible, setPassVissible] = useState(false);
  const [cpassVissible, setCpassVissible] = useState(false);

  const loginSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("First name is required"),
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is required"),
    last_name: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Last name is required"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password confirmation is required")
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
    phone_no: Yup.string()
      .min(3, "Minimum 7 symbols")
      .max(50, "Maximum 16 symbols")
      .required("Phone Numbar is required"),
    date_birth: Yup.string().required("Date of birth is required"),
    company: Yup.string().required("Company name is required"),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_no: "",
    date_birth: "",
    company: "",
  };

  const formik = useFormik({
    initialValues,
    // validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      navigate("/login");
    },
  });

  const handlePhone = (e, coun) => {
    formik.setFieldValue('phone_no', e);
    formik.setFieldTouched('phone_no', true);
    // formik.setFieldValue('country', coun.name)
    console.log("country name-----------", coun)
    // setData({ ...data, country: coun.name })
  }

  return (
    <div className="main">
      <div className="row m-0">
        <div className="col-md-6 logo-colm">
          <div className="py-4 bg-color"></div>
          <div>
            <div className="text-end signin-div">
              <Link to="/login">
                <button className="signin-btn">Sign in</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="text-end bg-color">
              <button className="signup-btn">Sign up</button>
            </div>
          </div>
          <div className="image-section bg-color text-center">
            <img src={logo} alt="logo-images" className="logo-images" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-section">
            <div className="my-5">
              <h2 className="text-center mt-4 heading">Sign up</h2>
              <div>
                <form onSubmit={formik.handleSubmit} noValidate>
                  <div className="mb-3 mt-4">
                    <input
                      placeholder="First name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("first_name")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.first_name &&
                            formik.errors.first_name,
                        },
                        {
                          "is-valid":
                            formik.touched.first_name &&
                            !formik.errors.first_name,
                        }
                      )}
                      name="first_name"
                    />
                    {formik.errors.first_name && formik.touched.first_name ? (
                      <div className="text-danger text-start">
                        {formik.errors.first_name}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-3" id="pwd_field">
                    <input
                      placeholder="Last name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("last_name")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.last_name && formik.errors.last_name,
                        },
                        {
                          "is-valid":
                            formik.touched.last_name &&
                            !formik.errors.last_name,
                        }
                      )}
                      name="last_name"
                    />
                    {formik.errors.last_name && formik.touched.last_name ? (
                      <div className="text-danger text-start">
                        {formik.errors.last_name}
                      </div>
                    ) : null}
                  </div>

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

                  <div className="mb-3">
                    <PhoneInput
                    style={{display:"flex"}}
                      international
                      countryCodeEditable={false}
                      inputClass="phoneInp"
                      inputStyle={{ border: "none !important", margin: "none" }}
                      placeholder="Enter phone number"
                      value={formik.values.phone_no}
                      onChange={(val, coun) => { handlePhone(val, coun) }}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.phone_no &&
                            formik.errors.phone_no,
                        },
                        {
                          "is-valid":
                            formik.touched.phone_no &&
                            !formik.errors.phone_no,
                        }
                      )}
                      name="phone_no"
                      autoComplete="off"
                    />

                    {/* <input
                    placeholder="Phone Number"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("phone_no")}
                    className={clsx(
                      "form-control bg-transparent",
                      {
                        "is-invalid":
                          formik.touched.phone_no &&
                          formik.errors.phone_no,
                      },
                      {
                        "is-valid":
                          formik.touched.phone_no &&
                          !formik.errors.phone_no,
                      }
                    )}
                    name="phone_no"
                  /> */}
                    {formik.errors.phone_no && formik.touched.phone_no ? (
                      <div className="text-danger text-start">
                        {formik.errors.phone_no}
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

                  <div className="mb-3" id="pwd_field">
                    <input
                      type={cpassVissible ? "text" : "password"}
                      placeholder="Confirm Password"
                      autoComplete="new-password"
                      {...formik.getFieldProps("confirmPassword")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword,
                        },
                        {
                          "is-valid":
                            formik.touched.confirmPassword &&
                            !formik.errors.confirmPassword,
                        }
                      )}
                      name="confirmPassword"
                    />
                    {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword ? (
                      <div className="text-danger text-start">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}

                    <span class="flex justify-around items-center eye_pwd_icon">
                      {cpassVissible == true ? (
                        <i
                          className="bi bi-eye-slash absolute mr-10"
                          onClick={() => setCpassVissible(!cpassVissible)}
                        ></i>
                      ) : (
                        <i
                          className="bi bi-eye absolute mr-10"
                          onClick={() => setCpassVissible(!cpassVissible)}
                        ></i>
                      )}
                    </span>
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Date of birth"
                      type="date"
                      autoComplete="off"
                      {...formik.getFieldProps("date_birth")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.date_birth &&
                            formik.errors.date_birth,
                        },
                        {
                          "is-valid":
                            formik.touched.date_birth &&
                            !formik.errors.date_birth,
                        }
                      )}
                      name="date_birth"
                    />
                    {formik.errors.date_birth && formik.touched.date_birth ? (
                      <div className="text-danger text-start">
                        {formik.errors.date_birth}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Comapny"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("company")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.company && formik.errors.company,
                        },
                        {
                          "is-valid":
                            formik.touched.company && !formik.errors.company,
                        }
                      )}
                      name="company"
                    />
                    {formik.errors.company && formik.touched.company ? (
                      <div className="text-danger text-start">
                        {formik.errors.company}
                      </div>
                    ) : null}
                  </div>

                  <div className="text-center">
                    <button type="submit" className="submit-btn">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
