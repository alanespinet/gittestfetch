import React from 'react';
import SpecialsCard from './SpecialsCard';

class SpecialsCardsBlock extends React.Component {

  render(){
    return (
      <div className="specials-cards-block">
        <div className="container">
          <div className="special-cards-block-wrapper">
            <div className="specials-cards-block-row first-cards-row">
              <SpecialsCard
                specials_card_image="specials01.jpg"
                specials_card_color="#cb914d"
                specials_card_title="The Cheff Night"
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </SpecialsCard>


              <SpecialsCard
                specials_card_image="specials02.jpg"
                specials_card_color="#b71c00"
                specials_card_title="¡Baile Flamenco!"
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </SpecialsCard>


              <SpecialsCard
                specials_card_image="specials03.jpg"
                specials_card_color="#7099ab"
                specials_card_title="Seafood day"
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </SpecialsCard>
            </div>

            <div className="specials-cards-block-row second-cards-row">
              <SpecialsCard
                specials_card_image="specials04.jpg"
                specials_card_color="#61963a"
                specials_card_title="Extra Cheap Celebration Time"
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </SpecialsCard>
            </div>

            <div className="specials-cards-block-row second-cards-row">
              <SpecialsCard
                specials_card_image="specials05.jpg"
                specials_card_color="#d273d5"
                specials_card_title="Wellness monthly morning"
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </SpecialsCard>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default SpecialsCardsBlock;
