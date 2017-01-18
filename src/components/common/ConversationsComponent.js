import React, {PropTypes} from 'react';
export const ConversationsComponent = (props) => {

  // TODO: CONDITIONAL RENDERING DEPENDING ON props.converastions length
  return (
    <div>
      <h1>{props.converastions.length}</h1>
    </div>
    );
};

ConversationsComponent.propTypes = {
  converastions: PropTypes.array.isRequired
};

export default ConversationsComponent;
