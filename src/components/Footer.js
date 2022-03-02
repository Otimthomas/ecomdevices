import React from "react";
import styles from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nemo
        quod numquam,
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
      <div className="copyright__text">
        <p>©Designs {new Date().getFullYear()}</p>
      </div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styles.footer`
  background-color: rgb(51,51,51);
  color: #ffffff;
  text-align: center;
  padding: 20px;

  .copyright__text{
    margin-top: 25px;
  }
`;
