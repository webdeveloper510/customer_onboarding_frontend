import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Legaluser from "./Legaluser";
import { country } from "../countrydata/country";

const Ldocument = () => {
  const { details, setDetails, next, prev } = useContext(Legaluser);

  const loginSchema = Yup.object().shape({
    // documentType: Yup.string()
    //   .min(3, "Minimum 3 symbols")
    //   .max(50, "Maximum 50 symbols")
    //   .required("Document Type is required"),
    documentNumber: Yup.string()
    .matches(/^[A-Z]\d{8}$/, 'Invalid format, followed this format L50543784')
    // .matches(/^[0-9]{8}[A-Z]$/, 'Invalid format, followed this format 12345678A')
      // .min(3, "Minimum 3 symbols")
      // .max(50, "Maximum 50 symbols")
      .required("Document Number is required"),
    // issuingCountry: Yup.string()
    //   .required("Issuing Number is required"),
    // expirationDate: Yup.string()
    //   .min(3, "Minimum 3 symbols")
    //   .max(50, "Maximum 50 symbols")
    //   .required("Expiration Date is required"),
    emissionDate: Yup.string()
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
      <h3 className="text-center" style={{ fontFamily: "initial" }}>
        NIF
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
              <option value="">Select Document...</option>
              <option value="DNI">Distributable Net Income </option>
              <option value="NIF">National Innovation Foundation</option>
              <option value="NIE">National Institute of Education</option>
              <option value="PASS">Passport</option>
            </select>
          {formik.errors.documentType && formik.touched.documentType ? (
            <div className="text-danger text-start">
              {formik.errors.documentType}
            </div>
          ) : null}
        </div> */}

        <div className="mb-3" id="pwd_field">
          <label style={{color:"gray"}}>NIF Number (A12345678)</label>
          <input
            placeholder="NIF Number"
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
                  formik.touched.documentNumber &&
                  !formik.errors.documentNumber,
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

        {/* <div className="mb-3" id="pwd_field">
          <select
            placeholder="Issuing Number"
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
            {
              country?.map((item)=>{
                return(
            <option value={item.iso}>{item.country}</option>
                )
              })
            }
            </select>
          {formik.errors.issuingCountry && formik.touched.issuingCountry ? (
            <div className="text-danger text-start">
              {formik.errors.issuingCountry}
            </div>
          ) : null}
        </div> */}

        <div className="mb-3">
        <label>Emission Date</label>
          <input
            placeholder="Emission Date"
            type="date"
            autoComplete="off"
            {...formik.getFieldProps("emissionDate")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.emissionDate && formik.errors.emissionDate,
              },
              {
                "is-valid":
                  formik.touched.emissionDate && !formik.errors.emissionDate,
              }
            )}
            name="emissionDate"
          />
          {formik.errors.emissionDate && formik.touched.emissionDate ? (
            <div className="text-danger text-start">
              {formik.errors.emissionDate}
            </div>
          ) : null}
        </div>
        {/* <div className="mb-3">
          <label style={{color:"gray"}}>Expiration Date</label>
          <input
            placeholder="Expiration Date"
            type="date"
            autoComplete="off"
            {...formik.getFieldProps("expirationDate")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.expirationDate && formik.errors.expirationDate,
              },
              {
                "is-valid":
                  formik.touched.expirationDate &&
                  !formik.errors.expirationDate,
              }
            )}
            name="expirationDate"
          />
          {formik.errors.expirationDate && formik.touched.expirationDate ? (
            <div className="text-danger text-start">
              {formik.errors.expirationDate}
            </div>
          ) : null}
        </div> */}

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

export default Ldocument;
