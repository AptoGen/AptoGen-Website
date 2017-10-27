import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, HEADER_ALT_TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H4 = ({ children }) => (
  <h4>
    {children}
    <style jsx>{`
      h4{
        font-family: '${HEADER_ALT_TYPEOGRAPHY}';
        font-size: ${TEXTSIZE.lg};
        color: ${COLORS.text}
      }
    `}</style>
  </h4>
);

H4.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H4;
