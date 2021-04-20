import React from 'react'
import './App.css'
import ochslogo from './assets/images/ochslogo.png'
import Menu from './components/Menu'
import News from './components/News'
import Logo from './components/Logo'
import Tweets from './components/Tweets'
import Carousel from './components/Carousel'

function App() {
    return (
        <div className="layout">
            <img className="span-row-3" src={ochslogo} alt="ochs logo" height="125px" />
            <Menu className="span-row-3" />
            <News />
            <Logo />
            <Tweets />
            <Carousel />
        </div>
    );
}

export default App;