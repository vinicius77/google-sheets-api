import React from 'react';

const Loading = () => {
  return (
    <React.Fragment>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
};

export default Loading;
