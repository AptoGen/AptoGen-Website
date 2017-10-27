import React from 'react';

import { COLORS, SPACING } from '../../lib/styles';

import H2 from '../Typography/H2';
import H5 from '../Typography/H5';
import P from '../Typography/Paragraph';
import strong from '../Typography/strong';

const Services = (props) => {
  return (
    <article>
      <header>
        <H2>Services</H2>
      </header>

      <div id="services">
        <section className="service">
          <H5>Software Development</H5>
          <P>
             Group of skilled freelance developers to make your project a
            <strong> reality</strong>.
          </P>
        </section>

        <section className="service">
          <H5>Project Consultation</H5>
          <P>
            Software Development Consultation to  help make professional
            and informed assessments of the requirements and direction
            of products.
          </P>
        </section>

        {/* <section className="service">
          <H5>Coworking Spaces</H5>
          <P>
            Because we love sharing and engaging with a community of entrepenuers,
            our offices are open for anyone to come and share the space.
          </P>
          <P>
            Perfect for digital nomads, freelancers, and small teams.
          </P>
        </section> */}

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

        #services {
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: space-evenly;
        }

        .service {
          margin: ${SPACING.md};
          padding: 0 ${SPACING.md};
          width: 50%;
          background-color: rgba(48, 51, 50, 0.25);
        }

      `}</style>
    </article>
  );
};

export default Services;
