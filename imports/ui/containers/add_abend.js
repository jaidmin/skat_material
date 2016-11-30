/**
 * Created by jaidmin on 31/10/16.
 */
/**
 * Created by jaidmin on 30/10/16.
 */
import {composeWithTracker} from 'react-komposer';
import {AddAbend} from '../components/add_abend';
import {Loading} from '../components/loading.js';
import {Meteor} from 'meteor/meteor';

Meteor.subscribe("Abende");


const composer = (params, onData) => {
  const subscription = Meteor.subscribe('userData');
  if (subscription.ready()) {
    var users = Meteor.users.find().fetch();
    console.log(users);
    onData(null, {users});
  }
};
export default composeWithTracker(composer, Loading)(AddAbend);
