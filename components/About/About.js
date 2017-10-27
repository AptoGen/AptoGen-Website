import React from 'react';

import { COLORS, SPACING } from '../../lib/styles';

import H2 from '../Typography/H2';
import H5 from '../Typography/H5';
import P from '../Typography/Paragraph';

const About = () => {
  return (
    <article>
      <header>
        <H2>About Us</H2>
      </header>

      <div id="about">
        <section id="aboutInfo">
          <img src="/static/images/loader-reverse.svg" alt="Name" />
          <H5>Mission</H5>
          <P style={{ color: COLORS.texts.primary }} >
            At AptoGen we believe that technology is much more that a tool,
            it is a form of expression and a platform for collaboration like
            no other.
          </P>
        </section>

        <section id="aboutInfo">
          <img src="/static/images/loader-reverse.svg" alt="Name" />
          <H5>Values</H5>
          <P style={{ color: COLORS.texts.primary }} >
            Description. Maybe more content. Much more.
          </P>
        </section>

      </div>

      <style jsx>{`
        article {
          padding: ${SPACING.xl} 4% ${SPACING.xxl} 4%;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: flex-end;
        }

        .article header {
          align-self: center;
          justify-content: center;
        }

        #about {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
        }

        #about section {
          margin: ${SPACING.md};
          display: flex;
          flex-flow: column nowrap;
        }

        #about #aboutInfo {
          width: 40%;
        }
      `}</style>
    </article>
  );
};

export default About;
