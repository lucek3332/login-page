import React, { Component } from "react";
import { render } from "react-dom";
import { Link, Redirect } from "react-router-dom";
import CsrfToken from "./CsrfToken";


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            success_msg: ""
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginButtonPressed = this.handleLoginButtonPressed.bind(this);
        this.getLoginStatus = this.getLoginStatus.bind(this);

        this.getLoginStatus();

    }

    getLoginStatus() {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };

        fetch("/api/login-status/", requestOptions)
            .then((response) => {
                if (response.ok) {
                    this.setState({
                        isLoggedIn: true,
                        });
                    return response.json();
                } else {
                    this.setState({
                        isLoggedIn: false,
                    });
                }
            })
            .then((data) => {
                this.setState({
                    username: data.username,
                });
            });

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

    handleLoginButtonPressed(e) {

        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        };

        fetch("/api/login/", requestOptions)
          .then((response) => {
            if (response.ok) {
                this.setState({
                    password: "",
                    isLoggedIn: true,
                    success_msg: "Logowanie pomyślne",
                    });
            } else {
                this.setState({
                    password: "",
                    error: "Logowanie nieudane",
                });
            }
          });

    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (!isLoggedIn) {
            return (
                <div class="modal-dialog text-center">
                    <div class="col-sm-9 mx-auto main-section">
                        <div class="modal-content">
                            <div class="col-12 user-img">
                                <img src="../static/img/user.png" />
                            </div>

                            <div class="col-10 mx-auto form-input">
                                <form action="." method="post" onSubmit={this.handleLoginButtonPressed}>

                                    <CsrfToken />

                                    {this.state.error ? (
                                        <div class="alert alert-warning p-1" role="alert">
                                            {this.state.error}
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}

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
                                    >
                                        Zaloguj
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div class="modal-dialog text-center">
                    <div class="col-sm-9 mx-auto main-section">
                        <div class="modal-content">
                            <div class="col-8 mx-auto">
                                {this.state.success_msg ? (
                                    <div class="alert alert-success p-1 mt-4 mb-1" role="alert">
                                        {this.state.success_msg}
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>

                            <div class="col-10 mx-auto user-login">
                                <h1>Cześć {this.username}!</h1>
                                <button class="btn btn-success mb-4">Wyloguj</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
