import React, {PropTypes} from 'react';
import smilies from '../../res/images/common/smilies.png';
// import Header from './Header';
// import SubHeader from './SubHeader';
import * as C from '../../res/strings/strings-en.js';

export const HomeWelcome = (props) => {

  const contentChanged = () => {
    props.switchContentAction("TargetForm");
  };

  return (
    <div>
      <img className="smilies-img" src={smilies} />
      <br />
      <h3>Welcome to <strong>TARGET</strong></h3>
      <h4>Find people neaar you & Connect</h4>
      <br />
      <br />
      <ul className="listCustom">
        <li><i></i> {C.HOME_WELCOME_TEXT1}</li>
        <br />
        <li><strong>TARGET</strong><i></i> {C.HOME_WELCOME_TEXT2}</li>
      </ul>
      <br />
      <button onClick={contentChanged} className="btn-sign-up">OK; GOT IT!</button>
    </div>
    );
};

HomeWelcome.propTypes = {
  switchContentAction: PropTypes.func.isRequired
};

export default HomeWelcome;
