import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H1 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.primary.light : COLORS.texts.primary.dark;
  return (
    <h1 style={style} >
      {children}
      <style jsx>
        {`
          h1 {
            font-family: ${TYPEOGRAPHY.header.title};
            font-size: ${TEXTSIZE.xxl};
            color: ${color}
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 600;
          }
        `}
      </style>
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

export default H1;
