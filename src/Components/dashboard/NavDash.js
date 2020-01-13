import React from 'react';
import {Link} from 'react-router-dom';

class NavDash extends React.Component {

    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui inverted secondary menu">
                    <div className="toc item"><i className="sidebar icon"></i></div>
                    <div class="header item">
                        Dashboard {this.props.title}
                    </div>
                    <div className="right item">
                        <Link to={this.props.editProfile} className="ui inverted primary button" >Profile</Link>
                        <Link onClick={this.props.link} className="ui inverted primary button" >Log out</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavDash ;