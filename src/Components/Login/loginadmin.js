import React from 'react';
import LogoUca from '../../assets/img/uca.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classnames from "classnames";
import {setAuthToken} from '../Auth/setAuthToken';
//import jwt_decode from "jwt-decode";


const defaultClient = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 10*1000,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
});

class loginAdmin extends React.Component {
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
        let jwtTokenAdmin = localStorage.getItem('jwtTokenAdmin');
        if (jwtTokenAdmin) {
          this.props.history.push("/dashAdmin");
        }else{
            localStorage.removeItem(jwtTokenAdmin);
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
        
        defaultClient.post('/admin/loginAdmin',userData)
        .then( res =>{
            console.log(res.data);
           
            // Save to localStorage
            
            // Set token to localStorage
            //const { token } = res.data;
            localStorage.setItem("jwtTokenAdmin", res.data);
            setAuthToken(res.data);
            this.props.history.push('/dashAdmin');
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


                    <div className="ui text container">
                        <center>
                            <h2 className="ui massive label">Welcome to Login Admin page </h2>
                        </center>

                    </div>
                    <div className="ui vertical stripe quote segment">
                        <div className="ui equal width stackable internally celled grid">
                            <div className="center aligned row" style={{ marginLeft: "120px", marginRight: "120px" }}>
                                <div className="column" >
                                    <div className="ui segment">
                                    <i class=" folder open huge icon"></i>
                                        <h3>Login Admin</h3>
                                        <form className="ui large form" onSubmit={this.onSubmit} style={{ marginLeft: "25px", marginRight: "25px" }}>
                                            <div className="two fields ">
                                                <div className="field ">
                                                    <label >Email</label>
                                                <input onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                placeholder="Your Email"
                                                id="email"
                                                type="email"
                                                autocomplete="off"
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
                                                
                                                <div className="field">
                                                    <label >Password</label>
                                                        
                                                    <input placeholder="Password"
                                                    onChange={this.onChange}
                                                    value={this.state.password}
                                                    error={errors.password}
                                                    autocomplete="off"
                                                    id="password"
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
                                          
                                            <button className="ui submit button" type="submit">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ marginBottom: "55px" }}>
                    <center>
                        <Link to="/" className="ui left labeled icon button">
                            <i className="left arrow icon"></i>
                            Previous page
                        </Link>
                    </center>
                </div>
            </>
        )
    }
}

export default loginAdmin;