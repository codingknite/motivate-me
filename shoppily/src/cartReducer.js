export default function cartReducer(cart, action) {
    switch (action.type) {
        case "empty":
            return []
        case "addToCart":
            const { id, sku } = action
            const itemInCart = cart.find((i) => i.sku === sku);
            if (itemInCart) {
                // Return a new array with the quantity increased
                return cart.map((i) =>
                    i.sku === sku ? { ...i, quantity: i.quantity++ } : i
                );
            } else {
                // Return a new array with the item appended
                return [...cart, { id, sku, quantity: 1 }];
            }
        case "updateQuantity": {
            const { sku, quantity } = action
            return quantity === 0
                ? cart.filter((i) => i.sku !== sku)
                : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i))
        };
        default:
            throw new Error("Unhandled action" + action.type)
    }
}