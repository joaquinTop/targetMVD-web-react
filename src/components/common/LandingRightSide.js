import React from 'react';
import image from '../../res/images/png/right-png.png';
import MediaQuery from 'react-responsive';

const LandingRightSide = () => {
  return (
    <div>
      <MediaQuery query='(min-width: 1224px)'>
        <div className="column-right-half">
          <img className="rectangle" src={image}></img>
          {/* <div className="rectangle"></div> */}
        </div>
      </MediaQuery>
      <MediaQuery query='(max-width: 1224px)'>
        <div className="column-right">
          <img className="rectangle" src={image}></img>
          {/* <div className="rectangle"></div> */}
        </div>
      </MediaQuery>
    </div>
  );
};


export default LandingRightSide;
