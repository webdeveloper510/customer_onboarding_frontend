import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Documentform from "./Documentform";
import { userUploadDoc, userbankCertificate } from "../../utils/api";
import { toast } from "react-toastify";

const Document = () => {
  const { address, setAddress, next, prev } = useContext(Documentform);
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFile1, setSelectedFile1] = useState("");

  const loginSchema = Yup.object().shape({
    document: Yup.mixed().required("Document is required"),
  });

  const initialValues = address;

  const handleFileChange = (e) => {
    const file_img = e.target.files[0];
    console.log("file is ", file_img);
    setSelectedFile1(file_img);
    setSelectedFile(URL.createObjectURL(file_img));
    formik.setFieldValue("document", file_img);
  };

  console.log("addressssssssssss", address);
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("document", values.document);
      console.log("valuessssssssssssssssss", values.document);
      userbankCertificate(formData)
        .then((res) => {
          console.log("document uploaded responseeeeeeeeeee", res);
          if (res.status == 200) {
            next();
            setAddress(formData);
            toast.success(res?.data.message, {
              position: "top-right",
              autoClose: 2000,
              theme: "colored",
            });
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
      // next()
    },
  });

  return (
    <div className="main-content py-5">
      <h3 style={{ fontFamily: "initial" }} className="text-center my-4">
       Representative
      </h3>
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
                "is-invalid": formik.touched.document && formik.errors.document,
              },
              {
                "is-valid": formik.touched.document && !formik.errors.document,
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

export default Document;
