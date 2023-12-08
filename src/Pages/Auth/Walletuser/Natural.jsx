import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usertoken } from "../../utils/api";

const Natural = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getusertoken();
  }, []);

  const getusertoken = () => {
    usertoken()
      .then((res) => {
        console.log("get user token", res?.data?.result?.step);
        if (res?.status == 200) {
          setData(res?.data?.result?.step);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const naturalUSer = () => {
    if (data == 1) {
      return (
        <>
        <Link to="/natural-user" style={{ color: "#0090b0" }}>
          <h4
            className="bi bi-arrow-right-circle"
            style={{ fontWeight: "bold" }}
          ></h4>
        </Link>
        </>
      );
    } else if (data > 1) {
      return(
        <>
        <h4 className="bi bi-check-circle-fill" style={{ color: "green" }}></h4>
        </>
      )
    }else{
      return(
        <></>
      )
    }
  };

  const legaluser = () => {
    if (data == 2) {
      return (
        <>
        <Link to="/legal-user" style={{ color: "#0090b0" }}>
          <h4
            className="bi bi-arrow-right-circle"
            style={{ fontWeight: "bold" }}
          ></h4>
        </Link>
        </>
      );
    } else if (data > 2) {
      return(
        <>
        <h4 className="bi bi-check-circle-fill" style={{ color: "green" }}></h4>
        </>
      )
    }else{
      return(
        <>
        <h4
            className="bi bi-arrow-right-circle"
            style={{ fontWeight: "bold" }}
          ></h4>
        </>
      )
    }
  };

  const documentupload = () => {
    if (data == 3 || data == 4 || data == 5 || data == 6) {
      return (
        <>
        <Link to="/document-upload" style={{ color: "#0090b0" }}>
          <h4
            className="bi bi-arrow-right-circle"
            style={{ fontWeight: "bold" }}
          ></h4>
        </Link>
        </>
      );
    } else if (data > 2) {
      return(
        <>
        <h4 className="bi bi-check-circle-fill" style={{ color: "green" }}></h4>
        </>
      )
    }else{
      return(
        <>
        <h4
            className="bi bi-arrow-right-circle"
            style={{ fontWeight: "bold" }}
          ></h4>
        </>
      )
    }
  };

  const kycupload = () => {
    if (data == 7 || data == 8) {
      return (
        <>
        <Link to="/natural-kyc" style={{ color: "#0090b0" }}>
          <h4
            className="bi bi-arrow-right-circle"
            style={{ fontWeight: "bold" }}
          ></h4>
        </Link>
        </>
      );
    } else if (data > 8) {
      return(
        <>
        <span>Pending</span>
        {/* <h4 className="bi bi-check-circle-fill" style={{ color: "green" }}></h4> */}
        </>
      )
    }else{
      return(
        <>
        <h4
            className="bi bi-arrow-right-circle"
            style={{ fontWeight: "bold" }}
          ></h4>
        </>
      )
    }
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      {/* <h4 className='text-center my-3'>Natural User</h4> */}
      <div
        className="p-4 mt-5"
        style={{
          border: "2px solid #0090B0",
          borderRadius: "30px",
          margin: "auto",
        }}
      >
        <div
          className="pt-2 my-3 px-3"
          style={{ border: "1px solid #0090B0", borderRadius: "30px" }}
        >
          <div className="d-flex justify-content-between">
            <h5>Natural User</h5>
            <div>
             {naturalUSer()}
            </div>
          </div>
        </div>

        <div
          className="pt-2 my-3 px-3"
          style={{ border: "1px solid #0090B0", borderRadius: "30px" }}
        >
          <div className="d-flex justify-content-between">
            <h5>Business details</h5>
            <div>
              {legaluser()}
            </div>
          </div>
        </div>

        <div
          className="pt-2 my-3 px-3"
          style={{ border: "1px solid #0090B0", borderRadius: "30px" }}
        >
          <div className="d-flex justify-content-between">
            <h5>Document Upload</h5>
            <div>
              {documentupload()}
            </div>
          </div>
        </div>

        <div
          className="pt-2 my-3 px-3"
          style={{ border: "1px solid #0090B0", borderRadius: "30px" }}
        >
          <div className="d-flex justify-content-between">
            <h5>Verify User</h5>
            <div>
              {kycupload()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Natural;
