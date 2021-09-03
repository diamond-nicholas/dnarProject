/* eslint-disable no-unused-vars */
import React from 'react';

import SideNav from '../side-nav/side-nav';

import SideNavNew from '../side-nav/side-navnew';

import './dash.scss';

const DashboardLayout = ({ children }) => {
  return (
    <div className='dash-area'>
      <div className='container'>
        <div className='side-nav'>
          <SideNav />
        </div>
        <div>{children}</div>
      </div>
      <div className='side-nav'>
        <SideNavNew />
      </div>
    </div>
  );
};

export default DashboardLayout;
