import React from "react";
import ReactDOM from "react-dom";
import './Toolbar.css';
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>
                <SideDrawerToggleButton />
            </div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items"><ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;