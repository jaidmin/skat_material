/**
 * Created by jaidmin on 30/10/16.
 */


import React from 'react';
import { Link } from 'react-router';
//import { handleSignup } from '../../modules/signup';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import Formsy from 'formsy-react';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
  FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';
import {Row, Col} from 'react-bootstrap';
import MenuItem from 'material-ui/MenuItem';

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
}


export class AddAbend extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let spieler_1 = data.spieler_1;
    let spieler_2 = data.spieler_2;
    let spieler_3 = data.spieler_3;


    handleAbend(spieler_1,spieler_2,spieler_3);

  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (<Row>
        <Col xs={12} md={8} mdOffset={2}>
          <Card style={styles.cardStyles} >
            <CardTitle title="Neuer Abend" />
            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <Row>
                <Col xs={12} md={4}>
              <FormsySelect
                name="spieler_1"
                required
                floatingLabelText="Spieler 1"
                menuItems={this.selectFieldItems}
              >

                {this.props.users.map( (user) =>
                  <MenuItem value={user._id} primaryText={user.profile.name.first} />
                )}

              </FormsySelect>
              <FormsySelect
                name="spieler_2"
                required
                floatingLabelText="Spieler 2"
                menuItems={this.selectFieldItems}
              >

                {this.props.users.map( (user) =>
                  <MenuItem value={user._id} primaryText={user.profile.name.first} />
                )}

              </FormsySelect>
              <FormsySelect
                name="spieler_3"
                required
                floatingLabelText="Spieler 3"
                menuItems={this.selectFieldItems}
              >

                {this.props.users.map( (user) =>
                  <MenuItem value={user._id} primaryText={user.profile.name.first} />
                )}

              </FormsySelect>
              </Col>
                <Col xs={12} md={4}>

                <FormsyToggle
              name="schneider-mit-30"
              label="Schneider mit 30"

              />
                  <FormsyToggle
                    name="k-r-e"
                    label="Kontra und Re erlauben"

                  />

                <CardTitle subtitle="Bock-Ramsch"/>
                  <FormsyToggle
                    name="b-r-s-v"
                    label="Bei Schneider verloren"
                    className="text-left"
                    />
                  <FormsyToggle
                    name="b-r-s-g"
                    label="Bei Schneider gewonnen"

                  />
                  <FormsyToggle
                    name="b-r-k-g"
                    label="Bei Kontra gewonnen"

                  />
                  <FormsyToggle
                    name="b-r-k-v"
                    label="Bei Kontra verloren"

                  />
                  <FormsyToggle
                    name="b-r-s-a"
                    label="Bei Spaltarsch"

                  />
              </Col>
                <Col xs={12} md={4}>0
                  <FormsyToggle
                    name="k-"
                    label="Kontra nur nach Reizen"

                  />
                  </Col>
              </Row>
                <CardActions style={styles.cardActionStyles}>
                <RaisedButton type="submit" secondary={true} label="Hinzufügen" disabled={!this.state.canSubmit} />
              </CardActions>

            </Formsy.Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

AddAbend.propTypes = {users : React.PropTypes.array};


