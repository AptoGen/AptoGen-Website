import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TEXTSIZE, TYPEOGRAPHY } from '../../lib/styles';

const Paragraph = ({ children, light, style }) => {
  const color = light ? COLORS.texts.primary.light : COLORS.texts.primary.dark;
  return (
    <p style={style}>
      {children}
      <style jsx>{`
        p {
          margin: 1rem 0 1.2rem 0;
          font-family: ${TYPEOGRAPHY.content};
          font-size: ${TEXTSIZE.md};
          color: ${color};
          text-align: justify;
        }
        `}
      </style>
    </p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  light: PropTypes.bool,
  //eslint-disable-next-line
  style: PropTypes.object,
};

export default Paragraph;
