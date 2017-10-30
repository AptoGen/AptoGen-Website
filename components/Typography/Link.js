import PropTypes from 'prop-types';
import React from 'react';

import { LINKS } from '../../lib/styles';

const Link = ({ href, target, children, download, media, rel, type }) => (
  <a href={href} target={target} download={download} media={media} rel={rel} type={type} >
    {children}
    <style>{`
      a {
        color: ${LINKS.normal};
        text-decoration: none;
      }
      a::hover {
        color: ${LINKS.hover};
      },
      a::active {
        color: ${LINKS.active};
      },
    `}
    </style>
  </a>
);

export default Link;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node,
  download: PropTypes.string,
  media: PropTypes.string,
  rel: PropTypes.string,
  type: PropTypes.string,
};

Link.defaultProps = {
  children: undefined,
  target: '',
  download: '',
  media: '',
  rel: '',
  type: '',
};
