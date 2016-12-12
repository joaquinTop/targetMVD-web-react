import React, {PropTypes} from 'react';

export class Header extends React.Component {
  render() {
    return(
      <div className={this.props.style}>
        <h3 className="headerTitle">{this.props.title}</h3>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};

export default Header;
