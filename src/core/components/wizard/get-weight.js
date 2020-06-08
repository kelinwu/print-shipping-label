import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export class GetWeight extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
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
                                percent={60}
                                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            />
                            <h1>Get Weight</h1>
                            <TextField
                                placeholder="Enter Weight"
                                label="Weight"
                                defaultValue={values.weight}
                                onChange={handleChange('weight')}
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
        )
    }
}

export default GetWeight
