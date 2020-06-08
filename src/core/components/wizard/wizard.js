import React, { Component } from 'react'
import GetSenderAddress from './get-sender-address'
import GetReceieverAddress from './get-receiever-address'
import GetWeight from './get-weight'
import GetShippingOption from './get-shipping-option'
import ShippingLabelMaker from '../../../features/shipping-label-maker/shipping-lable-maker'
import Success from "./success";
import { ShippingCalculator } from "./shipping-cost-calculator";

export class wizard extends Component {
    //name: "John  Smith", street: "131 Dartmouth St", city: "Boston", state: "MA", zip: "02116" 
    state = {
        step: 1,
        from: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        to: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        weight: '',
        shippingOption: '',
        shippingCost: 0
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = (input, address) => e => {

        switch (address) {
            case 'from':
                this.setState({
                    ...this.state,
                    from: {
                        ...this.state.from,
                        [input]: e.target.value
                    }
                });
                break;
            case 'to':
                this.setState({
                    ...this.state,
                    to: {
                        ...this.state.to,
                        [input]: e.target.value
                    }
                });
                break;
            case 'cost':
                this.setState({
                    [input]: e.target.value
                })

                this.setState({
                    shippingCost: ShippingCalculator(this.state.weight,e.target.value)
                })
                break;
            default:
                this.setState({
                    [input]: e.target.value
                }
                );
                break;
        }

    }


    render() {
        const { step } = this.state;

        switch (step) {
            case 1:
                return (
                    <GetSenderAddress
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={this.state}
                    />
                );
            case 2:
                return (
                    <GetReceieverAddress
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={this.state}
                    />
                );
            case 3:
                return (
                    <GetWeight
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={this.state}
                    />
                );
            case 4:
                return (
                    <GetShippingOption
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={this.state}
                    />
                )
            case 5:
                return (
                    <ShippingLabelMaker
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={this.state}
                    />
                );
            case 6:
                return <Success />;
            default:
                return
        }
    }
}

export default wizard