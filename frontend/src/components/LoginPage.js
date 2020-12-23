import React, { Component } from "react";
import { render } from "react-dom";
import { Link, Redirect } from "react-router-dom";
import CsrfToken from "./csrfToken";


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginButtonPressed = this.handleLoginButtonPressed.bind(this);

    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value,
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLoginButtonPressed() {
        console.log(this.state);
    }

    render() {
        return (
            <div class="modal-dialog text-center">
                <div class="col-sm-9 mx-auto main-section">
                    <div class="modal-content">
                        <div class="col-12 user-img">
                            <img src="../static/img/user.png" />
                        </div>

                        <div class="col-10 mx-auto form-input">
                            <form action="." method="post">

                                <CsrfToken />

                                <div class="form-group mb-3">
                                    <i class="fas fa-user"></i>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="id_username"
                                        name="username"
                                        required=""
                                        placeholder="Login"
                                        autocomplete="off"
                                        autofocus=""
                                        autocapitalize="none"
                                        maxlength="150"
                                        onChange={this.handleUsernameChange}
                                    />
                                </div>

                                <div class="form-group mb-3">
                                    <i class="fas fa-key"></i>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="id_password"
                                        name="password"
                                        required=""
                                        placeholder="Password"
                                        autocomplete="current-password"
                                        onChange={this.handlePasswordChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-success mb-4"
                                    onClick={this.handleLoginButtonPressed}
                                >
                                    Zaloguj
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
