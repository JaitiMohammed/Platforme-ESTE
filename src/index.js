import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
//import 'semantic-ui-css';
//import jwt_decode from "jwt-decode";

class App extends Component {

    render() {
        return (
            <div>
                    <Router>
                        <Routes/>
                    </Router>
            </div>
                    
            
            
        );

    }
}


ReactDOM.render(<App/>, document.getElementById('root'));