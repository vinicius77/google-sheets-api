import React from 'react';

const Loading = () => {
  return (
    <React.Fragment>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
};

export default Loading;
