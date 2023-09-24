import React from "react";
import "./footer.css";
import styled from "styled-components";
import { GiPadlock } from 'react-icons/gi';

const Container = styled.div`
  padding: 10px 20px;
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: rgb(37, 47, 61);
  align-items: center;
  margin: 0 auto;
  color: white;

  @media(max-width: 1024px){
    display: grid;
    grid-template-columns: 1fr
  }
`

const Content = styled.div`
    flex: 1;
    align-items: center;
    gap: 20px;
    text-align: center;
`
const Footer = () => {

    return(
        <Container>
            <Content>
                Copyright (c) 2023 | Clarifionsupport@clarifion.com 
            </Content>
            <Content>
                <GiPadlock/>Secure 256-bit SSL encryption.
            </Content>
        </Container>
    );
}

export default Footer;