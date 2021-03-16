import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f6f6f6;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardHeading = styled.h1`
  color: #000;
  font-size: 48px;
  margin-bottom: 24px;
`;



export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const WrapperCard = styled(Link)`
  background: #f6f6f6;
  display: inline-block;
  box-shadow: 0 7px 16px #d7e0ea;
  border-radius: 6px;
  border-top: 5px solid #79bfd3;
  padding: 1rem;
  margin-bottom: 3rem;
  width: 230px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;



  &:nth-child(2) {
    // margin: 10px;
    margin-right:10px;
    margin-left:10px;

  }

  &:nth-child(4) {
    // margin: 10px;
    margin-right:10px;
    margin-left:10px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.7s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const WrapperCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 24px;
  align-items: center;
  color: #000;
`;

export const WrapperCardIcon = styled.div`
  margin: 24px 0;
`;

export const WrapperCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
`;


export const WrapperCardCost = styled.h4`
  font-size: 40px;
`;

export const WrapperCardLength = styled.p`
  font-size: 10px;
  margin-bottom: 24px;
`;

export const WrapperCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const WrapperCardFeature = styled.li`
  margin-bottom: 10px;
  font-size:12px;
  text-align: center;
  color : #000;
  font-weight: 500;
`;

export const Image = styled.img`
 
`;

