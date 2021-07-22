import React from 'react'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'
import './Menu.css'
// import raider from '../../assets/images/raider.png'

export default function Menu() {

    return (
        <div className="menu span-row-3">
            <div className="span-row-3 menu-top">
                <a className="link" target="_blank" rel="noreferrer" href="https://www.capeatlanticleague.org/g5-bin/client.cgi?cwellOnly=1&G5statusflag=view&schoolname=&school_id=15&G5button=13&G5genie=344&vw_schoolyear=1&vw_agl=15-1-17,&manual_access=1">
                    Varsity Schedule
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.capeatlanticleague.org/g5-bin/client.cgi?cwellOnly=1&G5statusflag=view&schoolname=&school_id=15&G5button=13&G5genie=344&vw_schoolyear=1&vw_agl=15-1-16,&manual_access=1">
                    JV Schedule
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.capeatlanticleague.org/g5-bin/client.cgi?cwellOnly=1&G5statusflag=view&schoolname=&school_id=15&G5button=13&G5genie=344&vw_schoolyear=1&vw_agl=15-1-87,&manual_access=1">
                    Freshman Schedule
                </a>
            </div>
            <div className="span-row-3 menu-mid">
                <Link className="link" smooth to="/#coaches">
                    Coaching Staff
                </Link>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.capeatlanticleague.org/g5-bin/client.cgi?G5genie=344">
                    Cape Atlantic League
                </a>
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


