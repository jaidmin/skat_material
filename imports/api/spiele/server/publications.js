import { Meteor } from 'meteor/meteor';
import {Spiele} from '../spiele';

Meteor.publish('Spiele', () => Spiele.find());
