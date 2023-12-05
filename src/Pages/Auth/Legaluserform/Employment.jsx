import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Legaluser from "./Legaluser";

const Employment = () => {
  const { natural, setNatural, next, prev } = useContext(Legaluser);

  const loginSchema = Yup.object().shape({
    employmentStatus: Yup.string()
      .required("Employment Status is required"),
    businessActivity: Yup.string()
      .required("Business Activity is required"),
  });

  const initialValues = natural;

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      setNatural(values);
      next();
    },
  });

  return (
    <div className="w-25 m-auto">
      <h2 className="text-center">Employment Details</h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-3 mt-4">
          <select
            placeholder="Employment Status"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("employmentStatus")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.employmentStatus &&
                  formik.errors.employmentStatus,
              },
              {
                "is-valid":
                  formik.touched.employmentStatus &&
                  !formik.errors.employmentStatus,
              }
            )}
            name="employmentStatus"
          >
            <option value="">Select document...</option>
            <option value="FREELANCE">FREELANCE</option>
            <option value="EMPLOYEE">EMPLOYEE</option>
            <option value="STUDENT">STUDENT</option>
            <option value="UNEMPLOYED">UNEMPLOYED</option>
            <option value="RETIREE">RETIREE</option>
          </select>
          {formik.errors.employmentStatus && formik.touched.employmentStatus ? (
            <div className="text-danger text-start">
              {formik.errors.employmentStatus}
            </div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <select
            placeholder="Business Activity"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("businessActivity")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.businessActivity &&
                  formik.errors.businessActivity,
              },
              {
                "is-valid":
                  formik.touched.businessActivity &&
                  !formik.errors.businessActivity,
              }
            )}
            name="businessActivity"
          >
            <option value="">Select document...</option>
            <option value="AGRICULTURE_FORESTRY_FISHING">AGRICULTURE_FORESTRY_FISHING</option>
            <option value="REAL_ESTATE">REAL_ESTATE</option>
            <option value="EDUCATION">EDUCATION</option>
            <option value="TELECOMMUNICATIONS">TELECOMMUNICATIONS</option>
            <option value="INDUSTRY_MANUFACTURING">INDUSTRY_MANUFACTURING</option><option value="AGRICULTURE_FORESTRY_FISHING">AGRICULTURE_FORESTRY_FISHING</option>
            <option value="CONSTRUCTION">CONSTRUCTION</option>
            <option value="AUTOMOTIVE">AUTOMOTIVE</option>
            <option value="HOSPITALITY_TOURISM">HOSPITALITY_TOURISM</option>
            <option value="FINANCIAL_INSURANCE">FINANCIAL_INSURANCE</option>

            <option value="PUBLIC_ADMINISTRATION">PUBLIC_ADMINISTRATION</option>
            <option value="HEALTH_PROFESSIONAL_SERVICES">HEALTH_PROFESSIONAL_SERVICES</option>
            <option value="MAINTENANCE_CLEANING">MAINTENANCE_CLEANING</option>
            <option value="SCIENCE">SCIENCE</option>
            <option value="TECHNOLOGY">TECHNOLOGY</option><option value="AGRICULTURE_FORESTRY_FISHING">AGRICULTURE_FORESTRY_FISHING</option>
            <option value="TRANSPORT">TRANSPORT</option>
            <option value="ART_CULTURE">ART_CULTURE</option>
            <option value="JEWELRY_WATCHES">JEWELRY_WATCHES</option>
            <option value="GAMBLING">GAMBLING</option>
            <option value="MEDIA_ADVERTISING">MEDIA_ADVERTISING</option>
            <option value="OTHER">OTHER</option>
          </select>
          {formik.errors.businessActivity && formik.touched.businessActivity ? (
            <div className="text-danger text-start">
              {formik.errors.businessActivity}
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

export default Employment;
