import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matchesActions from '../../actions/matchesActions';
import userPlaceholder from '../../res/images/profile/placeholder-user.png';
import ConversationsComponent from '../common/ConversationsComponent';

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
      <h5 className="home-options">{'Edit / Logout'}</h5>
      <hr className="custom-line-home" />
      <ConversationsComponent converastions={props.matches} />
      <button onClick={contentChanged} className="btn-sign-up">NEW TARGET</button>
    </div>
    );
};

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired,
  switchContentAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ matches }) => {
  return {
    matches
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, matchesActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
