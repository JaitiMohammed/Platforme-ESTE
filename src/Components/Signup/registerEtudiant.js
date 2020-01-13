import React, { Component } from "react";
import LogoUca from "../../assets/img/uca.jpg";
import { Link } from "react-router-dom";
//import Error from '../alert/errors';
//import Message from '../alert/messages';
import axios from "axios";
import classnames from "classnames";

const defaultClient = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 10 * 1000,
  headers: { "Content-Type": "application/json", Accept: "application/json" }
});

class registerEtudiant extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: "",
      password2: "",
      filiere_id:"",
      filieres:[],
      //cne:"",
      //numeroInscrit:"",
      success: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    let jwtTokenStudent = localStorage.getItem("jwtTokenStudent");
    if (jwtTokenStudent) {
      this.props.history.push("/dashStudent");
    } else {
      localStorage.removeItem(jwtTokenStudent);
      localStorage.clear();
    }
    this.loadFilieres();
  }

  loadFilieres =() => {
    axios.get('http://localhost:5000/api/filieres')
       .then(res => {
         this.setState({filieres:res.data})
         console.log(res.data)
       })
       .catch(err => {
         console.log(err)
       });
  }
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      fullname: this.state.fullname,
      email: this.state.email,
      filiere:this.state.filiere_id,
      //cne:this.state.cne,
      //numeroInscrit:this.state.numeroInscrit,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log("New user : ", newUser, typeof newUser);
    console.log("errors :", this.state.errors);

    defaultClient
      .post("/student/RegisterEtudiant", newUser)
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          this.setState({
            fullname: "",
            email: "",
            password: "",
            password2: "",
            success: true,
            filiere:"",
            //cne:"",
            //numeroInscrit:"",
            errors: {}
          });
        } else {
          this.setState({
            errors: res.data.errors
          });
        }
      })
      .catch(err => {
        //console.log(err.response);
        this.setState({
          errors: err.response.data
        });
      });
  };

  // eslint-disable-next-line
  render() {
    const { errors } = this.state;
    let options = this.state.filieres.map(data => 
      <option value={data._id} >{data.abrv}</option>
    );
    return (
      <>
        <div className="container">
          <center>
            <img src={LogoUca} alt="logo uca" style={{ width: "450px" }} />
          </center>

          <div className="ui text container">
            <center>
              <h2 className="ui massive label">
                Welcome to Register Etudiant page{" "}
              </h2>
            </center>
          </div>

          <div className="ui vertical stripe quote segment">
            <div className="ui equal width stackable internally celled grid">
              <div
                className="center aligned row"
                style={{ marginLeft: "120px", marginRight: "120px" }}
              >
                <div className="column">
                  <div className="ui segment">
                    <i className=" user huge icon"></i>
                    <h3>Register Etudiant</h3>
                    {this.state.success && (
                      <div class="ui mini green message">
                        {this.state.success ? "Bien Enregistré " : ""}
                      </div>
                    )}
                    <form
                      className="ui large form"
                      onSubmit={this.onSubmit}
                      style={{ marginLeft: "25px", marginRight: "25px" }}
                    >
                      <div className="two fields ">
                        <div className="field">
                          <label>Full Name</label>
                          <input
                            placeholder="Full Name"
                            autocomplete="off"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.fullname}
                            name="fullname"
                            id="fullname"
                            className={classnames("", {
                              invalid: errors.fullname
                            })}
                          />

                          {errors.fullname && (
                            <div class="ui mini red message">
                              {errors.fullname}
                            </div>
                          )}
                          </div>
                           <div className="field">
                            <label>Filière</label>
                            <select onChange={this.onChange} id="filiere_id" name="filiere"
                            className={classnames("", {
                              invalid: errors.filiere
                            })}>
                             <option>Choisi filieres</option>
                              {options}

                            </select>
                          </div>
                          {errors.filiere && (
                            <div class="ui mini red message">
                              {errors.filiere}
                            </div>
                          )}
                      </div>
                      <div className="three fields">
                        <div className="field">
                          <label>Email</label>
                          <input
                            placeholder="Email"
                            type="email"
                            autocomplete="off"
                            onChange={this.onChange}
                            value={this.state.email}
                            id="email"
                            className={classnames("", {
                              invalid: errors.email
                            })}
                          />
                          {errors.email && (
                            <div class="ui mini red message">
                              {errors.email}
                            </div>
                          )}{" "}
                        </div>
                        <div className="field">
                          <label>Password</label>
                          <input
                            placeholder="Password"
                            type="password"
                            onChange={this.onChange}
                            value={this.state.password}
                            autocomplete="off"
                            id="password"
                            name="password"
                            className={classnames("", {
                              invalid: errors.password
                            })}
                          />
                          {errors.password && (
                            <div class="ui mini red message">
                              {errors.password}
                            </div>
                          )}
                        </div>
                        <div className="field">
                          <label>Confirm Password</label>
                          <input
                            placeholder="Password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            id="password2"
                            autocomplete="off"
                            name="password2"
                            type="password"
                            className={classnames("", {
                              invalid: errors.password2
                            })}
                          />

                          {errors.password2 && (
                            <div class="ui mini red message">
                              {errors.password2}
                            </div>
                          )}
                        </div>
                      </div>

                      <button className="ui submit button" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                  <div class="ui info message bottom attached message">
                    <span style={{ color: "black" }}>
                      You have an Account ?
                    </span>
                    <Link to="/loginEtudiant" style={{ color: "red" }}>
                      {" "}
                      Go to Login here{" "}
                    </Link>{" "}
                    instead.
                    <i aria-hidden="true" class="help icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "55px" }}>
          <center>
            <Link to="/Home" className="ui left labeled icon button">
              <i className="left arrow icon"></i>
              Previous page
            </Link>
          </center>
        </div>
      </>
    );
  }
}

export default registerEtudiant;
