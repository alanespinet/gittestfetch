import React from 'react';
import { connect } from 'react-redux';
import ArtSingle from './ArtSingle';

class ArtList extends React.Component {

  render(){
    return (
      <div className="art-list">
        { this.props.art.map(a =>
          <ArtSingle
            key={a.photo_name}
            image={a.photo_name}
            text={a.text}
            url={a.link}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  art: state.artReducer.art
});

export default connect(mapStateToProps)(ArtList);
