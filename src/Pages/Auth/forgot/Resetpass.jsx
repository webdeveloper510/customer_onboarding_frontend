import React, { useState } from "react";
import logo from "../../../assets/image/logo1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import "./forgot.scss";
import { useNavigate } from "react-router";
import Modal from "react-bootstrap/Modal";
import icon from "../../../assets/image/icon1.png";

const ResetPass = () => {
  const navigate = useNavigate();
  const [passVissible, setPassVissible] = useState(false);
  const [cpassVissible, setCpassVissible] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    navigate("/login");
  };

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
    confirmPassword: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password confirmation is required")
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
  });

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      setShow(true);
    },
  });

  return (
    <div className="main">
      <div className="row m-0">
        <div className="col-md-6 forgot-colm">
          <div className="image-section text-center">
            <img src={logo} alt="logo-images" className="logo-images-forgot" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-section ">
            <div className="mt-5">
              <h2 className="text-center mt-4">Reset you password</h2>
              <p className="forgot-pera">Kindly enter your new password</p>
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

                  <div className="text-center mt-5">
                    <button type="submit" className="submit-btn">
                      Recover password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center reset-modal">
          <div>
            <img src={icon} alt="icon" width={70} height={70} />
            <h3 className="my-4">Reset your password sucessfully</h3>
            <div className="text-center ">
              <p>
                Your password has been changed Successfully{" "}
                <span className="d-block">
                  You can now log in from log in page
                </span>
              </p>
            </div>
            <button className="reset-pass-btn my-2" onClick={handleClose}>
              Bck to sign in
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ResetPass;
