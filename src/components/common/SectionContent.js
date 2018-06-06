import React from 'react';

export default (props) => (
  <section className="section-content p-t-80">
    <div className="container">
      <h2>{ props.section_title }</h2>
    </div>
    { props.children &&
      <div className="section-child-content">
        { props.children }
      </div>
    }
  </section>
);
