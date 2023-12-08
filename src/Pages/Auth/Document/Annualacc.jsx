import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Documentform from "./Documentform";
import { userannualAccounts, userlegalKyc } from "../../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Annualacc = () => {

  const navigate = useNavigate()
  const { company, setCompany, next, prev } = useContext(Documentform);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file_img = e.target.files[0];

    setSelectedFile(file_img);
    formik.setFieldValue("document", file_img,);
  };


  const loginSchema = Yup.object().shape({
    // documentType: Yup.string()
    //   .required("Document Type is required"),
      document: Yup.string()
      .required("Document is required"),
  });

  const initialValues = company

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append("document", values.document);
      setCompany(formData);
      userannualAccounts(formData).then((res) => {
        console.log("document uploaded responseeeeeeeeeee", res);
        if (res.status == 200) {          
          setCompany(formData);
          userlegalKyc().then((res1)=>{
            if (res1.status == 200) {  
              toast.success("Your documents are being reviewed", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
              });
              navigate("/dashboard");
            }        
          })
        
          
        } else {
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
    <div className="main-content py-5">
      <h3 style={{fontFamily: "initial"}}  className="text-center my-3"> Upload Annual Account</h3>
      <form onSubmit={formik.handleSubmit} noValidate>
        {/* <div className="mb-3 mt-4">
          <select
            placeholder="Document Type"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("documentType")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.documentType && formik.errors.documentType,
              },
              {
                "is-valid":
                  formik.touched.documentType && !formik.errors.documentType,
              }
            )}
            name="documentType"
          >
            <option value="">Select Document Type</option>
            <option value="INCOME_TAX_DECLARATION">INCOME TAX DECLARATION</option>
            <option value="VAT_DECLARATION">VAT DECLARATION</option>
            <option value="ANNUAL_ACCOUNTS">ANNUAL ACCOUNTS</option>
            <option value="DEED_OF_INCORPORATION">DEED OF INCORPORATION</option>
            <option value="BANK_CERTIFICATE">BANK CERTIFICATE</option>
            <option value="POWERS_OF_REPRESENTATION">POWERS OF REPRESENTATION</option>
            </select>
          {formik.errors.documentType && formik.touched.documentType ? (
            <div className="text-danger text-start">
              {formik.errors.documentType}
            </div>
          ) : null}
        </div> */}

        <div className="mb-4" id="pwd_field">
          <input
            placeholder="Document"
            type="file"
            accept=".pdf"
            autoComplete="off"
            onChange={(e) => handleFileChange(e)}
            // {...formik.getFieldProps("document")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.document && formik.errors.document,
              },
              {
                "is-valid":
                  formik.touched.document && !formik.errors.document,
              }
            )}
            name="document"
          />
          {formik.errors.document && formik.touched.document ? (
            <div className="text-danger text-start">
              {formik.errors.document}
            </div>
          ) : null}
        </div>

      
        <div className="text-center d-flex justify-content-between mt-4">
          <button type="button" className="cancel-btn" onClick={prev}>
            Back
          </button>
          <button type="submit" className="next-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Annualacc;
