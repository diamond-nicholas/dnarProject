import React from 'react';
import './side-navnew.scss';
const sideNavNew = () => {
  return (
    <div>
      <div className='side-container'>
        <div className='menu'>
          <img src='/vectors/menu.svg' alt='menu' />
        </div>
        <div className='nav-wrapper'>
          <div className='table'>
            <img src='/vectors/table.svg' alt='table' />
          </div>
          <div className='table table1'>
            <img src='/vectors/bar-chart.svg' alt='bar chart' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideNavNew;
