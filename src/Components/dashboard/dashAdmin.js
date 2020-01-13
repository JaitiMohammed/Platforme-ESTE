import React from "react";
import { logoutAdmin } from "../Auth/authAdmin/logoutAdmin";
import { Link } from "react-router-dom";
class dashAdmin extends React.Component {
  onLogoutClick = () => {
    //e.preventDefault();
    logoutAdmin();
  };

  render() {
    return (
      <>
        <div className="ui inverted segment">
          <div className="ui inverted secondary menu">
            <div className="toc item">
              <i className="sidebar icon"></i>
            </div>
            <div class="header item">Dashboard Admin</div>
            <div className="right item">
              <Link
                onClick={this.onLogoutClick}
                className="ui inverted primary button"
              >
                Log out
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "180px",
            marginLeft: "25px",
            marginRight: "25px"
          }}
        >
          <div className="ui two column grid">
            <div className="column">
              <div className="ui segment">
                <center>
                  <h2>Gérer filières</h2>
                  <Link
                    to="/dashAdmin/Filieres"
                    className="ui secondary button"
                  >
                    Gérer
                  </Link>
                </center>
              </div>
            </div>
            <div className="column">
              <div className="ui segment">
                <center>
                  <h2>Gérer Enseignants</h2>
                  <Link
                    to="/dashAdmin/Professors"
                    className="ui secondary button"
                  >
                    Gérer
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
export default dashAdmin;
