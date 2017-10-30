import React from 'react';
import PropTypes from 'prop-types';
import { COLORS, TYPEOGRAPHY, SPACING } from '../lib/styles';

const Button = ({ type, onClick, children, copyTarget, style, active }) =>
(
  <button
    type={type}
    onClick={onClick}
    style={active ? { backgroundColor: COLORS.info, color: COLORS.foreground, ...style } : style}
    data-clipboard-target={`#${copyTarget}`}
  >
    {children}

    <style jsx>
      {`
        p {
          font-family: '${TYPEOGRAPHY.input}'
          font-size: 14px;
          line-height: 22px;
          color: ${COLORS.text};
        }
        button:focus {
          outline: none;
        }
        button:active {
          background-color: ${COLORS.info};
        }
        button:active p {
          color: ${COLORS.foreground};
        }
        button:hover {
          font-weight: bold;
        }
        button {
          font-family: ${TYPEOGRAPHY.input};
          font-size: ${SPACING.lg};
          background-color: ${COLORS.input};
          border: none;
          padding: ${SPACING.md} ${SPACING.xl};
        }
      `}
    </style>
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  //eslint-disable-next-line
  style: PropTypes.object,
  copyTarget: PropTypes.string,
};
Button.defaultProps = {
  style: {},
  type: null,
  children: 'Sample Button',
  active: false,
  onClick: e => e.preventDefault(),
  copyTarget: null,
};
export default Button;
