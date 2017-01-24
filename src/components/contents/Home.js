import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matchesActions from '../../actions/matchesActions';
import userPlaceholder from '../../res/images/profile/placeholder-user.png';
import ConversationsComponent from '../common/ConversationsComponent';
import smilies from '../../res/images/common/smilies.png';

export const Home = (props) => {

  const contentChanged = () => {
    props.switchContentAction("TargetForm");
  };
  return (
    <div>
      <h3 className="home-title">TARGET</h3>
      <div className="user-img-background">
        <img className="user-img" src={userPlaceholder} />
      </div>
      <h4 className="home-username">@nickname</h4>
      <h5 className="home-options">Edit / Logout</h5>
      <hr className="custom-line-home" />
      <button onClick={contentChanged} className="button-new-target">NEW TARGET</button>
      <br />
      <ConversationsComponent converastions={props.matches} />
      <br />
      <img className="smilies-home" src={smilies} />
    </div>
    );
};

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired,
  switchContentAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ matches }) => {
  return { matches };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(matchesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
