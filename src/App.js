import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Upload from './Pages/Upload';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/upload' component={Upload} />
                <Route path='/' component={Home} />
            </Switch>
        </HashRouter>
    );
}

export default App;
