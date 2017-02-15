import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as matchesActions from '../../actions/matchesActions';
import * as currentConversationActions from '../../actions/currentConversationActions';
import * as messagesActions from '../../actions/messagesActions';
import userPlaceholder from '../../res/images/profile/placeholder-user.png';
import ConversationsComponent from '../common/ConversationsComponent';

export const Home = ({ switchContentAction, matches, actions, beginLogout }) => {

  const contentChanged = () => {
    switchContentAction("TargetForm");
  };

  return (
    <div className="home-sidebar-container">
      <div className="home-inside-container-up">
        <div className="home-hiding-content">
          <h3 className="home-title">TARGET</h3>
          <div className="user-img-background">
            <img className="user-img" src={userPlaceholder} />
          </div>
          <h4 className="home-username">@nickname</h4>
          <h5 className="home-options">Edit / <a className="logoutButton" onClick={beginLogout} >Logout</a></h5>
          <hr className="custom-line-home" />
        </div>
      </div>
      <div className="home-inside-container">
        <ConversationsComponent
          converastions={matches}
          updateCurrentConversationAction={actions.updateCurrentConversation}
          switchContent={switchContentAction}
          getMessagesAction={actions.loadMessages}
        />
      </div>
      <button onClick={contentChanged} className="button-new-target">NEW TARGET</button>
    </div>
    );
};

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  matches: PropTypes.array.isRequired,
  beginLogout: PropTypes.func.isRequired,
  switchContentAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ matches }) => {
  return { matches };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, matchesActions, currentConversationActions, messagesActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
