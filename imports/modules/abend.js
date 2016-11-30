/**
 * Created by jaidmin on 03/11/16.
 */
import { Abende } from '../api/abend/abend';
import "../api/abend/methods"

export const handleAbend = (spieler_1,spieler_2 , spieler_3, optionen) => {


  Meteor.call("add_abend",spieler_1,spieler_2 , spieler_3, optionen)


};
