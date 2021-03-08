import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,homeObjTest } from './Data';
import { InfoSection,BannerSection,FiturSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <BannerSection {...homeObjThree} /> */}
      <FiturSection {...homeObjThree}/>
      {/* <InfoSection {...homeObjThree} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <BannerSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
