import React, { Component } from 'react';
import { Vehicle } from '../api/Vehicle';
import { createContainer } from 'meteor/react-meteor-data';
import { ListGroup, ListGroupItem, Checkbox } from 'react-bootstrap';
import VehicleModelList from './VehicleModelList';
import VehicleTypeList from './VehicleTypeList';

class VehicleList extends Component {
    renderVehicltList() {
        let vehiclemodel = this.props.vehiclemodel;
        return this
            .props
            .vehilcelist
            .map(
            function (vehilcelist) {
                return <VehicleItem key={vehilcelist._id} id={vehilcelist._id} vehilcelist={vehilcelist} vehiclemodel={vehiclemodel} />
            }
            );
    }
    render() {
        return (
            <div className="container">
                <ListGroup>
                    {this.renderVehicltList()}
                </ListGroup>
            </div>


        );
    }
}

class VehicleItem extends Component {
    renderVehicleItem() {
        if (this.props.vehilcelist.vehicleModel.id == this.props.vehiclemodel.id) {
            return <ListGroupItem><Checkbox >{this.props.vehilcelist.name}</Checkbox></ListGroupItem>
        }
    }
    render() {
        return (
            <div className="wall">
                {this.renderVehicleItem()}
            </div>

        )
    }
}

export default VehicleList = createContainer(() => {
    const vehilcelist = Vehicle
        .find()
        .fetch();
    return { vehilcelist };
}, VehicleList);

