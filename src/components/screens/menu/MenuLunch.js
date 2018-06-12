import React from 'react';

export default class MenuLunch extends React.Component {

  render(){
    return (
      <div className="menu-lunch p-t-80">
        <div className="container">

          <div className="menu-section-layout">
            <div className="layout-row first-row">
              <div className="images-column">
                <div className="first-image"></div>
                <div className="second-image"></div>
              </div>

              <div className="color-column">
                <h2>Lunch</h2>
              </div>
            </div>

            <div className="layout-row second-row">
              <div className="first-image"></div>
              <div className="second-image"></div>
            </div>

            <div className="floating-section">
              <ul>
                <li>unmatchable seafood</li>
                <li>chicken salad</li>
                <li>spanish 'paella'</li>
                <li>our Darwin's soup</li>
                <li>bbq n' fire ribs</li>
                <li>rabbit's stew</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    );

  }

}
