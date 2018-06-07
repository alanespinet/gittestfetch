import React from 'react';

export default class MenuBreakfast extends React.Component {

  render(){
    return (
      <div className="menu-breakfast p-t-80">
        <div className="container">
          <div className="menu-section-layout">

            <div className="left-section">
              <h2>Breakfast</h2>
            </div>

            <div className="right-section"></div>
            <div className="bottom-section"></div>

            <div className="floating-section">
              <ul>
                <li>bread n’ eggs</li>
                <li>pure black coffee</li>
                <li>natural fruit juice</li>
                <li>today’s milk</li>
                <li>ham n’ cheese special</li>
                <li>the vegetable start</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
