import React from 'react'

export default class MenuDrinks extends React.Component {

  render(){
    return (
      <div className="menu-drinks p-t-120">
        <div className="container">
          <div className="menu-section-layout">

            <div className="main-panel">
              <h2>Drinks</h2>
              <img src="/images/menu-drinks.jpg" alt="" />
            </div>

            <div className="floating-panel">
              <ul>
                <li>best spanish and french wines</li>
                <li>seven years aged cuban ron</li>
                <li>japanese sake</li>
                <li>high quality hand crafted drinks</li>
                <li>sodas (dietetic and non dietetic)</li>
                <li>natural fruit juices</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }

}
