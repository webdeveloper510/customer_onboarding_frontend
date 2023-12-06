import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Naturalform from "./Naturalform";
import { country } from "../countrydata/country";

const Address = () => {
  const { address, setAddress, next, prev } = useContext(Naturalform);

  const loginSchema = Yup.object().shape({
    address_line1: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Address Line 1 is required"),
    address_line2: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Address Line 2 is required"),
    // country: Yup.string()
    //   .required("Country is required"),
    region: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Region is required"),
    city: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Address Line 1 is required"),
    postal_code: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Address Line 2 is required"),
  });

  const initialValues = address

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      setAddress(values);
      next()
    },
  });

  return (
    <div className="main-content">
      <h2 className="text-center" style={{fontFamily: "initial"}}>Address</h2>
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="mb-3 mt-4">
          <input
            placeholder="Address Line 1"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("address_line1")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.address_line1 && formik.errors.address_line1,
              },
              {
                "is-valid":
                  formik.touched.address_line1 && !formik.errors.address_line1,
              }
            )}
            name="address_line1"
          />
          {formik.errors.address_line1 && formik.touched.address_line1 ? (
            <div className="text-danger text-start">
              {formik.errors.address_line1}
            </div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <input
            placeholder="address Line 2"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("address_line2")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.address_line2 && formik.errors.address_line2,
              },
              {
                "is-valid":
                  formik.touched.address_line2 && !formik.errors.address_line2,
              }
            )}
            name="address_line2"
          />
          {formik.errors.address_line2 && formik.touched.address_line2 ? (
            <div className="text-danger text-start">
              {formik.errors.address_line2}
            </div>
          ) : null}
        </div>

        {/* <div className="mb-3" id="pwd_field">
          <select
            placeholder="Country"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("country")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.country && formik.errors.country,
              },
              {
                "is-valid": formik.touched.country && !formik.errors.country,
              }
            )}
            name="country"
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
          {formik.errors.country && formik.touched.country ? (
            <div className="text-danger text-start">
              {formik.errors.country}
            </div>
          ) : null}
        </div> */}

        <div className="mb-3">
          <input
            placeholder="Region"
            type="text"
            autoComplete="off"
            {...formik.getFieldProps("region")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.region && formik.errors.region,
              },
              {
                "is-valid": formik.touched.region && !formik.errors.region,
              }
            )}
            name="region"
          />
          {formik.errors.region && formik.touched.region ? (
            <div className="text-danger text-start">{formik.errors.region}</div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <input
            type="text"
            placeholder="City"
            autoComplete="off"
            {...formik.getFieldProps("city")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid": formik.touched.city && formik.errors.city,
              },
              {
                "is-valid": formik.touched.city && !formik.errors.city,
              }
            )}
            name="city"
          />
          {formik.errors.city && formik.touched.city ? (
            <div className="text-danger text-start">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="mb-3" id="pwd_field">
          <input
            type="text"
            placeholder="Postal code"
            autoComplete="off"
            {...formik.getFieldProps("postal_code")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid":
                  formik.touched.postal_code && formik.errors.postal_code,
              },
              {
                "is-valid":
                  formik.touched.postal_code && !formik.errors.postal_code,
              }
            )}
            name="postal_code"
          />
          {formik.errors.postal_code && formik.touched.postal_code ? (
            <div className="text-danger text-start">
              {formik.errors.postal_code}
            </div>
          ) : null}
        </div>

        <div className="text-center">
          {/* <button type="button" className="cancel-btn" onClick={prev}>
            Back
          </button> */}
          <button type="submit" className="next1-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
