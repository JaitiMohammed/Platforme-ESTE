import React from 'react';
import NavDash from './NavDash';
import { logoutUser } from '../Auth/authStudent/logoutUser';
import { Link } from 'react-router-dom';
class dashstudent extends React.Component {


  onLogoutClick = () => {
    //e.preventDefault();
    logoutUser();

  };

  render() {

    return (
      <>
      <NavDash title={'Student'} link={this.onLogoutClick} editProfile={'/dashStudent/edit_profile_s'} />

      <center>
        <div className="ui message" style={{marginTop:"80px",marginRight:"25px",marginLeft:"25px"}}>
          <div className="header">
           Welecome {this.props.jwtTokenStudent} Please Edit your profile ! obligatory
            </div>
          <p>Pour reçevoir les details de votre service il faut remplissez les informations de votre profile scolaire .</p>
        </div>
    </center>
        <div style={{ marginTop: "180px", marginLeft: "25px", marginRight: "25px" }}>
          <div className="ui three column grid">
            <div className="column">
              <div className="ui segment">
                <center>
                  <h2>Notes & Résultats</h2>
                  <Link to="/dashStudent/showNotes" className="ui secondary button">
                    Details
                  </Link>
                </center>
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <center>
                  <h2>Emploi du temps</h2>
                  <Link to="/dashStudent/showEmploi" className="ui secondary button">
                    Details
                  </Link>
                </center>
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <center>
                  <h2>Nombres d'absence</h2>
                  <Link to="/dashStudent/showAbsence" className="ui secondary button">
                    Details
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


export default dashstudent;