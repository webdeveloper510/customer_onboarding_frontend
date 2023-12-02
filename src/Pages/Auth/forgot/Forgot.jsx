import React, { useState } from 'react'
import logo from "../../../assets/image/logo1.png"
import icon from "../../../assets/image/icon1.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import "./forgot.scss"
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Forgot = () => {

    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => {
      navigate("/reset-password") 
    };
 
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is required"),
  });

  const initialValues = {
    email: "",
  };
  
  const formik = useFormik({
    initialValues,
    // validationSchema: loginSchema,
    onSubmit: async (values) => {
     console.log(values)
    setShow(true)    
    },
  });


  return (
    <div className='main'>
    <div className='row m-0'>
      <div className='col-md-6 forgot-colm'>
        <div className='image-section text-center'>
        <img src={logo} alt='logo-images' className='logo-images-forgot' />
        </div>        
      </div>
      <div className='col-md-6'>
        <div className='form-section forgot-section'>
          <div className='mt-5'>
            <h2 className='text-center mt-4'>Forgot Password</h2>
            <p className='forgot-pera'>
               Kindly enter the email address tied to your account, we would help you reset your password
            </p>
            <div >
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

                <div className='text-center mt-4'>
                <button type='submit' className="submit-btn">Recover password</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className='text-center reset-modal'>
          <div>
            <img src={icon} alt='icon' width={70} height={70} />
            <h3 className='my-4'>Reset your password</h3>
            <div className='text-center '>
            <p>We have sent an email to your account <span className='d-block'>Please check your email</span></p>
            </div>
            <button className='reset-pass-btn my-2' onClick={handleClose}>
            Reset Password
          </button>
          </div>
        </Modal.Body>
      </Modal>
  </div>
  )
}

export default Forgot
