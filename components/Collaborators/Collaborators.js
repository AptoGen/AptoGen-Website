import React, { PureComponent } from 'react';

import { COLORS, SPACING } from '../../lib/styles';

import H2 from '../Typography/H2';
import H4 from '../Typography/H4';
import H5 from '../Typography/H5';
import P from '../Typography/Paragraph';

import Profile from './Profile';

class Collaborators extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      active: 0,
      collaborators: [
        {
          name: 'Karlo Martinez',
          title: 'Co-founder',
          description: "Aptogen\'s head of development and fullstack engineer.",
        },
        {
          name: 'John Doe',
          title: 'Freelancer',
          description: 'Collaborates on projects that require his expertice.',
        },
      ],
    };
  }

  onClick(active) {
    // console.log(event.target);
    this.setState({ active });
  }

  render() {
    const collaborator = this.state.collaborators[this.state.active];
    return (
      <article>
        <header>
          <H2>Collaborators</H2>
        </header>

        <div id="collaborators">
          <section id="collaboratorImages">
            <img src="/static/images/loader-reverse.svg" alt="Name" onClick={()=>this.onClick(0)} />
            <img src="/static/images/loader.svg" alt="Name" onClick={()=>this.onClick(1)} />
          </section>
          <section id="collaboratorInfo">
            <Profile {...collaborator} />
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

          #collaborators {
            display: flex;
            flex-flow: row wrap;
            align-items: flex-end;
            justify-content: space-evenly;

            width: 80vw;
          }

          #collaborators section {
            margin: ${SPACING.md};
            width: 35vw;
          }

          #collaborators #collaboratorImages {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            width: 50%;
          }

          #collaborators #collaboratorImages img {
            width: 20%;

            padding: ${SPACING.sm};
          }

          `}
        </style>
      </article>
    );
  }
}

export default Collaborators;
