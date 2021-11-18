export const addItemToCart = (cartItems ,cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    } else {
        return [...cartItems , {...cartItemsToAdd, quantity : 1}]
    }
}

export const removeItemFromCart = (cartItem , cartItemToRemove) => {
    const existingCartItems = cartItem.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItems.quantity ===1) return cartItem ;

    return cartItem.map(cartItem =>
            cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity : cartItem.quantity -1 }
            : cartItem    
        )
}