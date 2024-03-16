// components/Loading.tsx
import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <video autoPlay loop muted>
        <source src="/load.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loading;
