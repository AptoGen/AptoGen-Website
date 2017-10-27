import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, HEADER_TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H2 = ({ children }) => {
  return (
    <h2>
      {children}
      <style jsx>{`
        h2{
          font-family: '${HEADER_TYPEOGRAPHY}';
          font-size: ${TEXTSIZE.xl};
          line-height: 1.4;
          color: ${COLORS.text};
        }
    `}</style>
    </h2>
  );
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default H2;
