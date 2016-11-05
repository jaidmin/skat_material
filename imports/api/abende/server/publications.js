/**
 * Created by jaidmin on 04/11/16.
 */
import { Meteor } from 'meteor/meteor';
import { Abende } from '../abende';

Meteor.publish('abende', () => Abende.find());
