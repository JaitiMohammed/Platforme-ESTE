import React from 'react';
import LogoUca from '../../assets/img/uca.jpg';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import axios from 'axios';
import {setAuthToken} from '../Auth/setAuthToken';
//import jwt_decode from "jwt-decode";


const defaultClient = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 10*1000,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
});
class loginProf extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
            sucess:false
          };
    }

   
    
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        let jwtTokenProf = localStorage.getItem("jwtTokenProf");
        if (jwtTokenProf) {
          this.props.history.push("/dashProf");
        } else {
          localStorage.removeItem(jwtTokenProf);
          localStorage.clear();
        }
      }
      
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    
    onSubmit = e => {
        e.preventDefault();
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        
        defaultClient.post('/professors/loginProf',userData)
        .then( res =>{
            console.log(res.data);
           
            // Save to localStorage
            
            // Set token to localStorage
            //const { token } = res.data;
            localStorage.setItem("jwtTokenProf", res.data);
            setAuthToken(res.data);
            this.props.history.push('/dashProf');
            // Set token to Auth header
            //setAuthToken(token);
            // Decode token to get user data
            //const decoded = jwt_decode(token);
            // Set current user
            //dispatch(setCurrentUser(decoded));
             
          }).catch(err => {
              this.setState({
                  errors:err.response.data
              })
          })
          
        
    }
      render() {
        const { errors } = this.state;
        return (
            <>
                <div className="container">
                    <center>
                        <img src={LogoUca} alt="logo uca" style={{ width: "450px" }} />
                    </center>


                    <div class="ui text container">
                        <center>
                            <h2 className="ui massive label">Welcome to Login Professor page </h2>
                        </center>

                    </div>
                    <div class="ui vertical stripe quote segment">
                        <div class="ui equal width stackable internally celled grid">
                            <div class="center aligned row" style={{ marginLeft: "120px", marginRight: "120px" }}>
                                <div class="column" >
                                    <div className="ui segment">
                                    <i className=" briefcase huge icon"></i>
                                        <h3>Login Professor</h3>
                                        <form class="ui large form" onSubmit={this.onSubmit} style={{ marginLeft: "25px", marginRight: "25px" }}>
                                            <div class="two fields ">
                                                <div class="field ">
                                                    <label >Email</label>
                                                <input placeholder="Your Email here" onChange={this.onChange}
                                                value={this.state.email}
                                                autocomplete="off"
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                                className={classnames("", {
                                                    invalid: errors.email || errors.emailnotfound
                                                })}
                                                      />
                                                      {errors.email &&  (
                                                        <div class="ui mini red message">
                                                        {errors.email}
                                                        </div>
                                                      )}
                                                      {errors.emailnotfound &&  (
                                                        <div class="ui mini red message">
                                                        {errors.emailnotfound}
                                                        </div>
                                                      )}
                                                </div>
                                                
                                                <div class="field">
                                                    <label >Password</label>
                                                        
                                                    <input placeholder="Password"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    id="password"
                                                    autocomplete="off"
                                                    type="password"
                                                    className={classnames("", {
                                                        invalid: errors.password || errors.passwordincorrect
                                                    })}
                                                    />
                                                    
                                                      {errors.password && (
                                                        <div class="ui mini red message">
                                                          {errors.password}
                                                         
                                                        </div>
                                                      )}
                                                      {errors.passwordincorrect && (
                                                        <div class="ui mini red message">
                                                          {errors.passwordincorrect}
                                                        </div>
                                                      )}
                                                </div>
                                            </div>
                                          
                                            <button class="ui submit button" type="submit">Login</button>
                                        </form>
                                    </div>
                                    <div class="ui info message bottom attached message">
                                        <span style={{color:'black'}}>You have an Account ?
                                        </span>
                                    <Link to="/registerprof" style={{color:'red'}}> Go to Register here </Link> instead.
                                    <i aria-hidden="true" class="help icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ marginBottom: "55px" }}>
                    <center>
                        <Link to="/" class="ui left labeled icon button">
                            <i class="left arrow icon"></i>
                            Previous page
                        </Link>
                    </center>
                </div>
            </>
        )
    }
}

export default loginProf;