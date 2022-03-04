import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Wrapper>
      <div className="header">
        <p className="logo">LOGO</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <hr />
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
