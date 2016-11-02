/**
 * Created by jaidmin on 30/10/16.
 */
import {composeWithTracker} from 'react-komposer';
import {UsersTable} from '../components/user_table.js';
import {Loading} from '../components/loading.js';
import {Meteor} from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('userData');
  if (subscription.ready()) {
    var users = Meteor.users.find().fetch();
    console.log(users);
    onData(null, {users});
  }
};
export default composeWithTracker(composer, Loading)(UsersTable);
