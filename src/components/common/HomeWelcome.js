import React, {PropTypes} from 'react';
import smilies from '../../res/images/common/smilies.png';
import Header from './Header';
import SubHeader from './SubHeader';
import * as C from '../../res/strings/strings-en.js';

export const HomeWelcome = () => {

  return (
    <div>
      <img className="smilies-img" src={smilies} />
      <br />
      <Header title = {"Welcome to TARGET"} style = "sidebarHeader" />
      <br />
      <SubHeader title = {"Find people neaar you & Connect"} />
      <br />
      <ul>
        <li><i></i> {C.HOME_WELCOME_TEXT1}</li>
        <li><i></i> {C.HOME_WELCOME_TEXT2}</li>
      </ul>
      <button className="btn btn-danger btn-sign-out">OK; GOT IT!</button>
    </div>
    );
};

HomeWelcome.propTypes = {
  actions: PropTypes.object.isRequired
};

export default HomeWelcome;
