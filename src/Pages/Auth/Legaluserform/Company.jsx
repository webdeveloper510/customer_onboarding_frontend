import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Legaluser from "./Legaluser";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";

const CompanyDetail = () => {
  const { company, setCompany, next, prev } = useContext(Legaluser);

  const loginSchema = Yup.object().shape({
    companyEmail: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Email is required"),
    companyPhone: Yup.string()
      .min(3, "Minimum 7 symbols")
      .max(16, "Maximum 16 symbols")
      .required("Phone Numbar is required"),
    companyName: Yup.string().required("Company name is required"),
    numberOfEmployees: Yup.string().required("Numbar of employees is required"),
    annualTurnoverAmount: Yup.string()
    .typeError('Please enter a valid number')
    .test(
      'is-decimal',
      'Please enter a number with two decimal places',
      (value) => (value == null ? true : /^\d+(\.\d{1,2})?$/.test(value))
    )
    .required(
      "Annual Turnover Amount is required"
    ),
  });

  const initialValues = company;

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      setCompany(values);
      next();
    },
  });

  const handlePhone = (e, coun) => {
    formik.setFieldValue("companyPhone", formatPhoneNumberIntl(e));
    formik.setFieldTouched("companyPhone", true);
  };

  return (
    <div className="main-content">
      <h3 className="text-center" style={{ fontFamily: "initial" }}>
        Company Details
      </h3>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-3" id="pwd_field">
          <input
            placeholder="Email"
            type="email"
            autoComplete="off"
            {...formik.getFieldProps("companyEmail")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.companyEmail && formik.errors.companyEmail,
              },
              {
                "is-valid": formik.touched.companyEmail && !formik.errors.companyEmail,
              }
            )}
            name="companyEmail"
          />
          {formik.errors.companyEmail && formik.touched.companyEmail ? (
            <div className="text-danger text-start">{formik.errors.companyEmail}</div>
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
            value={formik.values.companyPhone}
            onChange={(val, coun) => {
              handlePhone(val, coun);
            }}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.companyPhone && formik.errors.companyPhone,
              },
              {
                "is-valid": formik.touched.companyPhone && !formik.errors.companyPhone,
              }
            )}
            name="companyPhone"
            autoComplete="off"
          />
          {formik.errors.companyPhone && formik.touched.companyPhone ? (
            <div className="text-danger text-start">
              {formik.errors.companyPhone}
            </div>
          ) : null}
        </div>
        <div className="mb-3 ">
          <input
            placeholder="Company Name"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("companyName")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.companyName && formik.errors.companyName,
              },
              {
                "is-valid":
                  formik.touched.companyName && !formik.errors.companyName,
              }
            )}
            name="companyName"
          />
          {formik.errors.companyName && formik.touched.companyName ? (
            <div className="text-danger text-start">
              {formik.errors.companyName}
            </div>
          ) : null}
        </div>

        <div className="mb-3 ">
          <input
            placeholder="Number Of Employees"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("numberOfEmployees")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.numberOfEmployees &&
                  formik.errors.numberOfEmployees,
              },
              {
                "is-valid":
                  formik.touched.numberOfEmployees &&
                  !formik.errors.numberOfEmployees,
              }
            )}
            name="numberOfEmployees"
          />
          {formik.errors.numberOfEmployees &&
          formik.touched.numberOfEmployees ? (
            <div className="text-danger text-start">
              {formik.errors.numberOfEmployees}
            </div>
          ) : null}
        </div>

        <div className="mb-3 ">
          <input
            placeholder="Annual Turnover Amount (Є)"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("annualTurnoverAmount")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.annualTurnoverAmount &&
                  formik.errors.annualTurnoverAmount,
              },
              {
                "is-valid":
                  formik.touched.annualTurnoverAmount &&
                  !formik.errors.annualTurnoverAmount,
              }
            )}
            name="annualTurnoverAmount"
          />
          {formik.errors.annualTurnoverAmount &&
          formik.touched.annualTurnoverAmount ? (
            <div className="text-danger text-start">
              {formik.errors.annualTurnoverAmount}
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

export default CompanyDetail;
