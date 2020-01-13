import React from 'react';
import logo_este from '../../../assets/img/logo_este_work.png';
import './style.css';


class About extends React.Component {

 
  render() {
    return (

      <section id="about">
        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container ">
            <h2 className="ui massive label"> About Us</h2>
            <div className="row">
              <div className="eight wide column" data-aos="fade-up" data-aos-duration="3000">

                <h3 className="ui header">Ecole Supérieure de Technologie d'Essaouira</h3>
                <p>
                  L’École Supérieure de Technologie d'Essaouira (ESTE), créée en 2005,
                    est une école marocaine d'enseignement supérieur public.
                     Elle fait partie du réseau des écoles supérieures de technologie
                   et relève de l'Université Cadi Ayyad.
              </p>
                <p>
                  L'École Supérieure de Technologie d'Essaouira (ESTE)
                   dispense en deux ans une formation universitaire et technologique.
              </p>

              </div>
              <div class="six wide right floated column" data-aos="fade-up" data-aos-duration="3000">

                <img class="ui large  rounded image" alt="img" src={logo_este} />
              </div>

            </div>
          </div>
        </div>
      </section>

    )
  }

}

export default About;