import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { COLORS, TEXTSIZE, SPACING } from '../../lib/styles';

const NavigationBar = () => {
  return (
    <nav id="navbar">
      <Link href="/">
        <a id="navLogo" className="" >
          <img src="/static/images/loader.svg"/>
        </a>
      </Link>

      <Link href="#services">
        <a className="navLink" >Services</a>
      </Link>

      <Link href="#technologies">
        <a className="navLink" >Technologies</a>
      </Link>

      <Link href="#projects">
        <a className="navLink" >Works</a>
      </Link>

      <Link href="#collaborators">
        <a className="navLink" >Collaborators</a>
      </Link>

      <Link href="#about">
        <a className="navLink" >About Us</a>
      </Link>

      {/*
      <Link href="#spaces">
        <a className="navLink" >Spaces</a>
      </Link>
      */}

    <style jsx>{`
      #navbar {
        position: fixed;
        top: 0;
        width: calc(100% - 2*${SPACING.xxl});
        padding: ${SPACING.xl} ${SPACING.xxl};
        background-color: rgba(145, 106, 74, 0.7);
        font-size: ${TEXTSIZE.nav};
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }

      .navLink {
        display: inline-block;
        padding: ${SPACING.sm} ${SPACING.md};

        text-align: center;
        text-decoration: none;
        color: ${COLORS.texts.terciary};
      }

      .navLink:hover {
        background-color: rgba(145, 106, 74, 0.9);
      }

      #navLogo {
        display: inline-block;
        margin-right: auto;
        text-align: center;
        color: ${COLORS.text};
      }
    `}</style>
  </nav>
  );
};

export default NavigationBar;
