import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, HEADER_ALT_TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H5 = ({ children, style }) => (
  <h5 style={style}>
    {children}
    <style jsx>{`
      h5 {
        margin: .65rem 0 .50rem 0;
        font-family: '${HEADER_ALT_TYPEOGRAPHY}';
        font-size: ${TEXTSIZE.lg};
        font-weight: 300;
        color: ${COLORS.texts.contrast};
      }
    `}</style>
  </h5>
);

H5.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H5;
