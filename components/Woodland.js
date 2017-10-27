import React from 'react';
import PropTypes from 'prop-types';

import { SHADERS } from '../lib/styles';

const Woodland = ({children}) => (
  <div className="woodland">
    <div className="woodland-shader">
      {children}
    </div>

    <style jsx>{`
      .woodland {
        width: 100%
        background: url("/static/images/wood-stacked.jpeg") no-repeat scroll center center;
        background-size: cover;
        margin: 0px;
      }

      .woodland-shader {
        height 100%;
        background: ${SHADERS.details};
      }
    `}</style>
  </div>
);

export default Woodland;
