export const ShippingCalculator =  (innerweight, option) => {

    const shippingRate = 0.40;
    const weight = innerweight
    const shippingOption = option
    const shippingCost = (
        Math.round(
            weight * shippingRate *
            (shippingOption === '1' ? 1 : 1.5) * 100
        ) / 100)
        .toFixed(2);

    return shippingCost
}