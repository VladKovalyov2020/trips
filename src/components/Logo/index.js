import React from 'react';

// Assets

import logo from '../../assets/images/logo.png';

// Styles

import './styles.scss';

// --------------------

export const Logo = () => {
  return <img className="header-logo" src={logo} alt="logo" />;
};
