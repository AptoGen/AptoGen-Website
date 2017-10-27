import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TEXTSIZE, PARAGRAPH_TYPEOGRAPHY } from '../../lib/styles';

const ParagraphContainer = ({ children, style }) => (
  <p style={style}>
    {children}
    <style jsx>{`
      p {
        margin: 1rem 0 1.2rem 0;
        font-family: ${PARAGRAPH_TYPEOGRAPHY};
        font-size: ${TEXTSIZE.md};
        color: ${COLORS.foreground};
        text-align: justify;
      }
    `}
    </style>
  </p>
);

ParagraphContainer.propTypes = {
  children: PropTypes.node.isRequired,
  //eslint-disable-next-line
  style: PropTypes.object,
};

export default ParagraphContainer;
