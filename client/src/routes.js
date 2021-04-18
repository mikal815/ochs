import React from 'react';
import { Switch, Route } from 'react-router';
// import Details from './components/Details';
import App from './App';
// import Menu from './components/Menu';
// import TabletDetails from './components/TabletDetails';

function Routes() {

    return (
        <Switch>
            {/* <Route path="/menu" component={Menu} /> */}
            {/* <Route path="/tablet/details" component={TabletDetails} /> */}
            {/* <Route path="/details" component={Details} /> */}
            <Route path="/" component={App} />
        </Switch>
    )
}

export default Routes;