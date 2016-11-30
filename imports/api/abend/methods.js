/**
 * Created by jaidmin on 27/11/16.
 */
import { Meteor } from 'meteor/meteor';
import { Abende } from './abend';

Meteor.methods({

  'add_abend': function(spieler_1,spieler_2,spieler_3,optionen){

    let datum = new Date().toString();

    Abende.insert({
      "datum" : datum,
      "spieler_1": spieler_1,
      "spieler_2": spieler_2,
      "spieler_3": spieler_3,
      "optionen": optionen
    });
  }

});

