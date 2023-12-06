import React, { useContext } from "react";
import Documentform from "./Documentform";
import Table from "react-bootstrap/Table";
// import { userLegal } from "../../utils/api";
import { toast } from "react-toastify";
import { userLegal } from "../../utils/api";
import { compileAsync } from "sass";

const AllDetails = () => {
  const { details, address, natural, company, next, prev } =
    useContext(Documentform);

  console.log(
    "detailsss",
    details,
    "address---",
    address,
    "naturallllll",
    natural
  );

  const submitDetails = () => {
    userLegal({
      addressLine1: address.address_line1,
      addressLine2: address.address_line2,
      country: "ES",
      region: address.region,
      city: address.city,
      postalCode: address.postal_code,
      documentType: details.documentType,
      documentNumber: details.documentNumber,
      issuingCountry: "ES",
      expirationDate: details.expirationDate,
      emissionDate: details.emissionDate,
      companyName: company.companyName,
      numberOfEmployees: parseInt(company.numberOfEmployees),
      annualTurnoverCurrency: "EUR",
      annualTurnoverAmount: parseInt(company.annualTurnoverAmount),
    })
      .then((res) => {
        console.log("user natural response-------", res);
        if (res?.status == 200) {
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
  };

  return (
    <div className="w-50 m-auto py-4">
      <h2 className="text-center">All Details</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th className="text-center" colSpan={2}>
              Document Uploaded
            </th>
          </tr>
          
        </thead>
        <tbody>
          <tr>
            <td>Document Type</td>
            <td>{address.documentType}</td>
          </tr>
          <tr>
            <td>Document</td>
            <td>{address.document}</td>
          </tr>
        

          <tr>
            <th className="text-center" colSpan={2}>
              Documents
            </th>
          </tr>
          <tr>
            <td>Document Type</td>
            <td>{details.documentType}</td>
          </tr>
          <tr>
            <td>Document Number</td>
            <td>{details.documentNumber}</td>
          </tr>
          <tr>
            <td>Issuing Country</td>
            <td>ES</td>
          </tr>
          <tr>
            <td>Expiration Date</td>
            <td>{details.expirationDate}</td>
          </tr>
          <tr>
            <td>Emission Date</td>
            <td>{details.emissionDate}</td>
          </tr>

          {/* <tr>
            <th className="text-center" colSpan={2}>
              Employment
            </th>
          </tr>
          <tr>
            <td>Employment Status</td>
            <td>{natural.employmentStatus}</td>
          </tr>
          <tr>
            <td>Business Activity</td>
            <td>{natural.businessActivity}</td>
          </tr> */}
          <tr>
            <th className="text-center" colSpan={2}>
              Company Detail
            </th>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>{company.companyName}</td>
          </tr>
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

export default AllDetails;
