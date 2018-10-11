import React, { Component } from 'react';
import Header from "../../components/header";
import About from "../../components/about";



class Home extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
    };


    render() {
        return (
            <div>
                <Header />
                <About />
            </div>
        )
    }
}

export default Home
