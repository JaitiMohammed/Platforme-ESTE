import React from "react";
import LogoUca from "../../assets/img/uca.jpg";
import { Link } from "react-router-dom";
//import classNames from 'classnames';
import axios from "axios";
import classnames from "classnames";

const defaultClient = axios.create({
    baseURL: "http://localhost:5000/api/",
    timeout: 10 * 1000,
    headers: { "Content-Type": "application/json", Accept: "application/json" }
});

class registerProf extends React.Component {
    constructor() {
        super();
        this.state = {
            fullname: "",
            email: "",
            password: "",
            password2: "",
            code: "",
            //filiere:"",
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
    let jwtTokenProf = localStorage.getItem("jwtTokenProf");
    if (jwtTokenProf) {
      this.props.history.push("/dashProf");
    } else {
      localStorage.removeItem(jwtTokenProf);
      localStorage.clear();
    }
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
            //filiere:this.state.filiere,
            //cne:this.state.cne,
            //numeroInscrit:this.state.numeroInscrit,
            password: this.state.password,
            password2: this.state.password2,
            code: this.state.code
        };
        console.log("New user : ", newUser, typeof newUser);
        console.log("errors :", this.state.errors);

        defaultClient
            .post("/professors/RegisterProf", newUser)
            .then(res => {
                console.log(res.data);
                if (res.status === 200) {
                    this.setState({
                        fullname: "",
                        email: "",
                        password: "",
                        password2: "",
                        code: "",
                        success: true,
                        //filiere:"",
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
                            <h2 className="ui massive label">
                                Welcome to Register Professeur page{" "}
                            </h2>
                        </center>
                    </div>
                    <div class="ui vertical stripe quote segment">
                        <div class="ui equal width stackable internally celled grid">
                            <div
                                class="center aligned row"
                                style={{ marginLeft: "120px", marginRight: "120px" }}
                            >
                                <div class="column">
                                    <div style={{ marginBottom: "55px" }}>
                                        <center>
                                            <Link to="/Home" class="ui left labeled icon button">
                                                <i class="left arrow icon"></i>
                                                Previous page
                      </Link>
                                            <Link
                                                to="/loginProf"
                                                class="ui right labeled icon button"
                                            >
                                                <i class="right arrow icon"></i>
                                                Login page
                      </Link>
                                        </center>
                                    </div>

                                    <div className="ui segment">
                                    <i className=" briefcase huge icon"></i>

                                        <h3>Register Enseignant</h3>

                                        {this.state.success && (
                                            <div class="ui mini green message">
                                              {this.state.success ? "Bien Enregistré " : ""}
                                            </div>
                                          )}

                                        <form
                                            class="ui large form"
                                            onSubmit={this.onSubmit}
                                            style={{ marginLeft: "25px", marginRight: "25px" }}
                                        >
                                            <div class="field ">
                                                <label>Full Name</label>
                                                <input
                                                    placeholder="full Name"
                                                    onChange={this.onChange}
                                                    value={this.state.fullname}
                                                    name="fullname"
                                                    id="fullname"
                                                    autocomplete="off"
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

                                            <div class="three fields">
                                                <div class="field">
                                                    <label>Email</label>
                                                    <input
                                                        placeholder="Email"
                                                        type="email"
                                                        onChange={this.onChange}
                                                        autocomplete="off"
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
                                                    )}
                                                </div>
                                                <div class="field">
                                                    <label>Password</label>
                                                    <input
                                                        placeholder="Password"
                                                        type="password"
                                                        onChange={this.onChange}
                                                        value={this.state.password}
                                                        id="password"
                                                        autocomplete="off"
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
                                                <div class="field">
                                                    <label>Confirm Password</label>
                                                    <input
                                                        placeholder="Password"
                                                        value={this.state.password2}
                                                        onChange={this.onChange}
                                                        autocomplete="off"
                                                        id="password2"
                                                        name="password2"
                                                        type="password"
                                                        className={classnames("", {
                                                            invalid: errors.password2
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label>Code d'accès</label>
                                                <input
                                                    placeholder="Code d'accès"
                                                    value={this.state.code}
                                                    autocomplete="off"
                                                    onChange={this.onChange}
                                                    id="code"
                                                    name="code"
                                                    type="text"
                                                    className={classnames("", {
                                                        invalid: errors.code
                                                    })}
                                                />
                                                {errors.code && (
                                                    <div class="ui mini red message">
                                                      {errors.code}
                                                    </div>
                                                  )}
                                            </div>
                                            <button class="ui submit button" type="submit">Submit</button>
                                        </form>

                                    </div>
                                    <div class="ui info message bottom attached message">
                                        <span style={{ color: "black" }}>Already signed up ?</span>
                                        <Link to="/loginprof" style={{ color: "red" }}>
                                            {" "}
                                            Login here{" "}
                                        </Link>{" "}
                                        instead.
                    <i aria-hidden="true" class="help icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default registerProf;
