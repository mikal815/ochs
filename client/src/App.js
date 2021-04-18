import ochslogo from './assets/images/ochslogo.png'
import styled from 'styled-components'
import Menu from './components/Menu'

const Layout = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: auto;
    height: 100%;
    background-color: #e9e39c;
    position: relative;
    padding-left: 5vw;
    padding-right: 5vw;
`

function App() {
    return (
        <div className="App">
            <Layout>
                <img src={ochslogo} alt="ochs logo" height="200px" />
                <Menu />
                <div>
                    OCHS Baseball
                </div>
            </Layout>
        </div>
    );
}

export default App;