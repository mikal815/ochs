import React from 'react'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import './Menu.css'
// import raider from '../../assets/images/raider.png'

export default function Menu() {

    return (
        <div className="menu span-row-3">
            <div className="span-row-3 menu-top">
                <Link className="link" to="/">
                    Home
                </Link>

                <Link className="link" smooth to="/#message">
                    Coach's Message
                </Link>

                <Link className="link" smooth to="/#news">
                    News
                </Link>

                <Link className="link" smooth to="/#schedule">
                    Schedule
                </Link>
            </div>
            <div className="span-row-3 menu-mid">
                <Link className="link" smooth to="/#coaches">
                    Coaching Staff
                </Link>

                <Link className="link" smooth to="/#teams">
                    Teams
                </Link>

                <Link className="link" smooth to="/#photos">
                    Photos
                </Link>
                <Link className="link" smooth to="/#history">
                    Program History
                </Link>

                <Link className="link" smooth to="/#booster">
                    Booster Club
                </Link>
            </div>
            <div className="span-row-3 menu-bottom">
                <Link className="link" smooth to="/#fundraising">
                    Fundraising
                </Link>

                <Link className="link" smooth to="/#links">
                    Links
                </Link>

                <Link className="link" smooth to="/#sponsors">
                    Sponsors
                </Link>

                <Link className="link" smooth to="/#alumni">
                    Notable Alumni
                </Link>

                <Link className="link" smooth to="/#contact">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}


