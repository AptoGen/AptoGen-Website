import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H4 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.primary.light : COLORS.texts.primary.dark;
  return (
    <h4 style={style} >
      {children}
      <style jsx>
        {`
          h4 {
            font-family: ${TYPEOGRAPHY.header.title};
            font-size: ${TEXTSIZE.lg};
            color: ${color}
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 400;
          }
        `}
      </style>
    </h4>
  );
};

H4.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

export default H4;
