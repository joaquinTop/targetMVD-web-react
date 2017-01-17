import React, {PropTypes} from 'react';
import userPlaceholder from '../../res/images/profile/placeholder-user.png';
import ConversationsComponent from '../common/ConversationsComponent';

export const Home = (props) => {

  return (
    <div>
      <h3 className="home-title">TARGET</h3>
      <div className="user-img-background">
        <img className="user-img" src={userPlaceholder} />
      </div>
      <h4 className="home-username">@nickname</h4>
      <h5 className="home-options">{'Edit / Logout'}</h5>
      <hr className="custom-line" />
      <ConversationsComponent converastions={props.converastions} />
    </div>
    );
};

Home.propTypes = {
  converastions: PropTypes.array.isRequired
};

export default Home;
