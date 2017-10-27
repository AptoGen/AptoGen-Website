import React from 'react';
import PropTypes from 'prop-types';

import { SHADERS } from '../lib/styles';

const Woodpane = ({children}) => (
  <div className="woodland">
    <div className="woodland-shader">
      {children}
    </div>

    <style jsx>{`
      .woodland {
        background: url("/static/images/wood-boards.jpeg") no-repeat scroll center center;
        background-size: cover;
      }

      .woodland-shader {
        height 100%;
        background: ${SHADERS.context};
      }
    `}</style>
  </div>
);

export default Woodpane;
