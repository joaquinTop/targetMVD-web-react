import React from 'react';
import {Link} from 'react-router';
import MediaQuery from 'react-responsive';

class SignUpTest extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div>
        <MediaQuery query='(min-width: 1224px)'>
          <div className="column-half">
            <div className="form">
              <h2 className="sign-up-title">SIGN UP</h2>
              <form>
                <label className="sign-up-field" htmlFor="nameInput">NAME</label><br />
                <input className="custom-input"
                id="nameInput"/>
                <br/>
                <label className="sign-up-field" htmlFor="emailInput">EMAIL</label><br />
                <input className="custom-input"
                id="emailInput"/>
                <br/>
                <label className="sign-up-field" htmlFor="passwordInput">PASSWORD</label><br />
                <input className="custom-input"
                id="passwordInput"/>
                <br/>
                <label className="sign-up-field" htmlFor="passwordConfirmationInput">CONFIRM PASSWORD</label><br />
                <input className="custom-input"
                id="passwordConfirmationInput"/>
                <br/>
                <label className="sign-up-field">GENDER</label><br />
                <select
                className="custom-select"
                name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                ></select>
                <br/>
                <input className="btn-sign-up" type="submit" value="SIGN UP"></input><br/>
                <hr className="custom-line"/>
                <Link className="sign-in-link" to="sign-in">SIGN IN</Link>
              </form>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-width: 1224px)'>
          <div>
            <div className="form">
              <h2 className="sign-up-title">SIGN UP</h2>
              <form>
                <label className="sign-up-field" htmlFor="nameInput">NAME</label><br />
                <input className="custom-input"
                id="nameInput"/>
                <br/>
                <label className="sign-up-field" htmlFor="emailInput">EMAIL</label><br />
                <input className="custom-input"
                id="emailInput"/>
                <br/>
                <label className="sign-up-field" htmlFor="passwordInput">PASSWORD</label><br />
                <input className="custom-input"
                id="passwordInput"/>
                <br/>
                <label className="sign-up-field" htmlFor="passwordConfirmationInput">CONFIRM PASSWORD</label><br />
                <input className="custom-input"
                id="passwordConfirmationInput"/>
                <br/>
                <label className="sign-up-field">GENDER</label><br />
                <select
                className="custom-select"
                name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                ></select>
                <br/>
                <input className="btn-sign-up" type="submit" value="SIGN UP"></input><br/>
                <hr className="custom-line"/>
                <Link className="sign-in-link" to="sign-in">SIGN IN</Link>
              </form>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default SignUpTest;
