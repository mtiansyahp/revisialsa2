import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,homeObjFive,homeObjTest } from './Data';
import { InfoSection,BannerSection,FiturSection, Card  } from '../../components';

function Home() {
  return (
    <>

      <InfoSection {...homeObjOne} />
      {/* <BannerSection {...homeObjThree} /> */}
      <FiturSection {...homeObjThree}/>
      {/* <InfoSection {...homeObjThree} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <BannerSection {...homeObjTwo} />
      <Card />
     
      <InfoSection {...homeObjFour} />
      <BannerSection {...homeObjFive} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Home;
