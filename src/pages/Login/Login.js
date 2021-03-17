import React from 'react';
import { sectionOf1 } from './Data';
import { Login  } from '../../components';

function Home() {
  return (
    <>

      {/* <InfoSection {...homeObjOne} /> */}
      {/* <BannerSection {...homeObjThree} /> */}
      <Login {...sectionOf1}/>
      
    </>
  );
}

export default Home;
