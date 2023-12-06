import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="navbars">
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="header-item "
          style={{
            background: "white",
            color: "#0090B0",
            border: "2px solid #0090B0",
          }}
          id="page-header-user-dropdown"
          tag="button"
        >
          <i className="bi bi-three-dots-vertical"></i>
          {/* <FaUserCircle className={style.icon} /> */}
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          {/* <DropdownItem tag="a" href="/super-admin/profile">
              <i className="bx bx-user font-size-16 align-middle me-1" />
              Profile
            </DropdownItem> */}
          {/* <div className="dropdown-divider" /> */}
          <button onClick={handleLogout} className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>Logout</span>
          </button>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
