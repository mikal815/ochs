import './App.css'
import ochslogo from './assets/images/ochslogo.png'
import Menu from './components/Menu'

function App() {
    return (
        <div className="layout">
            <img className="span-row-3" src={ochslogo} alt="ochs logo" height="125px" />
            <Menu className="span-row-3" />
        </div>
    );
}

export default App;