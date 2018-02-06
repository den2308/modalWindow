import React, { Component } from 'react';
import ModalWindow from "./Modal";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Push to open modal window</h1>
                </header>
                
                <ModalWindow />
            </div>
        );
    }
}