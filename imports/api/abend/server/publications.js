/**
 * Created by jaidmin on 27/11/16.
 */
import { Meteor } from 'meteor/meteor';
import { Abende } from '../abend';

Meteor.publish('Abende', () => Abende.find());

