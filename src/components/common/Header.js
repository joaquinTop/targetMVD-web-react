import React, {PropTypes} from 'react';

export const Header = (props) => {
  return(
    <div className={props.style}>
      <h3 className="sidebarHeaderTitle">{props.title}</h3>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};

export default Header;
