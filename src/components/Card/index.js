import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import {
  CardSection,
  CardWrapper,
  CardHeading,
  CardContainer,
  WrapperCard,
  WrapperCardInfo,
  WrapperCardIcon,
  WrapperCardPlan,
  WrapperCardCost,
  WrapperCardLength,
  WrapperCardFeatures,
  WrapperCardFeature,
  Image
  
} from './Card.elements';
import outlet from '../../assets/icon/outlet.png';



console.log(outlet);


function Card() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <CardSection>
        <CardWrapper>
          <CardHeading>Fitur Kami</CardHeading>
          <CardContainer>
            <WrapperCard to='/sign-up'>
              <WrapperCardInfo>
                <WrapperCardIcon>
                <Image src={outlet} alt="" />
                </WrapperCardIcon>
                <WrapperCardPlan>Detektif Baju</WrapperCardPlan>
                <WrapperCardFeatures>
                  <WrapperCardFeature>Kamu Mempunyai Masalah dalam Baju Pelanggan? Tenang fitur Detektif Baju dari Alsa akan Membantumu Menemukannya dengan Cepat</WrapperCardFeature>
                </WrapperCardFeatures>
              </WrapperCardInfo>
            </WrapperCard>
            <WrapperCard to='/sign-up'>
              <WrapperCardInfo>
                <WrapperCardIcon>
                <Image src={outlet} alt="" />
                </WrapperCardIcon>
                <WrapperCardPlan>Detektif Baju</WrapperCardPlan>
                <WrapperCardFeatures>
                  <WrapperCardFeature>Kamu Mempunyai Masalah dalam Baju Pelanggan? Tenang fitur Detektif Baju dari Alsa akan Membantumu Menemukannya dengan Cepat</WrapperCardFeature>
                </WrapperCardFeatures>
              </WrapperCardInfo>
            </WrapperCard>
            <WrapperCard to='/sign-up'>
              <WrapperCardInfo>
                <WrapperCardIcon>
                <Image src={outlet} alt="" />
                </WrapperCardIcon>
                <WrapperCardPlan>Detektif Baju</WrapperCardPlan>
                <WrapperCardFeatures>
                  <WrapperCardFeature>Kamu Mempunyai Masalah dalam Baju Pelanggan? Tenang fitur Detektif Baju dari Alsa akan Membantumu Menemukannya dengan Cepat</WrapperCardFeature>
                </WrapperCardFeatures>
              </WrapperCardInfo>
            </WrapperCard>
            <WrapperCard to='/sign-up'>
              <WrapperCardInfo>
                <WrapperCardIcon>
                <Image src={outlet} alt="" />
                </WrapperCardIcon>
                <WrapperCardPlan>Detektif Baju</WrapperCardPlan>
                <WrapperCardFeatures>
                  <WrapperCardFeature>Kamu Mempunyai Masalah dalam Baju Pelanggan? Tenang fitur Detektif Baju dari Alsa akan Membantumu Menemukannya dengan Cepat</WrapperCardFeature>
                </WrapperCardFeatures>
              </WrapperCardInfo>
            </WrapperCard>
          </CardContainer>
        </CardWrapper>
      </CardSection>
    </IconContext.Provider>
  );
}
export default Card;
