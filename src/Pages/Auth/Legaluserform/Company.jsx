import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Legaluser from "./Legaluser";

const CompanyDetail = () => {
  const { company, setCompany, next, prev } = useContext(Legaluser);

  const loginSchema = Yup.object().shape({
    companyName: Yup.string()
      .required("Company name is required"),
      numberOfEmployees: Yup.string()
      .required("Numbar of employees is required"),
      annualTurnoverAmount:Yup.string()
      .required("Annual Turnover Amount is required"),
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

  return (
    <div className="main-content">
      <h2 className="text-center" style={{fontFamily: "initial"}}>Company Details</h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-3 mt-4">
          <input
            placeholder="Company Name"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("companyName")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.companyName &&
                  formik.errors.companyName,
              },
              {
                "is-valid":
                  formik.touched.companyName &&
                  !formik.errors.companyName,
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

        <div className="mb-3 mt-4">
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
          {formik.errors.numberOfEmployees && formik.touched.numberOfEmployees ? (
            <div className="text-danger text-start">
              {formik.errors.numberOfEmployees}
            </div>
          ) : null}
        </div>

        <div className="mb-3 mt-4">
          <input
            placeholder="Annual Turnover Amount"
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
          {formik.errors.annualTurnoverAmount && formik.touched.annualTurnoverAmount ? (
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
