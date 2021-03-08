import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { Navbar 
    ,Nav
    ,Form 
    ,FormControl
    ,NavDropdown 
    ,Jumbotron 
    ,Row 
    ,Col 
    ,render 
    ,Image 
    ,Carousel
} from'react-bootstrap';


import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Carousel.element';


import toko from '../../assets/index'; // Tell webpack this JS file uses this image
import kasir from '../../assets/index';

 console.log(toko); 
 console.log(kasir);
 

function CarouselData({
 
  title,
  isicontent,
  toko

}) {
  return (
    <>
      <div className="div">
            <Carousel Carousel autoPlay={true} interval={5000} controls={false} indicators={false}>
                <Carousel.Item interval={1000}>
               
                {/* <Row className="promologo mt-5">
                    <Col>
                    <Row><div className="" ><img src={toko} alt=""/></div></Row>
                    <Row><p className="title mt-2">"Management Outlet"</p></Row>
                    <Row><p className="contentpromo">"Management Outlet"</p></Row>
                    </Col>

                    <Col>
                    <Row><div className=""><img src={kasir} alt=""/></div></Row>
                    <Row><p className="title mt-2">{title}</p></Row>
                    <Row><p className="contentpromo">{isicontent} </p></Row>
                    </Col>
                </Row> */}

                <IconContext.Provider value={{ color: '#a9b3c1', size: 30 }}>
                      <PricingSection>
                        <PricingWrapper>
                          <PricingContainer>
                            <PricingCard to='/sign-up'>
                              <PricingCardInfo>
                                <PricingCardIcon>
                                  <GiRock />
                                </PricingCardIcon>
                                <PricingCardPlan>Detektif Baju</PricingCardPlan>
                                <PricingCardFeatures>
                                  <PricingCardFeature>Semua transaksi yang kamu lakukan akan direkam oleh Alsa untuk memudahkan kamu dalam mengatur keuangan kamu</PricingCardFeature>
                                </PricingCardFeatures>
                              </PricingCardInfo>
                            </PricingCard>
                            <PricingCard to='/sign-up'>
                              <PricingCardInfo>
                                <PricingCardIcon>
                                  <GiRock />
                                </PricingCardIcon>
                                <PricingCardPlan>Detektif Baju</PricingCardPlan>
                                <PricingCardFeatures>
                                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                                </PricingCardFeatures>
                              </PricingCardInfo>
                            </PricingCard>
                            
                          </PricingContainer>
                        </PricingWrapper>
                      </PricingSection>
                    </IconContext.Provider>
                    
               
                </Carousel.Item>
               
                </Carousel> 
            </div>
    </>
  );
}

export default CarouselData;
