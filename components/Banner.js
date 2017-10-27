import React from 'react';

import H1 from './Typography/H1';
import H5 from './Typography/H5';

import { COLORS } from '../lib/styles';

const Banner = (props) => {
  return (
    <div id="bannerWrapper">
      <img src="/static/images/loader.svg" width="250px"/>
      <H1>AptoGEN</H1>
      <H5>Driver of software intovation.</H5>
      <style jsx>{`
        #bannerWrapper{
          background: ${COLORS.alt};
          height: 100vh;
          width: 100vw;

          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }

      `}</style>
    </div>
  );
};

export default Banner;
