import React from "react";
import {
  Wrapper,
  FooterTitle,
} from "./FooterElements";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#404267", width: "100%" }}>
      <Wrapper>
        <FooterTitle>
          E-commerce created during Wizeline’s Academy React Bootcamp
        </FooterTitle>
      </Wrapper>
    </footer>
  );
};

export default Footer;
