import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, HEADER_TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H1 = ({ children }) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          font-family: ${HEADER_TYPEOGRAPHY};
          font-size: ${TEXTSIZE.xxl};
          color: ${COLORS.text}
          line-height: 1.6;
        }
        `}
      </style>
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H1;
