import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
// import "../App.css";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper
        className="navbar navbar-expand-sm navbar-dark px-sm-5"
        style={{ padding: "10px" }}
      >
        <div className="navi">
          <Link to="/">
            <img src={logo} alt="Store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link text">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span style={{ paddingRight: "5px" }}>
                <i className="fas fa-cart-plus" />
              </span>
              My Cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.6rem !important;
    text-transform: capitalize;
  }
`;

export default Navbar;
