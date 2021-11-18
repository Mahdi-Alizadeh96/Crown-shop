import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItem
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((accumaletedQuantity ,cartItem) => accumaletedQuantity + cartItem.quantity ,0)
);

export const selectCartTotals = createSelector(
    [selectCartItems],
    cartItem => cartItem.reduce((accumaletedQuantity ,cartItem) => accumaletedQuantity + cartItem.quantity * cartItem.price ,0)
)