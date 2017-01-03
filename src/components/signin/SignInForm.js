import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import * as strings from '../../res/strings/strings-en';
import validateInput from '../../utils/validations/signup.js';
import { FacebookLogin } from 'react-facebook-login-component';

class SignInForm extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onFieldChange = this.onFieldChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.state = {
      name: '',
      email: ''
    };
  }

  responseFacebook (response) {
    console.log(response);
    this.props.signInWithFBAction(response.accessToken);
  }

  onFieldChange(fieldName, value) {
    let newState = Object.assign({}, this.state);
    newState[fieldName] = value;
    this.setState(newState);
  }

  isValid(data){
    const {isValid} = validateInput(data);
    if (!isValid) {
      // TODO: display the errors
    }
    return isValid;
  }

  signIn(e){
    e.preventDefault();
    const userJson = {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    };
    this.props.signInAction(userJson);
  }

  redirect(){
    browserHistory.push('/home');
  }

  render(){
    const user = this.state;

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
          </form>
          <FacebookLogin socialId="1360608777317078"
          class="label-underline"
          language="en_US"
          scope="public_profile,email,user_about_me"
          responseHandler={this.responseFacebook}
          xfbml={true}
          version="v2.5"
          buttonText="CONNECT WITH FACEBOOK"/>
          <Link to="/">SIGN UP</Link>
        </div>
      </div>
    );
  }
}

SignInForm.propTypes = {
  updateSession: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  signInAction: PropTypes.func.isRequired,
  signInWithFBAction: PropTypes.func.isRequired
};

export default SignInForm;
