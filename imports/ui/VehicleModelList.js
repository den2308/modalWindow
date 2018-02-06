import React, { Component } from 'react';
import { VehicleModel } from '../api/VehicleModel';
import VehicleList from './VehicleList'
import { ListGroup, ListGroupItem, Checkbox } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

class VehicleModelList extends Component {
    renderVehicleModel() {
        let vehicletypeID = this.props.vehicletype;
        let vehicleModelList = this.props.vehicleModelList;
        return this
            .props
            .vehicleModelList
            .map((vehicleModelList) => (<VehicleModelItem key={vehicleModelList._id} id={vehicleModelList._id} vehicleModelList={vehicleModelList} vehicletype={this.props.vehicletype} />));

    }
    render() {
        return (
            <div className="container">
                {this.renderVehicleModel()}
            </div>
        );
    }
}

class VehicleModelItem extends Component {
    renderVehicleModelItem() {
        if (this.props.vehicleModelList.vehicleType.id == this.props.vehicletype.id) {
            return <div> <ListGroupItem><Checkbox >{this.props.vehicleModelList.name}  </Checkbox></ListGroupItem>
                <ListGroup>
                    <VehicleList key={this.props.vehicleModelList._id} vehiclemodel={this.props.vehicleModelList} />
                </ListGroup>
            </div>
        } else {
            return ""
        }

    }
    render() {
        return (
            <div className="wall">
                {this.renderVehicleModelItem()}
            </div>

        )
    }
}

export default VehicleModelList = createContainer(() => {
    const vehicleModelList = VehicleModel
        .find()
        .fetch();
    return { vehicleModelList };
}, VehicleModelList);