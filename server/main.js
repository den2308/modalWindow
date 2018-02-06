import { Meteor } from 'meteor/meteor';
import '../imports/api/Vehicle.js';
import '../imports/api/VehicleModel.js';
import '../imports/api/VehicleType.js';
import { Vehicle } from "../imports/api/Vehicle";
import { VehicleModel } from "../imports/api/VehicleModel";
import { VehicleType } from "../imports/api/VehicleType";

Meteor.startup(function () {
    let vehicleDoc = JSON.parse(Assets.getText("data/Vehicle.json"));
    let model = JSON.parse(Assets.getText('data/VehicleModel.json'));
    let type = JSON.parse(Assets.getText('data/VehicleType.json'));

    let vehicleCount = Vehicle.find().count();
    let vehicleModelCount = VehicleModel.find().count();
    let vehicleTypeCount = VehicleType.find().count();

    if (vehicleCount == 0) {
        for (let i = 0; i < vehicleDoc.length; i++) {
            Vehicle.insert(vehicleDoc[i]);
        }
    }
    if (vehicleModelCount == 0) {
        for (let i = 0; i < model.length; i++) {
            VehicleModel.insert(model[i]);
        }
    }
    if (vehicleTypeCount == 0) {
        for (let i = 0; i < type.length; i++) {
            VehicleType.insert(type[i]);
        }
    }

    //console.log(vehicleDoc);
});
