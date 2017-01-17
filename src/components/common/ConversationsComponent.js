import React, {PropTypes} from 'react';
export const ConversationsComponent = () => {

  // TODO: CONDITIONAL RENDERING DEPENDING ON props.converastions length
  return (
    <div>

    </div>
    );
};

ConversationsComponent.propTypes = {
  converastions: PropTypes.array.isRequired
};

export default ConversationsComponent;
