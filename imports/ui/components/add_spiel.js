/**
 * Created by jaidmin on 27/11/16.
 */
/**
 * Created by jaidmin on 30/10/16.
 */


import React from 'react';
import { Link } from 'react-router';
import { handleSpiel } from '../../modules/spiel';
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
};


export class AddSpiel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let abend_id = this.props.abend_id[0];
    console.log(abend_id);
    let optionen = {
      "buben" : data.buben,
    "farbe" : data.farbe,
     "null_" : data.null_,
     "schneider" : data.schneider,
     "schwarz" : data.schwarz,
     "ouvert" : data.ouvert,
     "angesagt" : data.angesagt


  };
    handleSpiel(abend_id,optionen);
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
            <CardTitle title="Neues Spiel" />
            <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <Row>


                <Col xs={12} md={12}>

                  <FormsySelect
                    name="buben"
                    required
                    floatingLabelText="Buben"
                    menuItems={this.selectFieldItems}
                  >


                      <MenuItem value="ohne_4" primaryText="Ohne 4" />
                    <MenuItem value="ohne_3" primaryText="Ohne 3" />
                    <MenuItem value="ohne_2" primaryText="Ohne 2" />
                    <MenuItem value="ohne_1" primaryText="Ohne 1" />
                    <MenuItem value="mit_1" primaryText="Mit 1" />
                    <MenuItem value="mit_2" primaryText="Mit 2" />
                    <MenuItem value="mit_3" primaryText="Mit 3" />
                    <MenuItem value="mit_4" primaryText="Mit 4" />


                  </FormsySelect>

                  <FormsySelect
                    name="farbe"
                    required
                    floatingLabelText="Farbe"
                    menuItems={this.selectFieldItems}
                  >

                    <MenuItem value="grand" primaryText="Grand" />
                    <MenuItem value="kreuz" primaryText="Kreuz" />
                    <MenuItem value="pik" primaryText="Pik" />
                    <MenuItem value="herz" primaryText="Herz" />
                    <MenuItem value="karo" primaryText="Karo" />



                  </FormsySelect>

                  <FormsyToggle
                    name="null_"
                    label="Null"

                  />

                  <FormsyToggle
                    name="hand"
                    label="Hand"

                  />

                  <FormsyToggle
                    name="ouvert"
                    label="Ouvert"

                  />
                  <FormsyToggle
                    name="schneider"
                    label="Schneider"

                  />
                  <FormsyToggle
                    name="schwarz"
                    label="Schwarz"

                  />
                  <FormsyToggle
                    name="angesagt"
                    label="Angesagt"

                  />

                </Col>


              </Row>
              <CardActions style={styles.cardActionStyles}>
                <RaisedButton type="submit" secondary={true} label="Spiel hinzufügen" disabled={!this.state.canSubmit} />
              </CardActions>

            </Formsy.Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

AddSpiel.propTypes = {abend_id : React.PropTypes.array};


