import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Naturalform from "./Naturalform";
import { country } from "../countrydata/country";

const Document = () => {
  const { details, setDetails, next, prev } = useContext(Naturalform);

  const loginSchema = Yup.object().shape({
    documentType: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Document Type is required"),
    documentNumber: Yup.string()
    .matches(/^[0-9]{8}[A-Z]$/, 'Invalid format, followed this format 12345678A')
      // .min(3, "Minimum 3 symbols")
      // .max(50, "Maximum 50 symbols")
      .required("Document Number is required"),
    issuingCountry: Yup.string()
      .required("Issuing Number is required"),
    expirationDate: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Expiration Date is required"),
    emissionDate:Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Emission Date is required"),
  });

  const initialValues = details;

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      setDetails(values);
      next();
    },
  });

  return (
    <div className="main-content">
      <h3 className="text-center" style={{fontFamily: "initial"}}>Document</h3>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-3 mt-4">
          <label style={{color:"gray"}}>Document Type</label>
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
              <option value="">Select Document..</option>
              <option value="DNI">DNI</option>
              <option value="NIF">NIF</option>
              <option value="NIE">NIE</option>
              <option value="PASS">PASS</option>
            </select>
          {formik.errors.documentType && formik.touched.documentType ? (
            <div className="text-danger text-start">
              {formik.errors.documentType}
            </div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
        <label style={{color:"gray"}}>Document Number (12345678A)</label>
          <input
            placeholder="Document Number"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("documentNumber")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.documentNumber && formik.errors.documentNumber,
              },
              {
                "is-valid":
                  formik.touched.documentNumber && !formik.errors.documentNumber,
              }
            )}
            name="documentNumber"
          />
          {formik.errors.documentNumber && formik.touched.documentNumber ? (
            <div className="text-danger text-start">
              {formik.errors.documentNumber}
            </div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <label style={{color:"gray"}}>Issuing Country</label>
          <select
            placeholder="Issuing Country"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("issuingCountry")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.issuingCountry && formik.errors.issuingCountry,
              },
              {
                "is-valid": formik.touched.issuingCountry && !formik.errors.issuingCountry,
              }
            )}
            name="issuingCountry"
          >
            <option>Select Country...</option>
            <option value="ES">Spain</option>
            <option value="FR">France</option>
            <option value="IE">Ireland</option>
            {/* France */}
            {/* {
              country?.map((item)=>{
                return(
            <option value={item.iso}>{item.country}</option>
                )
              })
            } */}
            </select>
          {formik.errors.issuingCountry && formik.touched.issuingCountry ? (
            <div className="text-danger text-start">
              {formik.errors.issuingCountry}
            </div>
          ) : null}
        </div>

        <div className="mb-3">
        <label style={{color:"gray"}}>Emission Date</label>
          <input
            placeholder="Emission Date"
            type="date"
            autoComplete="off"
            {...formik.getFieldProps("emissionDate")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.emissionDate && formik.errors.emissionDate,
              },
              {
                "is-valid": formik.touched.emissionDate && !formik.errors.emissionDate,
              }
            )}
            name="emissionDate"
          />
          {formik.errors.emissionDate && formik.touched.emissionDate ? (
            <div className="text-danger text-start">{formik.errors.emissionDate}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label style={{color:"gray"}}>Expiration Date</label>
          <input
            placeholder="Expiration Date"
            type="date"
            autoComplete="off"
            {...formik.getFieldProps("expirationDate")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.expirationDate && formik.errors.expirationDate,
              },
              {
                "is-valid": formik.touched.expirationDate && !formik.errors.expirationDate,
              }
            )}
            name="expirationDate"
          />
          {formik.errors.expirationDate && formik.touched.expirationDate ? (
            <div className="text-danger text-start">{formik.errors.expirationDate}</div>
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
