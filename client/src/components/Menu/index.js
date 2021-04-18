import React from 'react';
import { slide as Menu } from "react-burger-menu";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import MediaQuery from 'react-responsive';

export default class TheMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }



    render() {
        return (
            <MediaQuery minDeviceWidth={500} >
                <Menu
                    right
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <Link onClick={() => this.closeMenu()} to="/">
                        Home
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        News
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Schedule
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Coaching Staff
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Teams
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Photos
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Program History
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Booster Club
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Fundraising
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Links
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Sponsors
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Notable Alumni
                </Link>

                    <Link onClick={() => this.closeMenu()} to="/">
                        Contact Us
                </Link>
                    {/* 
                    <Link onClick={() => this.closeMenu()} smooth to="/details/#portfolio">
                        Link
                </Link>

                    <Link onClick={() => this.closeMenu()} smooth to="/details/#services">
                        Link
                </Link>

                    <Link onClick={() => this.closeMenu()} smooth to="/details/#about">
                        Link
                </Link>

                    <Link onClick={() => this.closeMenu()} smooth to="/details/#hire">
                        Link
                </Link> */}
                </Menu>
            </MediaQuery>
        )
    }
}

