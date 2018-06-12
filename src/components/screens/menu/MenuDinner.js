import React from 'react';

export default class MenuDinner extends React.Component {

  render(){
    return (
      <div className="menu-dinner p-t-120">
        <div className="image-wrapper">
          <img src="/images/menu-dinner-full.jpg" alt="" className="fluid-image" />
        </div>

        <div className="content-wrapper">
          <div className="container">
            <div className="menu-dinner-content">

              <div className="main-panel">
                <img src="/images/menu-dinner-bottom.jpg" alt="" />
              </div>

              <div className="floating-panel">
                <h2>Dinner</h2>
                <ul>
                  <li>whole reasted turkey</li>
                  <li>family size bbq table</li>
                  <li>rice n' meat</li>
                  <li>italian salmon</li>
                  <li>off season salads</li>
                  <li>cuban 'lechon'</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
