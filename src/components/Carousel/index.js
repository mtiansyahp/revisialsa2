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

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  FiturIcon,
  HeadingIcon,
  SubstitleIcon,
  ImgWrapper,
  Img,
} from './Carousel.element';

import toko from '../../assets/index'; // Tell webpack this JS file uses this image
import kasir from '../../assets/index';

 console.log(toko); 
 console.log(kasir);
 

function CarouselData({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  IconFitur,
  IconHeading,
  IconSubstitle,
  autoPlay,
  interval,
  controls,
  indicators,
  imgCarousel,
  titleCarousel,
  subscribeCarousel,
  title,
  isicontent,
  toko,

}) {
  return (
    <>
      <div className="div">
            <Carousel Carousel autoPlay={true} interval={5000} controls={false} indicators={false}>
                <Carousel.Item interval={1000}>
                <Container>
                <Row className="promologo mt-5">
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
                </Row>
                </Container>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <Container>
                <Row className="promologo mt-5">
                    <Col>
                        <Row><div className="" ><img src={toko} alt=""/></div></Row>
                        <Row><p className="title mt-2">{title}</p></Row>
                        <Row><p className="contentpromo">{isicontent} </p></Row>
                        </Col>

                        <Col>
                        <Row><div className=""><img src={kasir} alt=""/></div></Row>
                        <Row><p className="title mt-2">{title}</p></Row>
                        <Row><p className="contentpromo">{isicontent} </p></Row>
                    </Col>
                </Row>
                </Container>
                </Carousel.Item>
                <Carousel.Item>
                <Container>
                <Row className="promologo mt-5">
                    <Col>
                        <Row><div className="" ><img src={toko} alt=""/></div></Row>
                        <Row><p className="title mt-2">{title}</p></Row>
                        <Row><p className="contentpromo">{isicontent} </p></Row>
                        </Col>

                        <Col>
                        <Row><div className=""><img src={kasir} alt=""/></div></Row>
                        <Row><p className="title mt-2">{title}</p></Row>
                        <Row><p className="contentpromo">{isicontent} </p></Row>
                    </Col>
                </Row>
                </Container>
                </Carousel.Item>
                </Carousel> 
            </div>
    </>
  );
}

export default CarouselData;
