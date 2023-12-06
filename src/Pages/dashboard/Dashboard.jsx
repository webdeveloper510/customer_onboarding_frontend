import React, { useEffect, useState } from "react";
import MultiStep from "react-multistep";
import Natural from "../Auth/Walletuser/Natural";
import Legaluser from "../Auth/Walletuser/Legaluser";
import { Steps } from "antd";
import { usertoken } from "../utils/api";

const { Step } = Steps;

const renderStep = (step) => {
  console.log("stepppppppppppppppp", step);
  switch (step) {
    case 1:
      return <Natural />;
    case 2:
      return <Natural />;
    case 3:
      return <Natural />;
    case 8:
      return <Natural />;
    default:
      return null;
  }
};

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    getusertoken();
  }, []);

  const getusertoken = () => {
    usertoken()
      .then((res) => {
        console.log("get user token", res?.data?.result?.step);
        if (res?.status == 200) {
          setCurrentStep(res?.data?.result?.step);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("cureent step currentStep", currentStep)

  const next = () => {
    if (currentStep === 8) {
      setCurrentStep(0);
      //   setDetails(detailsInitialState);
      //   setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <div className="py-4" style={{ width: "90%", margin: "auto" }}>
      <div className="w-100 m-auto text-center">
        {/* <Provider
      value={{
        
        next,
        prev,
        
      }} */}
        {/* > */}
        <Steps
          current={currentStep - 1}
          className="p-3"
          style={{ border: "2px solid #0090B0", borderRadius: "30px" }}
        >
          <Step title={"Natural User"} />
          <Step title={"Legal User"} />
          <Step title={"Document Uploaded"} />
          <Step title={"KYC Uploaded"} />
        </Steps>
        <main>{renderStep(currentStep)}</main>
        {/* </Provider> */}
      </div>
    </div>
  );
};

export default Dashboard;
