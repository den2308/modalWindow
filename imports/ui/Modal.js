import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import VehicleTypeList from './VehicleTypeList'

export default class ModalWindow extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    }
    submitForm(){
        console.log("work")
    }
    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                >
                    Launch contained modal
            </Button>

                <Modal
                    show={this.state.show}
                    backdrop={false}
                    animation={false}
                >
                    <Modal.Body>
                        <VehicleTypeList />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" onClick={this.submitForm}>Submit</Button>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}