import React from "react";
import styled, { css } from "styled-components";
import { BsCheck } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import visa from "../../assets/visa.png";
import shop_pay from "../../assets/shop_pay.png";
import paypal from "../../assets/paypal.png";
import mastercard from "../../assets/mastercard.png";
import gpay from "../../assets/gpay.png";
import apple_pay from "../../assets/apple_pay.png";
import amex from "../../assets/amex.png";
import "./body.css";

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  height: 60px;
  gap: 10px;
  width: 100%;

  @media (max-width: 1024px) {
    height: 80px;
  }
  @media (max-width: 600px) {
    height: 100px;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  color: black;
  gap: 10px;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 2px;

    align-items: center;
    justify-content: center;
    spam {
      display: none;
    }
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const WrapperPayment = styled.div`
  padding: 10px 20px;
  display: flex;
  height: auto;
  gap: 10px;
  border: 1px solid gray;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
  }
`;

const ContentPayment = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  align-items: center;

  ${(props) =>
    props.paymentDisplay &&
    css`
      display: flex;
      justify-content: center;
      color: black;
      align-items: center;
    `}

  @media (max-width: 600px) {
    ${(props) =>
      props.paymentDisplay &&
      css`
        grid-column: 1/2;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        img {
          margin: 5px; /* Espacio entre las imágenes */
        }
      `}
  }
  
`;
export const NavSteps = () => {
  return (
    <Wrapper>
      <Content>
        <BsCheck className="icon" /> <spam> Step 1: </spam> Cart Review
      </Content>
      <Content>
        <BsCheck className="icon" />
        <spam> Step 2: </spam> Checkout
      </Content>
      <Content style={{fontWeight: '600'}}>
        <div className="icon icon-tree">3</div>
        <spam style={{fontWeight: '600'}}> Step 3: </spam > Special Offer
      </Content>
      <Content>
        <div className="icon icon-four">4</div> <spam> Step 4: </spam>
        Confirmation
      </Content>
    </Wrapper>
  );
};

export const Payment = () => {
  return (
    <WrapperPayment>
      <ContentPayment>Free Shipping</ContentPayment>
      <ContentPayment>
        <GiPadlock style={{ fontSize: "1rem", marginLeft: "10px" }} /> Secure
        256 Bit SSL Encryption
      </ContentPayment>
      <ContentPayment paymentDisplay>
        <img src={visa} />
        <img src={shop_pay} />
        <img src={paypal} />
        <img src={mastercard} />
        <img src={gpay} />
        <img src={apple_pay} />
        <img src={amex} />
      </ContentPayment>
    </WrapperPayment>
  );
};
