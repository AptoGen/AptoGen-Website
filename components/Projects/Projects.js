import React from 'react';

import { COLORS, SPACING } from '../../lib/styles';

import H2 from '../Typography/H2';
import H5 from '../Typography/H5';
import P from '../Typography/Paragraph';
import Link from '../Typography/Link';

const Projects = () => {
  const h5 = {
    color: COLORS.texts.terciary,
  };
  return (
    <article>
      <header>
        <H2>Previous Works</H2>
      </header>

      <div id="projects">
        <section className="project">
          <Link href="https://sexycandies.herokuapp.com/" >
            <H5 style={{ fontFamily: 'Great Vibes', color: '#b90000', 'font-size': '54px',  }}>Sexy Candies</H5>
          </Link>
          <P>
            Somart Martos is a Puerto Rican pastry chef that creates delicious
            works of art. She makes every occasion ellegant with her top quality
            products.
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

        #projects {
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: space-evenly;
        }

        .project {
          margin: ${SPACING.md};
          padding: 0 ${SPACING.md};
          width: 50%;
        }
      `}</style>
    </article>
  );
};

export default Projects;
