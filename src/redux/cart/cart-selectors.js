import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItem
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((accumaletedQuantity ,cartItem) => accumaletedQuantity + cartItem.quantity ,0)
)