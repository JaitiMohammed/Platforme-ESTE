import React, { Component } from 'react';
import './footer.css';
import Partenaire1 from '../../assets/img/province-essaouira.jpg';
import Partenaire2 from '../../assets/img/logo-cadi-ayyad.png';
import Partenaire3 from '../../assets/img/region-safi-kech.png';
import { animateScroll as scroll } from "react-scroll";

class Footer extends Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  };
  render() {
    return (
      <div className="ui inverted vertical footer segment">

        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="eight wide column">
              <h4 className="ui inverted header">About Us</h4>
              <div className="ui inverted link list">
                <a className="item" href="#root">Sitemap</a>
                <a className="item" href="#root">+212 05-22-22-22</a>
                <a className="item" href="#root">Maroc Essouira</a>
                <a className="item" href="#root">Région Marrakech-Safi</a>
              </div>
            </div>

            <div class="seven wide column">
              <h4 class="ui inverted header">Développeurs</h4>
              <p>
                Ce site à été développer par <br />
                <strong>Jaiti Mohammed /strong>
              </p>
            </div>
            <div className="wide column">
              <div className="scroll-down" style={{ marginTop: "50px" }}>
                <scroll to="/Home/#about" spy="true"
                  smooth="true"
                  offset={-70}
                  duration={500}
                  onClick={this.scrollToTop}
                  ><i class="angle double up big icon" ></i></scroll>
              </div>
            </div>
          </div>
        </div>

        <div class="ui centered grid">
          <h3>Partenaire</h3>
          <div class="six wide tablet eight wide computer column">
            <div class="ui three column grid">
              <div class="column">
                <div class="ui segment">
                  <center>
                    <img alt="img1" src={Partenaire3} style={{ height: "100px" }} />
                  </center>
                </div>
              </div>
              <div class="column">
                <div class="ui segment">
                  <center>
                    <img alt="img2" src={Partenaire2} style={{ height: "100px", width: "80px" }} />
                  </center>

                </div>
              </div>
              <div class="column">
                <div class="ui segment">

                  <center>
                    <img alt="img3" src={Partenaire1} style={{ height: "100px", width: "80px" }} />
                  </center>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Footer;