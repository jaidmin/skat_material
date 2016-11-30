/**
 * Created by jaidmin on 27/11/16.
 */
import { Meteor } from 'meteor/meteor';
import { Spiele } from './spiele';

Meteor.methods({

  'add_spiel': function(abend_id,optionen){
    console.log(abend_id);
    let abend_id_test = abend_id;
    let datum = new Date().toString();

    Spiele.insert({
      "datum" : datum,
      "abend" : abend_id_test,
      "optionen" : optionen
    });
  }

});

