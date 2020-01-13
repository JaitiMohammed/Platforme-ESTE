import React from 'react';
import NavDash from './NavDash';
import { logoutProf} from '../Auth/authProfessor/logoutProf';
import { Link } from 'react-router-dom';
class dashprof extends React.Component {


  onLogoutClick = () => {
    //e.preventDefault();
    logoutProf();

  };

  render() {

    return (
      <>
      <NavDash title={'Professor'} editProfile={'dashProf/edit_profile_pr'} link={this.onLogoutClick} />

        <div style={{ marginTop: "180px", marginLeft: "25px", marginRight: "25px" }}>
          <div className="ui two column grid">
            <div className="column">
              <div className="ui segment">
                <center>
                  <h2>Ajouter Notes du matière</h2>
                  <Link to="/dashProf/addNotes" className="ui secondary button">
                    Add
                  </Link>
                </center>
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <center>
                  <h2>Ajouter Absence</h2>
                  <Link to="/dashProf/addAbsences" className="ui secondary button">
                    Add
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default dashprof;