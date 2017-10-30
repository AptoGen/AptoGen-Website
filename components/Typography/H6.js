import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPEOGRAPHY, TEXTSIZE } from '../../lib/styles';

const H6 = ({ children, light, style }) => {
  const color = light ? COLORS.texts.primary.light : COLORS.texts.primary.dark;
  return (
    <h6 style={style} >
      {children}
      <style jsx>
        {`
          h6 {
            font-family: ${TYPEOGRAPHY.header.title};
            font-size: ${TEXTSIZE.md};
            color: ${color}
            line-height: 1.6;
            margin: .65rem 0 .50rem 0;
            font-weight: 300;
          }
        `}
      </style>
    </h6>
  );
};

H6.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  style: PropTypes.object,
};

export default H6;
