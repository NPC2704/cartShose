import React from "react";
import images from "../../assets/data";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  height: 600px;
  border-radius: 30px;
  padding: 0 28px;
  position: relative;
  box-shadow: 0 3.2px 2.2px rgba(0, 0, 0, 0.02),
    0 7px 5.4px rgba(0, 0, 0, 0.028), 0 12.1px 10.1px rgba(0, 0, 0, 0.035),
    0 19.8px 18.1px rgba(0, 0, 0, 0.042), 0 34.7px 33.8px rgba(0, 0, 0, 0.05),
    0 81px 81px rgba(0, 0, 0, 0.07);
  margin-top: 40px;
  overflow: hidden;
  margin: 40px 20px;
  z-index: 1;
  background-color: var(--white-color);
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    background-color: #f6c90e;
    top: -20%;
    left: -50%;
    z-index: -2;
  }
`;
const HeadingCart = styled.div``;
const Logo = styled.span`
  img {
  }
`;
const Sub = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 16px 0;
`;
const TotalPrice = styled.span`
  font-size: 25px;
  font-weight: 700;
  margin: 16px 0;
`;
const CardBody = styled.div``;
function Card({ children, title, totalPrice }) {
  return (
    <Container>
      <HeadingCart>
        <Logo>
          <img
            src={images.logo}
            alt="logo"
            style={{ width: "50px", marginTop: "16px" }}
          />
        </Logo>
        <Sub>
          <Title>{title}</Title>
          <TotalPrice>{totalPrice}</TotalPrice>
        </Sub>
      </HeadingCart>
      <CardBody className="body-card">{children}</CardBody>
    </Container>
  );
}

export default Card;
