import { Meteor } from 'meteor/meteor';

Meteor.publish("userData",  () => Meteor.users.find({ }
    )
  );
