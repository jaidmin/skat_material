/**
 * Created by jaidmin on 27/11/16.
 */
/**
 * Created by jaidmin on 03/11/16.
 */
import { Spiele } from '../api/spiele/spiele';
Meteor.subscribe("Spiele");
import "../api/spiele/methods"

export const handleSpiel = (abend_id,optionen) => {

  Meteor.call("add_spiel", abend_id, optionen)





};
