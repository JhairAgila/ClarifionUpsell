import React from "react";
import styled from "styled-components";
import { NavSteps, Payment } from "./NavBars";
import mainImage from "../../assets/mainImage.png";
import descriptionImage from "../../assets/descriptionImage.png";
import imageProfile from "../../assets/imageProfile.png";
import qualitysell from "../../assets/qualitysell.png";
import { PiSealCheckFill } from "react-icons/pi";
import "./body.css";
import {
  AiOutlineCheck,
  AiOutlinePercentage,
  AiOutlineArrowRight,
  AiFillStar,
} from "react-icons/ai";

const Container = styled.div`
  height: 120vh;
  width: 100%;
  @media(max-width: 1024px){
    height: 85vh;
  }
  @media(max-width: 600px){
    height: 130vh;
  }
`;
const BigWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  height: 80vh;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  
  @media(max-width: 1024px){
    height: 55vh;
  }
  
  @media(max-width: 600px){
    display: block;
  }
  
  
`;
const SmallWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 15vh;
  width: 80%;
  background-color: green;

  @media(max-width: 1024px){
    height: 10vh;
  }

  @media(max-width: 600px){
    display: none;
  }
`;
const Description = styled.p`
  color: var(--color-p);
  text-align: center;
`;
const ContentImage = styled.div`
  flex: 1;

  @media(max-width: 1024px){
    display: none;
  }

  @media(max-width: 600px){
    display: flex;
    width: 100%;
  }

`;

const ContainerProfileImage = styled.div`
  border-radius: 2rem;
  background-image: url(${imageProfile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 48px;
  height: 48px;

`;


const ContentDescription = styled.div`
  flex: 1;
  display: flex;
  color: black;
  gap: 10px;
  background-color: white;
  flex-direction: column;
`;
const GuaranteeDescription = styled.div`
  flex: 1;
  display: flex;
  color: black;
  gap: 10px;
  background-color: white;
  flex-direction: column;

  @media(max-width: 1024px){
    display: none;
  }
`

const ContainerCommentDescription = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DescriptionImage = styled.div`
  width: 90%;
  margin-top: 5px;
`;

const ContainerSmallDescription = styled.div`
  background-color: rgba(106, 239, 241, 0.2);
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContainerCommentDescriptionColumn = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

const Body = () => {
  return (
    <Container>
      <h1>Wait! Your Order in Progress</h1>
      <Description>
        Lorem Ipsum Dolor Sit Amet, Consectetur, Adipiscing{" "}
      </Description>
      <NavSteps />
      <BigWrapper>
        <p className="descriptionProducton600pxscreen">
            <spam style={{ color: "blue" }}>ONE TIME ONLY </spam>
            <spam style={{ color: "black" }}>
              Special Price for 6 Extra Clarifon For Only
            </spam>
            <spam style={{ color: "blue" }}>$14 Each</spam>{" "}
            <spam style={{ color: "black" }}> ($84.00 Total) </spam>
          </p>
        <ContentImage>
          <img src={mainImage} width='100%' className="mainImage"/>
        </ContentImage>
        <ContentDescription>
          <p className="descriptionProduct">
            <spam style={{ color: "blue" }}>ONE TIME ONLY </spam>
            <spam style={{ color: "black" }}>
              Special Price for 6 Extra Clarifon For Only
            </spam>
            <spam style={{ color: "blue" }}>$14 Each</spam>{" "}
            <spam style={{ color: "black" }}> ($84.00 Total) </spam>
          </p>
          <DescriptionImage>
            <img src={descriptionImage} width='100%'/>
          </DescriptionImage>
          <ul>
            <li>
              <AiOutlineCheck style={{ color: "blue", marginRight: '10px' }} />
              Native Icon Technology map{" "}
              <spam className="bold">help with allegerns</spam>
            </li>
            <li>
              <AiOutlineCheck style={{ color: "blue", marginRight: '10px' }} />
              Design for <smap className="bold">air rejuvenation</smap>
            </li>
            <li>
              <AiOutlineCheck style={{ color: "blue", marginRight: '10px' }} />{" "}
              <spam className="bold">Perfect for every</spam> room in all types
              of places
            </li>
          </ul>
          <ContainerSmallDescription>
            <AiOutlinePercentage style={{backgroundColor: 'blue', color: "white", borderRadius: '50%', fontSize: '1.7rem'}} />
            Save 53% and get 6 extra Clarifision for only $14 Each.
          </ContainerSmallDescription>
          <button >
            YES - CLAIM MY DISCOUNT{" "}
            <AiOutlineArrowRight style={{ color: "white", cursor: "pointer" }} />
          </button>
          <Payment />
        </ContentDescription>
      </BigWrapper>
      <SmallWrapper>
        <GuaranteeDescription>
          <ContainerCommentDescription>
            <ContainerProfileImage />
            <ContainerCommentDescriptionColumn>
              <spam>
                <AiFillStar className="colorYellow" />
                <AiFillStar className="colorYellow" />
                <AiFillStar className="colorYellow" />
                <AiFillStar className="colorYellow" />
                <AiFillStar className="colorYellow" />
              <div style={{ fontWeight: "600", margin: 0, padding: 0 }}>
                {" "}
                Ken T.{" "}
                <PiSealCheckFill
                  style={{ backgroundColor: "green", color: "white" }}
                />{" "}
              </div>
              </spam>

            </ContainerCommentDescriptionColumn>
          </ContainerCommentDescription>
          <p>
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </p>
        </GuaranteeDescription>

        <ContentDescription>
          <p className="textUnderline">NO THANKS, I DON’T WANT THIS.</p>
          <ContainerCommentDescription>
            <img src={qualitysell} className="imgQuality"/>
            <spam>
              If you are not completely thrilled with your Clarifion - We have a
              30 day satisfaction guarantee. Please refer to our return policy at
              the bottom of the page for more details. Happy Shopping!
            </spam>
          </ContainerCommentDescription>
          
        </ContentDescription>
      </SmallWrapper>
    </Container>
  );
};

export default Body;
