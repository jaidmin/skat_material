import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import {Row, Col} from 'react-bootstrap';


const styles = {

  cardStyles: {
    "width": "100%",
    "margin": "auto",
    "marginTop": "40px",
    "padding": "20px",
    textAlign: "center",
  },
  textField: {
    display: "block",
    width: "70%",
    margin: "auto",
    background: "#ffffff",
    backgroundColor: "#ffffff",
    marginBottom: "20px",
  },
  cardActionStyles: {
    margin: "auto"
  }
};


export const UsersTable = ({users}) => (
  <Row>
    <Col xs={12} md={8} mdOffset={2}>
<Card style={styles.cardStyles}>

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
      </Col>
    </Row>
); UsersTable.propTypes = {users : React.PropTypes.array}
