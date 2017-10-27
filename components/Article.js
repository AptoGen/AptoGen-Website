import React from 'react';

const Article = ({header, sections, footer}) => {
  return (
    <article>
      <header>
        <H2>{header}</H2>
      </header>
      {sections.map(section => (
          <section>
            <H5>{section.title}</H5>
            <P>{section.body}</P>
          </section>
        ))
      }
      <footer>
        {footer}
      </footer>
    </article>
  );
}
