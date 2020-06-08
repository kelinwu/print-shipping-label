import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { ContentBlock } from 'material-ui/svg-icons';

export class GetSenderAddress extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
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
                                percent={20}
                                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            />
                            <h1>Get Sender Address</h1>
                            <TextField
                                placeholder="Enter Your Name"
                                label="Name"
                                defaultValue={values.from.name}
                                errorText={values.errorText}
                                onChange={handleChange('name', 'from')}
                                fullWidth
                            />
                            <br />
                            <TextField
                                placeholder="Enter Your Street"
                                label="Street"
                                defaultValue={values.from.street}
                                onChange={handleChange('street', 'from')}
                                fullWidth
                            />
                            <br />
                            <div style={{ display: ContentBlock }}>
                                <TextField
                                    placeholder="Enter Your City"
                                    label="City"
                                    defaultValue={values.from.city}
                                    onChange={handleChange('city', 'from')}
                                    fullWidth
                                />
                                <TextField
                                    placeholder="Enter Your State"
                                    label="State"
                                    defaultValue={values.from.state}
                                    onChange={handleChange('state', 'from')}
                                    fullWidth
                                />
                                <TextField
                                    placeholder="Enter your Zipcode"
                                    label="Zip"
                                    defaultValue={values.from.zip}
                                    onChange={handleChange('zip', 'from')}
                                    fullWidth
                                />
                            </div>
                            <br></br>
                            <div style={{ padding: '10px', textAlign: 'center' }}>
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
        )
    }
}

export default GetSenderAddress
