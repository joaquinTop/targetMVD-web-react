import React, {PropTypes} from 'react';

export const Header = ({ style, title }) => {
  return(
    <div className={style}>
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
