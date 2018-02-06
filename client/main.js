import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Vehicle } from '../imports/api/Vehicle';
import { VehicleModel } from '../imports/api/VehicleModel';
import { VehicleType } from '../imports/api/VehicleType';

import App from '../imports/ui/App';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});