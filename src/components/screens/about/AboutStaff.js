import React from 'react';
import AboutBlock from './AboutBlock';

class AboutStaff extends React.Component {

  state = {
    waiters: [
      { name: 'Amanda', picture: 'wait01.png' },
      { name: 'Heather', picture: 'wait02.png' },
      { name: 'Francis', picture: 'wait03.png' },
      { name: 'Carl', picture: 'wait04.png' },
      { name: 'David', picture: 'wait05.png' }
    ],

    cookers: [
      { name: 'Cheff - Brian', picture: 'cheff01.png' },
      { name: 'Cooker - Gio', picture: 'cooker01.png' },
      { name: 'Cooker - Lisa', picture: 'cooker02.png' }
    ]
  }

  render(){
    return (
      <div className="about-staff">
        <div className="container">
          <h2>Our Staff</h2>
          <AboutBlock
            color="#e6d5c0"
            title="waitresses and waiters"
            staff={ this.state.waiters }
          />
          <AboutBlock
            color="#cbd7dd"
            title="cookers"
            staff={ this.state.cookers }
          />
        </div>
      </div>
    );
  }
}

export default AboutStaff;
