import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';

import Home from './Pages/Home';
import Upload from './Pages/Upload';

function App() {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route path='/upload' component={Upload} />
                <Route path='/' component={Home} />
            </Switch>
        </HashRouter>
    );
}

export default App;
