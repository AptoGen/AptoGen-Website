import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, HEADER_TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H3 = ({ children }) => (
  <h3>
    {children}
    <style jsx>{`
      h3{
        font-family: '${HEADER_TYPEOGRAPHY}';
        font-size: ${TEXTSIZE.lg};
        color: ${COLORS.text}
        line-height: 1.2;
        font-weight: normal;
      }
    `}</style>
  </h3>
);

H3.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H3;
