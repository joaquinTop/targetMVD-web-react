import React from 'react';
import userPlaceholder from '../../res/images/profile/placeholder-user.png';
import userPlaceholderBackground from '../../res/images/profile/placeholder-background.png';

export const Home = () => {

  return (
    <div>
      <h3 className="home-title">TARGET</h3>
      <div className="user-img-background">
        <img className="user-img" src={userPlaceholder}/>
      </div>
      <h4 className="home-username">@nickname</h4>
      <h5 className="home-options">{'Edit / Logout'}</h5>
      <hr className="custom-line"/>
    </div>
    );
};

export default Home;
