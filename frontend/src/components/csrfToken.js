import React, { Component } from "react";
import Cookies from 'js-cookie';


var csrfTokenValue = Cookies.get('csrftoken');

export default class CsrfToken extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="hidden" name="csrfmiddlewaretoken" value={csrfTokenValue} />
        );
    }
}
