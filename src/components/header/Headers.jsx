import React from "react";
import "./header.css";
import styled from "styled-components";
import { BsPatchCheck, BsTruck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";
import ClarifionLogo from "../../assets/ClarifionLogo.png";
import logoRight from "../../assets/logoRight.png";

const Container = styled.div`
  height: 90px;
  width: 100%;
`;
const ContainerFontBlack = styled.div`
  height: 35px;
  background-color: black;
  width: 100%;
`;
const ContainerFontWhite = styled.div`
  height: 55px;
  background-color: white;
  width: 100%;
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
  
  @media (max-width: 600px) {
    margin-top: 10px;
    align-items: center;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 0px;
  }
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  color: white;
  gap: 10px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3.3rem;
`;

const Header = () => {
  return (
    <Container>
      <ContainerFontBlack>
        <Wrapper>
          <Content>
            <BsPatchCheck />
            30-DAY SATISFACTION GUARANTEE
          </Content>
          <Content>
            <BsTruck />
            FREE DELIVERY ON ORDERS BY $40.00
          </Content>
          <Content>
            <AiOutlineHeart />
            50.000+ HAPPY CUSTUMERS
          </Content>
          <Content>
            <GiReturnArrow />
            100% MONEY BACK GUARANTEE
          </Content>
        </Wrapper>
      </ContainerFontBlack>
      <ContainerFontWhite>
        <Wrapper>
          <Left>
            <img src={ClarifionLogo} />
          </Left>
          <Right>
            <img src={logoRight} />
          </Right>
        </Wrapper>
      </ContainerFontWhite>
    </Container>
  );
};

export default Header;
