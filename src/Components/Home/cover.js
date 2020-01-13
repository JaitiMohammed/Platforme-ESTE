import React, { Component } from "react";
import "./style.css";
import Logo from "../../assets/img/logo-este.png"; //TODO: check how to serve static files in reactjs
import { Link as To } from "react-router-dom";
import Navbar from "../layouts/navbar";
import { animateScroll as scroll } from "react-scroll";

class Cover extends Component {

    scrollToBottom = () => {
        scroll.scrollTo(700)
    };
    render() {
        return (
            <div className="ui inverted vertical masthead center aligned segment" style={{ height: "100vh" }}>
                <div class="ui container">
                    <Navbar />
                    <div className="ui text container">
                        <div className="logo">
                            <img src={Logo} alt="img-logo" />
                        </div>


                        <h2>The Essaouira School of Technology (ESTE) Since 2005, we have been keeping pace with the
          development of Everything for a professional generation..!</h2>
                        <To to="/register" className="ui huge button">
                            Get Started <i class="right arrow icon"></i>
                        </To>

                    </div>
                </div>
                <div className="scroll-down" style={{ marginTop: "50px" }}>
                    <scroll to="/Home/#about" spy="true"
                        smooth="true"
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToBottom}><i class="angle double down big icon" ></i></scroll>
                </div>

            </div>
        );
    }
}

export default Cover;
