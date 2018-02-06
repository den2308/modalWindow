import React, { Component } from 'react';
import { VehicleType } from '../api/VehicleType';
import VehicleModelList from './VehicleModelList'
import { ListGroup, ListGroupItem, Checkbox, Button } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';

class VehicleTypeList extends Component {
    renderVehicleTypeList() {
        return this
            .props
            .vehicleTypeList
            .map((vehicleTypeList) => (<VehicleTypeItem key={vehicleTypeList._id} id={vehicleTypeList._id} vehicleTypeList={vehicleTypeList} />));
    }
    render() {
        return (
            <div className="container">
                <form>
                    <h1>VehicleList</h1>
                    <ListGroup>
                        {this.renderVehicleTypeList()}
                    </ListGroup>
                    
                </form>
            </div>


        );
    }
}

class VehicleTypeItem extends Component {
    render() {
        return (
            <div className="container">
                <ListGroupItem ><Checkbox >
                    {this.props.vehicleTypeList.name} </Checkbox></ListGroupItem>
                <ListGroup>
                    <ListGroupItem><VehicleModelList key={this.props.vehicleTypeList._id} vehicletype={this.props.vehicleTypeList} /> </ListGroupItem>
                </ListGroup>
            </div>

        )
    }
}

export default VehicleTypeList = createContainer(() => {
    const vehicleTypeList = VehicleType
        .find()
        .fetch();
    return { vehicleTypeList };
}, VehicleTypeList);
