/**
 * Created by jaidmin on 30/10/16.
 */


import React from 'react';
import { Link } from 'react-router';
import { handleAbend } from '../../modules/abend';
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


export class AddAbend extends React.Component {

  constructor(props) {
    super(props);
    this.state = { canSubmit: false }
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.disableButton = this.disableButton.bind(this);
  }

  submit(data) {
    let spieler = {
      "spieler_1" : data.spieler_1,
    "spieler_2" : data.spieler_2,
    "spieler_3" : data.spieler_3,
    } ;

    let optionen = {
      "schneider-mit-30": data.schneider_mit_30,
      "kontra-und-reh-erlauben": data.kontra_und_reh_erlauben,

      "bock_ramsch": {
        "schneider_verloren":data.bock_ramsch_schneider_verloren,
        "schneider_gewonnen":data.bock_ramsch_schneider_gewonnen,
        "kontra_verloren": data.bock_ramsch_kontra_verloren,
        "kontra_gewonnen": data.bock_ramsch_kontra_gewonnen,
        "spaltarsch": data.bock_ramsch_spaltarsch,
      },

      "kontra_nur_nach_reizen": data.kontra_nur_nach_reizen,
      "grand_wert": data.grand_wert,
      "ramsch_wenn_alle_passen": data.ramsch_wenn_alle_passen,
      "grand_hand_bei_ramsch":data.grand_hand_bei_ramsch,
      //"abrechnungssystem" : data.abrechnungssystem,


    };


    handleAbend(spieler,optionen);

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
              name="schneider_mit_30"
              label="Schneider mit 30"

              />
                  <FormsyToggle
                    name="kontra_und_reh_erlauben"
                    label="Kontra und Re erlauben"

                  />

                <CardTitle subtitle="Bock-Ramsch"/>
                  <FormsyToggle
                    name="bock_ramsch_schneider_verloren"
                    label="Bei Schneider verloren"
                    className="text-left"
                    />
                  <FormsyToggle
                    name="bock_ramsch_schneider_gewonnen"
                    label="Bei Schneider gewonnen"

                  />
                  <FormsyToggle
                    name="bock_ramsch_kontra_gewonnen"
                    label="Bei Kontra gewonnen"

                  />
                  <FormsyToggle
                    name="bock_ramsch_kontra_verloren"
                    label="Bei Kontra verloren"

                  />
                  <FormsyToggle
                    name="bock_ramsch_spaltarsch"
                    label="Bei Spaltarsch"

                  />
              </Col>
                <Col xs={12} md={4}>
                  <FormsyToggle
                    name="kontra_nur_nach_reizen"
                    label="Kontra nur nach Reizen"

                  />


                  <FormsySelect
                    name="grand_wert"
                    required
                    floatingLabelText="Grand mit"
                    menuItems={this.selectFieldItems}
                  >


                      <MenuItem value={"18"} primaryText={"18"} />
                    <MenuItem value={"20"} primaryText={"20"} />
                    <MenuItem value={"22"} primaryText={"22"} />
                    <MenuItem value={"24"} primaryText={"24"} />



                  </FormsySelect>
                  <FormsyToggle
                    name="ramsch_wenn_alle_passen"
                    label="Ramsch wenn alle passen"

                  />
                  <FormsyToggle
                    name="grand_hand_bei_ramsch"
                    label="Grand Hand bei Ramsch"

                  />

                  <FormsySelect
                    name="abrechnungssystem"
                    required
                    floatingLabelText="Abrechnungssystem"
                    menuItems={this.selectFieldItems}
                  >


                    <MenuItem value={"klassisch"} primaryText={"Klassisch"} />
                    <MenuItem value={"bierlachs"} primaryText={"Bierlachs"} />
                    <MenuItem value={"seger_fabian"} primaryText={"Seger_Fabian"} />



                  </FormsySelect>



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


