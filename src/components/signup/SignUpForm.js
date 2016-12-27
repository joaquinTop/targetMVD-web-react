import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import TextInput from '../common/TextInput';
import validateInput from '../../utils/validations/signup.js';

class SignUpForm extends React.Component{
  constructor(props, context){
    super(props, context);

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      gender: 0,
      token: '',
      user_id:''
    };
  }

  onFieldChange(fieldName, value) {
    let newState = Object.assign({}, this.state);
    newState[fieldName] = value;
    this.setState(newState);
  }

  onGenderChange(e){
    let newState = Object.assign({}, this.state);
    newState.gender = e.target.value;
    this.setState(newState);
  }

  isValid(data){
    const {isValid} = validateInput(data);
    if (!isValid) {
      // display the errors
    }
    return true;
  }

  onSubmitClick(e){
    e.preventDefault();
    let genderId = this.state.gender === 'male' ? 0:1;
    let userJson = {
      user:{
        email:this.state.email,
        password:this.state.password,
        password_confirmation:this.state.passwordConfirmation,
        name:this.state.name,
        gender:genderId}
    };
    this.props.signUpAction(userJson);
  }

  redirect(){
    browserHistory.push('/sign-in');
  }

  render(){
    const user = this.state;

    return (
      <div className={this.props.style}>
        <div className="form">
          <h2 className="sign-up-title">SIGN UP</h2>
          <form>
            <label className="sign-up-field" htmlFor="nameInput">NAME</label><br />
            <TextInput id="nameInput" onChange={this.onFieldChange} name="name" type={"text"} value={user.name} required={"true"} autofocus={"true"}></TextInput><br />
            <label className="sign-up-field" htmlFor="emailInput">EMAIL</label><br />
            <TextInput id="emailInput" onChange={this.onFieldChange} name="email" type={"email"} value={user.email} required={"true"}></TextInput><br />
            <label className="sign-up-field" htmlFor="passwordInput">PASSWORD</label><br />
            <TextInput id="passwordInput" onChange={this.onFieldChange} name="password" type={"password"} value={user.password} required={"true"}></TextInput><br />
            <label className="sign-up-field" htmlFor="passwordConfirmationInput">CONFIRM PASSWORD</label><br />
            <TextInput id="passwordConfirmationInput" onChange={this.onFieldChange} name="passwordConfirmation" type={"password"} value={user.passwordConfirmation} required={"true"}></TextInput><br />
            <label className="sign-up-field">GENDER</label><br />
            <select
            className="custom-select"
            name="gender"
            onChange={this.onGenderChange}
            required
            value={user.gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            ></select><br/>
            <input className="btn-sign-up" type="submit" value="SIGN UP" onClick={this.onSubmitClick}></input><br/>
            <hr className="custom-line"/>
            <Link className="sign-in-link" to="sign-in">SIGN IN</Link>
          </form>
        </div>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  signUpAction: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
};

export default SignUpForm;
