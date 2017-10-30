import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H3 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.primary.light : COLORS.texts.primary.dark;
  return (
    <h3 style={style} >
      {children}
      <style jsx>
        {`
          h3 {
            font-family: ${TYPEOGRAPHY.header.title};
            font-size: ${TEXTSIZE.xl};
            color: ${color}
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 400;
          }
        `}
      </style>
    </h3>
  );
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

export default H3;
