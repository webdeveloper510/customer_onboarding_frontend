import React, { useState } from "react";
import { Provider } from "./Naturalform";
import MultiStep from "react-multistep";
import { Steps } from "antd";
import Address from "./Address";
import Document from "./Document";
import "./naturaluser.scss";
import Details from "./Details";
import Alldetails from "./Alldetails";

const { Step } = Steps;

const detailsInitialState = {
  documentType: "",
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

const renderStep = (step) => {
  console.log("stepppppppppppppppp", step);
  switch (step) {
    case 0:
      return <Address />;
    case 1:
      return <Document />;
    case 2:
      return <Details />;
    case 3:
      return <Alldetails />;
    default:
      return null;
  }
};

const Naturaluser = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [natural, setNatural] = useState(naturalDetail);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
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
      }}
    >
      <div className="w-75 m-auto py-4">
        <Steps current={currentStep}>
          <Step title={"Address details"} />
          <Step title={"Document details"} />
          <Step title={"Employment details"} />
          <Step title={"Review and Save"} />
        </Steps>
      </div>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default Naturaluser;
