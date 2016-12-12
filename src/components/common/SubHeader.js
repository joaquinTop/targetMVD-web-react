import React, {PropTypes} from 'react';

export class SubHeader extends React.Component {
  render() {
    return(
      <div className={this.props.style}>
        <h5 className="subHeaderTitle">{this.props.title}</h5>
      </div>
    );
  }
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired
};

export default SubHeader;
