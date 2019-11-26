import React from 'react';

import './SideDrawerButton.css';

const SideDrawerToggleButton = props => (
    <button className="hamburger-button">
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

export default SideDrawerToggleButton;