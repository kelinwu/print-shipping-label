import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export class ShippingLabelMaker extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values } = this.props;

        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <div style={{ padding: '30px' }}>

                            <ProgressBar
                                percent={100}
                                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            />
                            <h1>Confirm User Shipping Label</h1>
                            <h3>From </h3>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Name" secondary={values.from.name} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Street" secondary={values.from.street} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="City" secondary={values.from.city} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="State" secondary={values.from.state} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Zip" secondary={values.from.zip} />
                                </ListItem>
                            </List>
                            <h3>to </h3>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Name" secondary={values.to.name} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Street" secondary={values.to.street} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="City" secondary={values.to.city} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="State" secondary={values.to.state} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Zip" secondary={values.to.zip} />
                                </ListItem>
                            </List>
                            <h3>Weight</h3>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Weight" secondary={values.weight} />
                                </ListItem>
                            </List>
                            <h3>Shipping Option</h3>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Shipping Option Picked" secondary={values.shippingOption} />
                                </ListItem>
                            </List>
                            <h3>Shipping Cost</h3>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Shipping Cost" secondary={values.shippingCost} />
                                </ListItem>
                            </List>
                            <br />
                            <div style={{ padding: '10px', textAlign: 'center' }}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={this.back}
                                >Back</Button>
                                {'  '}
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.continue}
                                >Confirm & Print Shipping Label</Button>
                            </div>
                        </div>
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }
}

export default ShippingLabelMaker;
