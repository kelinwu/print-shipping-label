import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Wizard from './core/components/wizard/wizard';
import { ShippingCalculator } from "./core/components/wizard/shipping-cost-calculator";

test('should have text state in Wizard dom element', () => {
  const { getByText } = render(<Wizard />);
  const linkElement = getByText(/state/i);
  expect(linkElement).toBeInTheDocument();
});

test('should proper calculate grand shipping rate', () => {
  let expression;
  const weight = 22
  const selectedOption = 1  
  const toExpect = (Math.round((22*1.5*0.4)*100)/100).toFixed(2);
  expect(ShippingCalculator(22,2)).toBe(toExpect)
});

test('should proper calculate priority shipping rate', () => {
  let expression;
  const weight = 22
  const selectedOption = 2  
  const toExpect = (Math.round((22*1.5*0.4)*100)/100).toFixed(2);
  expect(ShippingCalculator(22,2)).toBe(toExpect)
});


