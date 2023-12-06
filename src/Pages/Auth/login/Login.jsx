import React, { useState } from "react";
import logo from "../../../assets/image/logo1.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import { userLogin } from "../../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [passVissible, setPassVissible] = useState(false);
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onOptionChange = (e) => {
    setData(e.target.value);
    console.log(e.target.value)
  };

  const handleSave =()=>{
    console.log(data)    
    if(data == "Natural User"){
      navigate("/natural-user")
      setData("")
      setShow(false)
    }else if(data == "Legal User"){
      navigate("/legal-user")
      setData("")
      setShow(false)
    }    
  }

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
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      
      console.log(values);
      userLogin({
        email: values.email,
        password: values.password,
      })
        .then((res) => {
          console.log("user register ------", res);
          if(res?.status == 200){
            localStorage.setItem("token", res?.data?.token)
            toast.success(res?.data.message, {
              position: "top-right",
              autoClose: 2000,
              theme: "colored",
              });   
              navigate("/dashboard")           
              // if(res?.data?.result?.step == 1 ){
              //   navigate("/natural-user")
              // }else if(res?.data?.result?.step == 2 ){
              //   navigate("/legal-user")
              // } else if(res?.data?.result?.step == 3 ){
              //   navigate("/document-upload")
              // }else if(res?.data?.result?.step == 7 ){
              //   navigate("/natural-kyc")
              // } else if(res?.data?.result?.step == 8 )   {
              //   navigate("/legal-kyc")
              // }       
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
          <div className="image-section-login text-center">
            <img src={logo} alt="logo-images" className="logo-images-login" />
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

                    {/* <span style={{position:"relative"}} className="flex justify-around items-center eye_pwd_icon">
                      {passVissible == true ? (
                        <i
                          className="bi bi-eye-slash" style={{
                            position:"absolute",
                            top: "-30px",
                            right: "49px",
                          }}
                          onClick={() => setPassVissible(!passVissible)}
                        ></i>
                      ) : (
                        <i
                          className="bi bi-eye"
                          style={{
                            position:"absolute",
                            top: "-30px",
                            right: "49px",
                          }}
                          onClick={() => setPassVissible(!passVissible)}
                        ></i>
                      )}
                    </span> */}
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-around">
            <div>
              <input
                type="radio"
                name="data"
                value="Natural User"
                id="natural"
                checked={data === "Natural User"}
                onChange={onOptionChange}
              />
              <label htmlFor="natural" className="mx-2">Natural User</label>
            </div>

            <div>
              <input
                type="radio"
                name="data"
                value="Legal User"
                id="legal"
                checked={data === "Legal User"}
                onChange={onOptionChange}
              />
              <label htmlFor="legal" className="mx-2">Legal User</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="cancel-btn" onClick={handleClose}>
            Close
          </button>
          <button className="save-btn" onClick={handleSave}>
            Next 
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
