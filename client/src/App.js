import React from 'react'
import './App.css'
import ochslogo from './assets/images/ochs-logo.png'
import Menu from './components/Menu'
import News from './components/News'
import Logo from './components/Logo'
import Tweets from './components/Tweets'
import Carousel from './components/Carousel'

function App() {
    return (
        <div className="layout">
            <img className="ochs-logo span-row-3" src={ochslogo} alt="ochs logo" height="290px" />
            <Menu />
            <News />
            <Logo />
            <Tweets />
            <Carousel />
        </div>
    );
}

export default App;