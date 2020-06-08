import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    render() {
        const { values, handleChange } = this.props;
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
                                percent={40}
                                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            />
                            <h1>Get Receiever Address</h1>
                            <TextField
                                placeholder="Enter Your Name"
                                label="Name"
                                defaultValue={values.to.name}
                                onChange={handleChange('name', 'to')}
                                margin="normal"
                                fullWidth
                            />
                            <br />
                            <TextField
                                placeholder="Enter Your Street"
                                label="Street"
                                defaultValue={values.to.street}
                                onChange={handleChange('street', 'to')}
                                fullWidth
                            />
                            <br />
                            <TextField
                                placeholder="Enter Your City"
                                label="City"
                                defaultValue={values.to.city}
                                onChange={handleChange('city', 'to')}
                                fullWidth
                            />
                            <br />
                            <TextField
                                placeholder="Enter Your State"
                                label="State"
                                defaultValue={values.to.state}
                                onChange={handleChange('state', 'to')}
                                fullWidth
                            />
                            <br />
                            <TextField
                                placeholder="Enter your Zipcode"
                                label="Zip"
                                defaultValue={values.to.zip}
                                onChange={handleChange('zip', 'to')}
                                fullWidth
                            />
                            <br></br>
                            <div style={{ padding: '10px', textAlign: 'center' }}>
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={this.back}
                                >Back</Button>
                                {'   '}
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.continue}
                                >Continue</Button>
                            </div>
                        </div>
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;