import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export class GetShippingOption extends Component {
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
                                percent={80}
                                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            />
                            <h1>Get Shipping Option</h1>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    defaultValue={values.shippingOption}
                                    onChange={handleChange("shippingOption", "cost")}>
                                    <FormControlLabel value="1" control={<Radio />} label="Ground" />
                                    <FormControlLabel value="2" control={<Radio />} label="Priority" />
                                </RadioGroup>
                            </FormControl>
                            <br></br>
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
                                >Preview and Print Shipping Label</Button>
                            </div>
                        </div>
                    </Dialog>

                </>
            </MuiThemeProvider >
        )
    }
}

export default GetShippingOption
