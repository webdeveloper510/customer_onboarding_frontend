import React, { useContext } from "react";
import Legaluser from "./Legaluser";
import Table from "react-bootstrap/Table";
// import { userLegal } from "../../utils/api";
import { toast } from "react-toastify";
import { userLegal } from "../../utils/api";
import { compileAsync } from "sass";
import { useNavigate } from "react-router";

const Lalldetails = () => {
  const { details, address, natural, company, next, prev } =
    useContext(Legaluser);
  const navigate = useNavigate()

  const submitDetails = () => {
    userLegal({
      companyEmail: company.companyEmail,
      companyPhone: company.companyPhone,
      companyAddressLine1: address.address_line1,
      companyAddressLine2: address.address_line2,
      companyCountry: address.country,
      companyRegion: address.region,
      companyCity: address.city,
      companyPostalCode: address.postal_code,
      // documentType: details.documentType,
      companyDocumentNumber: details.documentNumber,
      companyDocumentIssuingCountry: "ES",
      // companyDocumentExpirationDate: details.expirationDate,
      companyDocumentEmissionDate: details.emissionDate,
      // companyName: company.companyName,
      numberOfEmployees: parseInt(company.numberOfEmployees),
      annualTurnoverCurrency: "EUR",
      annualTurnoverAmount: parseInt(company.annualTurnoverAmount*100),
    })
      .then((res) => {
        console.log("user natural response-------", res);
        if (res?.status == 200) {
          toast.success(res?.data.message, {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
          });
          navigate("/dashboard")
        }else if(res?.status == 409){
          toast.error("NIF Number already exist", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
          });
        }
         else {
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
  };

  return (
    <div className="w-50 m-auto py-4">
      <h3 className="text-center">All Details</h3>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th className="text-center" colSpan={2}>
              Address
            </th>
          </tr>
          
        </thead>
        <tbody>
          <tr>
            <td>Address Line 1</td>
            <td>{address.address_line1}</td>
          </tr>
          <tr>
            <td>Address Line 2</td>
            <td>{address.address_line2}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>ES</td>
          </tr>
          <tr>
            <td>Region</td>
            <td>{address.region}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{address.city}</td>
          </tr>
          <tr>
            <td>Postal Code</td>
            <td>{address.postal_code}</td>
          </tr>

          <tr>
            <th className="text-center" colSpan={2}>
              Documents
            </th>
          </tr>
          <tr>
            <td>Document Type</td>
            <td>NIF</td>
          </tr>
          <tr>
            <td>Document Number</td>
            <td>{details.documentNumber}</td>
          </tr>
          <tr>
            <td>Issuing Country</td>
            <td>ES</td>
          </tr>
          {/* <tr>
            <td>Expiration Date</td>
            <td>{details.expirationDate}</td>
          </tr> */}
          <tr>
            <td>Emission Date</td>
            <td>{details.emissionDate}</td>
          </tr>

          {/* <tr>
            <th className="text-center" colSpan={2}>
              Employment
            </th>
          </tr>*/}
         
          <tr>
            <th className="text-center" colSpan={2}>
              Company Detail
            </th>
          </tr>
          <tr>
            <td>Comapny Email</td>
            <td>{company.companyEmail}</td>
          </tr>
          <tr>
            <td>Business Activity</td>
            <td>{company.companyPhone}</td>
          </tr> 
          {/* <tr>
            <td>Company Name</td>
            <td>{company.companyName}</td>
          </tr> */}
          <tr>
            <td>Number Of Employees</td>
            <td>{company.numberOfEmployees}</td>
          </tr>
          <tr>
            <td>annualTurnoverAmount</td>
            <td>{company.annualTurnoverAmount}</td>
          </tr>
        </tbody>
      </Table>

      <div className="text-center d-flex justify-content-between mt-4">
        <button type="button" className="cancel-btn" onClick={prev}>
          Back
        </button>
        <button
          type="button"
          className="next-btn"
          onClick={() => submitDetails()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Lalldetails;
