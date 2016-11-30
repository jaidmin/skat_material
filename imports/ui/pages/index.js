import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import 'flexboxgrid';
import UsersTable from '../containers/user_table';
import AddAbend from '../containers/add_abend';
import AddSpiel from '../containers/add_spiel';
styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
}

export const Index = () => (
  	<div>

      <UsersTable/>
      <AddAbend/>
      <AddSpiel/>
  	</div>
);


