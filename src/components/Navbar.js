import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Wrapper>
      <div className="header">
        <p className="logo">LOGO</p>
        <ul>
          <li>
            <NavLink to="/" active>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  /* background-color: orangered; */
  padding: 15px 80px;
  margin: 0;

  .header {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    /* background-color: aquamarine; */
    display: flex;
    align-items: center;
  }

  ul {
    /* background-color: lightblue; */
    display: flex;
  }

  li {
    list-style: none;
  }

  li a {
    text-decoration: none;
    font-size: 20px;
    display: inline-block;
    color: rgb(51, 51, 51);
  }

  li:not(:first-child) {
    margin-left: 50px;
  }
`;
