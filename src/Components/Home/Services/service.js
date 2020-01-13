import React from 'react';
import {Link} from 'react-router-dom';





// eslint-disable-next-line
const serivce = () => {

    return (


        <section id="services" style={{ marginBottom: "180px" }}>
            <div className="ui text container">
                <center>
                    <h2 className="ui massive label">Services</h2>
                    <h3 style={{color:'darkblue'}}>Compte utilisateur ESTE</h3>
                </center>

            </div>
            <div className="ui vertical stripe quote segment">
                <div className="ui equal width stackable internally celled grid">
                    <div className="center aligned row">
                        <div className="column" data-aos="flip-left"
                        data-aos-offset="400"
                        data-aos-duration="400">
                            <div className="ui segment">
                                <i className=" briefcase huge icon"></i>
                                <h3>Espace Enseignant</h3>
                                <Link to="/loginProf">Login</Link>
                            </div>

                        </div>
                        <div class="column" data-aos="flip-left"
                        data-aos-offset="400"
                        data-aos-duration="400">
                            <div className="ui segment">
                                <i class=" user huge icon"></i>
                                <h3>Espace Etudiant</h3>
                                <Link to="/loginEtudiant">Login</Link>
                            </div>

                        </div>
                        <div className="column" data-aos="flip-left"
                        data-aos-offset="400"
                        data-aos-duration="400">
                            <div className="ui segment">
                                <i class=" folder open huge icon"></i>
                                <h3>Espace Scolarité</h3>
                                <Link to="/loginAdmin">Login</Link>
                            </div>

                        </div>
                        <div className="column" data-aos="flip-left"
                        data-aos-offset="400"
                        data-aos-duration="400">
                            <div className="ui segment">
                                <i class=" lock huge icon"></i>
                                <h3>Tableau des services</h3>
                                <Link to="/loginService">Login</Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default serivce;