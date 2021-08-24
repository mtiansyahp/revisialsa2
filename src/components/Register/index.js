import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Form,
  FormInput,
  ImgWrapper,
  Img
} from './Register.elements';

function Register({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  headline,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow imgStart={imgStart}>
            
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
              <TextWrapper>
              <TopLine></TopLine>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Form>
                  <FormInput name='NamaLengkap' type='name' placeholder='Nama Lengkap' />
                  <FormInput name='Nomor' type='name' placeholder='Nomor Handphone' />
                  <FormInput name='Email' type='email' placeholder='Email' />
                  <FormInput name='Password' type='password' placeholder='Password' />
                </Form>
                <Link to='/'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                  
                </Link>
              </TextWrapper>
            </InfoColumn >
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Register;
