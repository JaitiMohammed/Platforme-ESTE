import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



class Navbar extends React.Component {
    render() {

        
        return (

            <div className="ui container" >
                <div className="ui large secondary inverted pointing menu" style={{border:'none'}}>
                    <Link to="/Home" className=" active item">Home</Link>
                    <HashLink to="/Home#about"  className="item"> About </HashLink>
                    <HashLink to="/Home#training" className="item">Trainings</HashLink>
                    <HashLink to="Home#services" className="item">Services</HashLink>
                    <div className="right item">
                        <Link to="/loginServices" className="ui inverted button" >Log in</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar;