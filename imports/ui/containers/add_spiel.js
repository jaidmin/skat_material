
import {composeWithTracker} from 'react-komposer';
import {AddSpiel} from '../components/add_spiel';
import {Loading} from '../components/loading.js';
import {Meteor} from 'meteor/meteor';
import {Abende} from "../../api/abend/abend";

Meteor.subscribe("Spiele");


const composer = (params, onData) => {
  const subscription = Meteor.subscribe('Abende');
  if (subscription.ready()) {
    let test = Abende.find().fetch();
    let abend_id  = new Array(test[0]._id);
    onData(null, {abend_id});
  }
};
export default composeWithTracker(composer, Loading)(AddSpiel);
