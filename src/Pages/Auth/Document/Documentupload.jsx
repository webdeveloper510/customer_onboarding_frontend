import React, { useState } from "react";
import { Provider } from "./Documentform";
import { Steps } from "antd";
// import "./legal.scss";
import Document from "./Document";
import AllDetails from "./Alldetail";
import Deedupload from "./Deedupload";
import Vatupload from "./Vatuploaded.js";
import Annualacc from "./Annualacc";

const { Step } = Steps;

const detailsInitialState = {
  document: "",
};

const addressInitialState = {
  document: "",
};

const naturalDetail = {
  document: "",
};

const companydetail = {
  document: "",
};

const renderStep = (step) => {
  console.log("stepppppppppppppppp", step);
  switch (step) {
    case 0:
      return <Document />;
    case 1:
      return <Deedupload />;
    case 2:
      return <Vatupload />;
    case 3:
      return <Annualacc />;
    default:
      return null;
  }
};

const Documentuserform = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [company, setCompany] = useState(companydetail);
  const [natural, setNatural] = useState(naturalDetail);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      setCompany(companydetail)
      setNatural(naturalDetail)
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
        setCompany,
      }}
    >
      <div className="py-4" style={{width:"90%", margin:"auto"}}>
        <Steps current={currentStep}>
          <Step title={"Bank Certificate"} />
          <Step title={"Upload deed"} />
          <Step title={"Upload Vat"} />
          <Step title={"Upload Annual Account"} />
        </Steps>
      </div>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default Documentuserform;
