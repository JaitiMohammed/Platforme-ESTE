import React from 'react';
import LogoUca from '../../assets/img/uca.jpg';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                
                    <center>
                        <img src={LogoUca} alt="logo uca" style={{ width: "450px" }} />
                    </center>


                    <div class="ui text container">
                        <center>
                            <h2 className="ui massive label">Welcome to Register page </h2>
                        </center>

                    </div>
                    <div class="ui vertical stripe quote segment">
                        <div class="ui equal width stackable internally celled grid">
                            <div class="center aligned row">
                                <div class="column" >
                                    <div className="ui segment">
                                        <i class=" briefcase huge icon"></i>
                                        <h3>Espace Enseignant</h3>
                                        <Link to="/registerProf">Register</Link>
                                    </div>

                                </div>
                                <div class="column">
                                    <div className="ui segment">
                                        <i class=" user huge icon"></i>
                                        <h3>Espace Etudiant</h3>
                                        <Link to="/registerEtudiant">Register</Link>
                                    </div>

                                </div>
                                <div class="column">
                                    <div className="ui segment">
                                        <i class=" lock huge icon"></i>
                                        <h3>Tableau des services</h3>
                                        <Link to="/registerService">Register</Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{marginBottom:"55px"}}>
                        <center>
                            <Link to="/Home" class="ui left labeled icon button">
                                <i class="left arrow icon"></i>
                                Previous page
                        </Link>
                        </center>
                    </div>
            </>
        )
    }
}

export default Register;