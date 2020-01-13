import React, { Component } from 'react';
import Cover from './cover';
import Footer from './footer';
import About from './About/about';
import Formation from './Formation/formation';
import Services from './Services/service';
import './footer.css'
import './style.css';


class Home extends Component {
  
  render() {
  
    return (
      <div className="pusher" style={{ width: "100%" }}>
        <Cover />
        <About />
        <Formation />
        <Services />
        <Footer />
      </div>
    );

  }
}

export default Home;
