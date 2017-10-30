import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H5 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.primary.light : COLORS.texts.primary.dark;
  return (
    <h5 style={style} >
      {children}
      <style jsx>
        {`
          h5 {
            font-family: ${TYPEOGRAPHY.header.title};
            font-size: ${TEXTSIZE.lg};
            color: ${color}
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 300;
          }
        `}
      </style>
    </h5>
  );
};

H5.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

export default H5;
