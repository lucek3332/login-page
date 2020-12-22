import React, { Component } from "react";
import { render } from "react-dom";
import { Link, Redirect } from "react-router-dom";


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
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

                                <div class="form-group mb-3">
                                    <i class="fas fa-user"></i>
                                    <input type="text" class="form-control" placeholder="Login" name="username"
                                           autofocus="" autocapitalize="none"
                                           autocomplete="off" maxlength="150" required="" id="id_username" />
                                </div>

                                <div class="form-group mb-3">
                                    <i class="fas fa-key"></i>
                                    <input type="password" class="form-control" placeholder="Password" name="password"
                                           autocomplete="current-password" required="" id="id_password" />
                                </div>

                                <button type="submit" class="btn btn-success mb-4">Zaloguj</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
