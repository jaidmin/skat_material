import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardTitle} from 'material-ui/Card';

export const UsersTable = ({users}) => (

<Card>
  <CardTitle><h2>Spieler Übersicht</h2></CardTitle>
    <Table>
      <TableHeader>
      <TableRow>
        <TableHeaderColumn>
          <h4 className="text-center">Name</h4>
        </TableHeaderColumn>
        <TableHeaderColumn>
          <h4 className="text-center">Status</h4>
        </TableHeaderColumn>
        <TableHeaderColumn>
          <h4 className="text-center">Gewonne Spiele</h4>
        </TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody stripedRows={true}>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableRowColumn key={user.id+ "name"}><p  className="text-center"> {user.profile.name.first}</p></TableRowColumn>
          <TableRowColumn key={user.id+ "status"}> <p  className="text-center">{user.profile.status}</p></TableRowColumn>
          <TableRowColumn key={user.id+ "won_games"}> <p  className="text-center">{user.profile.gewonnene_abende}</p></TableRowColumn>
        </TableRow>
      ))}
      </TableBody>
    </Table>
</Card>
); UsersTable.propTypes = {users : React.PropTypes.array}
