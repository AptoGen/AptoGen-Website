import React from 'react';

import { COLORS, SPACING } from '../../lib/styles';

import H2 from '../Typography/H2';
import H4 from '../Typography/H4';
import H5 from '../Typography/H5';
import P from '../Typography/Paragraph';
import strong from '../Typography/strong';

const Technologies = () => {
  const styles = {
  }
  return (
    <article>
      <header>
        <H2>Technologies</H2>
        <H4>Making use of the latest technologies.</H4>
      </header>

      <div id="technologies">
        <section className="tech">
          <img src="/static/images/loader.svg"/>
          <span className="techTag">Nextjs</span>
        </section>

        <section className="tech">
          <img src="/static/images/loader.svg"/>
          <span className="techTag">React</span>
        </section>

        <section className="tech">
          <img src="/static/images/loader.svg"/>
          <span className="techTag">GraphQL</span>
        </section>

        <section className="tech">
          <img src="/static/images/loader.svg"/>
          <span className="techTag">MongoDB</span>
        </section>

        <section className="tech">
          <img src="/static/images/loader.svg"/>
          <span className="techTag">npm</span>
        </section>

        <section className="tech">
          <img src="/static/images/loader.svg"/>
          <span className="techTag">git</span>
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

        #technologies {
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: space-evenly;
          width: 70vw;
        }

        .tech {
          display: flex;
          flex-flow: column;
          justify-content: space-around;

          margin: ${SPACING.md} ${SPACING.xl};
        }

        .tech img {
          width: 150px;
        }

        .techTag {
          margin: ${SPACING.md} auto;
          padding: 0 ${SPACING.md};
          width: 40%;
          background-color: rgba(48, 51, 50, 0.25);
          text-align: center;
        }

      `}</style>
    </article>
  );
};

export default Technologies;
