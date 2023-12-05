import React, { useState } from "react";
import "./signup.scss";
import logo from "../../../assets/image/logo1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { country } from "../countrydata/country";
import { parsePhoneNumber } from "react-phone-number-input";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { userRegister } from "../../utils/api";

const Signup = () => {
  // console.log("country==========", country)
  const navigate = useNavigate()
  const [passVissible, setPassVissible] = useState(false);
  const [cpassVissible, setCpassVissible] = useState(false);

  const loginSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("First name is required"),
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is required"),
    lastName: Yup.string()
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
    phone: Yup.string()
      .min(3, "Minimum 7 symbols")
      .max(16, "Maximum 16 symbols")
      .required("Phone Numbar is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
    // company: Yup.string()
    //   .min(3, "Minimum 3 symbols")
    //   .max(50, "Maximum 50 symbols")
    //   .required("Company name is required"),
    // nationality: Yup.string()
    //   .required("nationality is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dateOfBirth: "",
    // company: "",
    // nationality: "",
    // country: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      userRegister({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phone: values.phone,
        dateOfBirth: values.dateOfBirth,
        nationality: "ES",
      })
        .then((res) => {
          console.log("user register ------", res);
          if(res?.status == 200){
            toast.success("Successfully Register ", {
              position: "top-right",
              autoClose: 2000,
              theme: "colored",
              });
            navigate("/login");
          }else{
            toast.error(res?.data.message, {
              position: "top-right",
              autoClose: 2000,
              theme: "colored",
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const handlePhone = (e, coun) => {
    // const phoneNumber = parsePhoneNumber(e);
    // console.log("phoneNumbereeeeeeeeee", phoneNumber)
    // if (phoneNumber) {
    //     formik.setFieldValue("nationality", phoneNumber?.country)
    // }
    formik.setFieldValue("phone", formatPhoneNumberIntl(e));
    formik.setFieldTouched("phone", true);
    // console.log("country name-----------", formatPhoneNumberIntl(e));
  };

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
            <div className="">
              <h2 className="text-center mt-4 heading">Sign up</h2>
              <div>
                <form onSubmit={formik.handleSubmit} noValidate>
                  <div className="mb-3 mt-4">
                    <input
                      placeholder="First name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("firstName")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.firstName && formik.errors.firstName,
                        },
                        {
                          "is-valid":
                            formik.touched.firstName &&
                            !formik.errors.firstName,
                        }
                      )}
                      name="firstName"
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                      <div className="text-danger text-start">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-3" id="pwd_field">
                    <input
                      placeholder="Last name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("lastName")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.lastName && formik.errors.lastName,
                        },
                        {
                          "is-valid":
                            formik.touched.lastName && !formik.errors.lastName,
                        }
                      )}
                      name="lastName"
                    />
                    {formik.errors.lastName && formik.touched.lastName ? (
                      <div className="text-danger text-start">
                        {formik.errors.lastName}
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
                      style={{ display: "flex" }}
                      international
                      defaultCountry="ES"
                      countryCodeEditable={false}
                      inputClass="phoneInp"
                      inputStyle={{ border: "none !important", margin: "none" }}
                      placeholder="Enter phone number"
                      value={formik.values.phone}
                      onChange={(val, coun) => {
                        handlePhone(val, coun);
                      }}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.phone && formik.errors.phone,
                        },
                        {
                          "is-valid":
                            formik.touched.phone && !formik.errors.phone,
                        }
                      )}
                      name="phone"
                      autoComplete="off"
                    />

                    {/* <input
                    placeholder="Phone Number"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("phone")}
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
                    type="password"
                      // type={passVissible ? "text" : "password"}
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
                    {/* <span class="flex justify-around items-center eye_pwd_icon">
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
                    </span> */}
                    {formik.errors.password && formik.touched.password ? (
                      <div className="text-danger text-start">
                        {formik.errors.password}
                      </div>
                    ) : null}

                    
                  </div>

                  <div className="mb-3" id="pwd_field">
                    <input
                    type="password"
                      // type={cpassVissible ? "text" : "password"}
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
                     {/* <span class="flex justify-around items-center eye_pwd_icon">
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
                    </span> */}
                    {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword ? (
                      <div className="text-danger text-start">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}

                   
                  </div>
                  <div className="mb-3">
                    <input
                      placeholder="Date of birth"
                      type="date"
                      autoComplete="off"
                      {...formik.getFieldProps("dateOfBirth")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.dateOfBirth &&
                            formik.errors.dateOfBirth,
                        },
                        {
                          "is-valid":
                            formik.touched.dateOfBirth &&
                            !formik.errors.dateOfBirth,
                        }
                      )}
                      name="dateOfBirth"
                    />
                    {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
                      <div className="text-danger text-start">
                        {formik.errors.dateOfBirth}
                      </div>
                    ) : null}
                  </div>
                  {/* <div className="mb-3">
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
                  </div> */}
                  {/* <div className="mb-3" id="pwd_field">
                    <input
                      placeholder="Nationality"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("nationality")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.nationality &&
                            formik.errors.nationality,
                        },
                        {
                          "is-valid":
                            formik.touched.nationality &&
                            !formik.errors.nationality,
                        }
                      )}
                      name="nationality"
                    />
                    {formik.errors.nationality && formik.touched.nationality ? (
                      <div className="text-danger text-start">
                        {formik.errors.nationality}
                      </div>
                    ) : null}
                  </div> */}

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
