import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='col-12 wrapper'>
      <div className='loader'>
        <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary'></span>
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
