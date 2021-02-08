import React from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { BsFillEyeFill } from "react-icons/bs";
import { NavLink, useHistory } from "react-router-dom";

const NavbarPage = () => {
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <NavbarBrand className="navbar-brand" to="/" />
        <NavLink className="nav-link" to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/product" activeClassName="active">
          Product
        </NavLink>
        <NavDropdown title="Hospital">
          <NavDropdown.Divider />
          <NavDropdown.Item
            onClick={() => {
              history.replace('/hospital')
            }}
          >
            Pagination
          </NavDropdown.Item>
          <NavDropdown.Item>CRUD</NavDropdown.Item>
        </NavDropdown>
        <NavLink className="nav-link" to="/about" activeClassName="active">
          About
        </NavLink>
      </Navbar>
    </>
  );
};

export default NavbarPage;
