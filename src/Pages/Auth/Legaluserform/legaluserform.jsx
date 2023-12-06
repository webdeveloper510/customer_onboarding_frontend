import React, { useState } from "react";
import { Provider } from "./Legaluser";
import { Steps } from "antd";
import "./legal.scss";
import LAddress from "./Laddress";
import Ldocument from "./Ldocument";
import Employment from "./Employment";
import Lalldetails from "./Lalldetails";
import CompanyDetail from "./Company";
import { Link } from "react-router-dom";

const { Step } = Steps;

const detailsInitialState = {
  // documentType: "",
  documentNumber: "",
  // issuingCountry: "",
  expirationDate: "",
  emissionDate:"",
};

const addressInitialState = {
  address_line1: "",
  address_line2: "",
  // country: "",
  region: "",
  city: "",
  postal_code: "",
};

const naturalDetail = {
  employmentStatus: "",
  businessActivity: "",
};

const companydetail = {
    companyName: "",
    numberOfEmployees: "",
    annualTurnoverAmount:""
  };

const renderStep = (step) => {
  console.log("stepppppppppppppppp", step);
  switch (step) {
    // case 0:
    //   return <LAddress />;
    case 0:
      return <Ldocument />;
    case 1:
      return <CompanyDetail />;
      case 2:
        return <Lalldetails />;
    default:
      return null;
  }
};

const Legaluserform = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [company, setCompany] = useState(companydetail);
  const [natural, setNatural] = useState(naturalDetail);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 2) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider
      value={{
        details,
        setDetails,
        next,
        prev,
        address,
        setAddress,
        natural,
        setNatural,
        company,
        setCompany
      }}
    >
      <div className="py-4" style={{width:"90%", margin:"auto"}}>
      <Link to="/dashboard">
        <i
          class="bi bi-arrow-left-circle-fill"
          style={{ fontSize: "30px", color: "#0090b0" }}
        ></i>
        </Link>
        <h3 className="text-center mb-4" style={{fontFamily: "initial"}}>Legal User</h3>
        <Steps current={currentStep}>
          {/* <Step title={"Address details"} /> */}
          <Step title={"Document details"} />
          <Step title={"Company Details"} />
          <Step title={"Review and Save"} />
        </Steps>
      </div>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default Legaluserform;
