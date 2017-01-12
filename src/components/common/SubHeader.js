import React, {PropTypes} from 'react';


export const SubHeader = (props) => {
  return(
    <h5 className="sidebarSubHeader">{props.title}</h5>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default SubHeader;
