import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import Routes from '../routes';

const App = () => {
    return (
        <div>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </div>
    );
};

export default hot(App);
