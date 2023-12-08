import React, { useEffect, useState } from "react";
import { userNaturalKyc } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./kyc.scss"

const Kycupload = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    navigate("/dashboard")
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    userNaturalKyc()
      .then((res) => {
        console.log("userNaturalKyc-----------", res);
        if (res.status == 200) {
          setData(res?.data?.result?.client_widget_url);
        }
        // else{
        //   setShow(true)
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div style={{ width: "95%", margin: "auto" }}>
        <Link to="/dashboard">
          <i
            class="bi bi-arrow-left-circle-fill"
            style={{ fontSize: "30px", color: "#0090b0" }}
          ></i>
        </Link>
        <h3 className="text-center">Natural Kyc Upload</h3>
        {data?<iframe
          src={data}
          height="600px"
          width="95%"
        />: <span>No Url</span>}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center"><h3 style={{fontFamily:"initial"}}>Try After 30 minutes</h3></Modal.Body>
        <Modal.Footer>
        <button className="ok-btn" onClick={handleClose}>
    Ok
  </button>
          {/* <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Kycupload;
