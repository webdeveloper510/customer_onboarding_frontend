import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Documentform from "./Documentform";
import { userUploadDeed } from "../../utils/api";
import { toast } from "react-toastify";

const Deedupload = () => {
  const { details, setDetails, next, prev } = useContext(Documentform);
  const [selectedFile, setSelectedFile] = useState(null);

  const loginSchema = Yup.object().shape({
    document1: Yup.string().required("Document is required"),
    document2: Yup.string().required("Document is required"),
    document3: Yup.string().required("Document is required"),
    document4: Yup.string().required("Document is required"),
  });

  const initialValues = details;

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      // let arr = [values.document1 , values.document2 , values.document3 , values.document4]
      formData.append("documents", values.document1);
      formData.append("documents", values.document2);
      formData.append("documents", values.document3);
      formData.append("documents", values.document4);
      console.log("document uploaded responseeeeeeeeeee", formData.get("documents"));
      userUploadDeed(formData).then((res) => {
        console.log("document uploaded responseeeeeeeeeee", res);
        if (res.status == 200) {
          next();
          setDetails(formData);
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
      // next();
    },
  });

  const handleFileChange = (e) => {
    const file_img = e.target.files[0];
    console.log("e.target name---", file_img)
    setSelectedFile(file_img);
    formik.setFieldValue(e.target.name, file_img);
  };

  return (
    <div className="main-content">
      <h3 style={{ fontFamily: "initial" }} className="text-center my-2">
        Upload Deed
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

        <div className="mb-3" id="pwd_field">
          <label style={{color:"gray"}}>Certificado de Constitucion</label>
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
                "is-invalid": formik.touched.document1 && formik.errors.document1,
              },
              {
                "is-valid": formik.touched.document1 && !formik.errors.document1,
              }
            )}
            name="document1"
          />
          {formik.errors.document1 && formik.touched.document1 ? (
            <div className="text-danger text-start">
              {formik.errors.document1}
            </div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <label style={{color:"gray"}}>Estatutos</label>
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
                "is-invalid": formik.touched.document2 && formik.errors.document2,
              },
              {
                "is-valid": formik.touched.document2 && !formik.errors.document2,
              }
            )}
            name="document2"
          />
          {formik.errors.document2 && formik.touched.document2 ? (
            <div className="text-danger text-start">
              {formik.errors.document2}
            </div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <label style={{color:"gray"}}>Cambio de denominacion social</label>
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
                "is-invalid": formik.touched.document3 && formik.errors.document3,
              },
              {
                "is-valid": formik.touched.document3 && !formik.errors.document3,
              }
            )}
            name="document3"
          />
          {formik.errors.document3 && formik.touched.document3 ? (
            <div className="text-danger text-start">
              {formik.errors.document3}
            </div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <label style={{color:"gray"}} >Certificado de Identificacion Fiscal</label>
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
                "is-invalid": formik.touched.document4 && formik.errors.document4,
              },
              {
                "is-valid": formik.touched.document4 && !formik.errors.document4,
              }
            )}
            name="document4"
          />
          {formik.errors.document4 && formik.touched.document4 ? (
            <div className="text-danger text-start">
              {formik.errors.document4}
            </div>
          ) : null}
        </div>

        <div>         
          <button type="submit" className="next1-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Deedupload;
