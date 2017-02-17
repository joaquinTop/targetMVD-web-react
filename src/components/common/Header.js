import React, {PropTypes} from 'react';
import backArrow from '../../res/images/common/arrow-left.png';
import { CONTENTS } from '../../enums/enums';

export const Header = ({ style, title, withBackButton, onBackPressed }) => {

  const back = () => {
    onBackPressed(CONTENTS.Home);
  };

  return(
    <div className={style}>
      {withBackButton && <a onClick={back}><img className="back-button" src={backArrow} /></a>}
      <h3 className="sidebarHeaderTitle">{title}</h3>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  withBackButton: PropTypes.bool.isRequired,
  onBackPressed: PropTypes.func
};

export default Header;
