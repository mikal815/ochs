import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Menu.css'

export default function Menu() {

    return (
        <div className="menu">
            <div className="menu-top">
                <Link to="/">
                    Home
        </Link>

                <Link smooth to="/#message">
                    Coach's Message
        </Link>

                <Link smooth to="/#news">
                    News
        </Link>

                <Link smooth to="/#schedule">
                    Schedule
        </Link>

                <Link smooth to="/#coaches">
                    Coaching Staff
        </Link>
            </div>

            <div className="menu-bottom">
                <Link smooth to="/#teams">
                    Teams
        </Link>

                <Link smooth to="/#photos">
                    Photos
        </Link>

                <Link smooth to="/#history">
                    Program History
        </Link>

                <Link smooth to="/#booster">
                    Booster Club
        </Link>

                <Link smooth to="/#fundraising">
                    Fundraising
        </Link>

                <Link smooth to="/#links">
                    Links
        </Link>

                <Link smooth to="/#sponsors">
                    Sponsors
        </Link>

                <Link smooth to="/#alumni">
                    Notable Alumni
        </Link>

                <Link smooth to="/#contact">
                    Contact Us
        </Link>
            </div>


        </div>

    )
}


