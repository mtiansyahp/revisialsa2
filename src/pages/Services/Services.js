import React from 'react';
import { InfoSection, Card } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <Card />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Services;
