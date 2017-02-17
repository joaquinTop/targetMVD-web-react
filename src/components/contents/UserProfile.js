import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import userPlaceholder from '../../res/images/profile/placeholder-user.png';
import smilies from '../../res/images/common/smilies.png';
import TextInput from '../common/TextInput';
import * as sessionActions from '../../actions/sessionActions';
import * as alertActions from '../../actions/alertActions';
import { ALERT_GOALS  } from '../../enums/enums';
import { validateUserProfile } from '../../utils/ValidationHelper';


class UserProfile extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onSettingsSubmit = this.onSettingsSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.state = {
      email: this.props.session.user.email,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  onSettingsSubmit(e){
    e.preventDefault();

    const newSettings = {
      user: {
        prev: this.state.currentPassword,
        password: this.state.newPassword,
        confirmation: this.state.confirmPassword,
        email: this.state.email
      }
    };
    const { session: { user_id }, actions: { createAlert, resetPasswordAction } } = this.props;

    const error = validateUserProfile(newSettings.user);
    if (error) {
      createAlert(ALERT_GOALS.SideBarContainer, error, "error");
      return;
    }

    delete newSettings.user.email;
    resetPasswordAction(newSettings, user_id);
  }

  onFieldChange(fieldName, value){
    let newState = Object.assign({}, this.state);
    newState[fieldName] = value;
    this.setState(newState);
  }

  render(){
    const { name } = this.props.session.user;
    return (
      <div className="home-sidebar-container">
        <div className="user-profile-inside-container-up">
          <div className="home-hiding-content">
            <div className="user-profile-img-background">
              <img className="user-img" src={userPlaceholder} />
            </div>
            <h4 className="home-username">{name}</h4>
          </div>
        </div>
        <form>
          <label className="user-profile-email-field" htmlFor="inputEmail">EMAIL</label><br />
          <TextInput
            id="inputEmail"
            onChange={this.onFieldChange}
            name="email"
            type={"email"}
            value={this.state.email}
            required={"true"}
            autofocus={"true"}
          />
          <br />
          <label className="user-profile-field" htmlFor="inputPassword">CURRENT PASSWORD</label><br />
          <TextInput
            id="inputPassword"
            onChange={this.onFieldChange}
            name="currentPassword"
            type={"password"}
            value={this.state.currentPassword}
            required={"true"}
          />
          <br />
          <label className="user-profile-field" htmlFor="inputPassword">NEW PASSWORD</label><br />
          <TextInput
            id="inputPassword"
            onChange={this.onFieldChange}
            name="newPassword"
            type={"password"}
            value={this.state.newPassword}
            required={"true"}
          />
          <br />
          <label className="user-profile-field" htmlFor="inputPassword">CONFIRM PASSWORD</label><br />
          <TextInput
            id="inputPassword"
            onChange={this.onFieldChange}
            name="confirmPassword"
            type={"password"}
            value={this.state.confirmPassword}
            required={"true"}
          />
          <br />
          <input className="btn-save-user-profile" type="submit" value="SAVE CHANGES" onClick={this.onSettingsSubmit} />
          <br />
          <label className="user-profile-forgot-your-password ">Delete my TARGET account</label>
          <br />
          <img className="smilies-img-sidebar" src={smilies} alt="Smiley faces" />
        </form>
      </div>
    );
  }
}

UserProfile.propTypes = {
  session: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ session }) => {
  return { session };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, sessionActions, alertActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
