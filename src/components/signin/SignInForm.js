import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import * as strings from '../../res/strings/strings-en';
import validateInput from '../../utils/validations/signup.js';
import userClient from '../../client/UsersServerClient';
import targetClient from '../../client/TargetsServerClient';
import cookie from 'react-cookie';


class SignInForm extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onFieldChange = this.onFieldChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  onFieldChange(fieldName, value) {
    this.props.updateUserInfo(this.props.user, fieldName, value);
  }

  isValid(data){
    const {isValid} = validateInput(data);
    if (!isValid) {
      // display the errors
    }
    return isValid;
  }

  signIn(e){
    e.preventDefault();
    const userJson = {
      "user":{
        "email":this.props.user.email,
        "password":this.props.user.password
      }
    };
    userClient.signIn(userJson).then(data => {
      targetClient.setUserInfo(data.token, data.user_id);
      this.props.updateSession(this.props.session, "user_id", data.user_id);
      this.props.updateSession(this.props.session, "user_token", data.token);
      this.props.updateSession(this.props.session, "isLoggedIn", true);
      cookie.save('user', userJson, { path: '/' });
      this.redirect();
    }).catch(error => {
      console.log(error);
    });
  }

  redirect(){
    browserHistory.push('/home');
  }

  render(){
    const {user} = this.props;

    return (
      <div className="column">
        <div className="form">
          <h2>TARGET MVD</h2>
          <h3>{strings.SIGN_IN_FIND_PEOPLE_NEAR_YOU}</h3>
          <h3>{strings.SIGN_IN_CREATE_TARGET}</h3>
          <form>
            <label for="inputEmail">EMAIL</label><br/>
            <TextInput id="inputEmail" onChange={this.onFieldChange} name="email" type={"email"} value={user.email} required={"true"} autofocus={"true"}></TextInput><br/>
            <label for="inputPassword">PASSWORD</label><br/>
            <TextInput id="inputPassword" onChange={this.onFieldChange} name="password" type={"password"} value={user.password} required={"true"}></TextInput><br/>
            <input type="submit" value="Sign in" onClick={this.signIn}></input><br/>
            <label>Forgot your password?</label><br/>
            <label className="label-underline">CONNECT WITH FACEBOOK</label><br/>
            <Link to="/">SIGN UP</Link>
          </form>
        </div>
      </div>
    );
  }
}

SignInForm.propTypes = {
  updateUserInfo: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  updateSession: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired
};

export default SignInForm;
