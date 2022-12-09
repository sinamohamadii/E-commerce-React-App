import { useReducer } from "react";
import cart from "./cart-context";

const defaultCartState = {
    items: [],
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        let updatedItems;
        let updatedTotalPrice;

        const existItem = state.items.find(el => el.id === action.item.id);
        const existItemIndex = state.items.indexOf(existItem);

        if (existItem) {
            let updatedQuantity = state.items[existItemIndex].quantity + 1;
            let updatedTotalPriceOfItem = state.items[existItemIndex].price * updatedQuantity;

            let updatedItem = {
                ...state.items[existItemIndex],
                quantity: updatedQuantity,
                totalPrice: updatedTotalPriceOfItem
            }

            updatedItems = state.items.map((el) => {
                if (el.id === action.item.id) {
                    return updatedItem;
                }
                return el;
            });

            updatedTotalPrice = state.totalPrice + 1 * action.item.price;

            return ({
                items: updatedItems,
                totalPrice: updatedTotalPrice
            });
        }

        updatedItems = state.items.concat({
            ...action.item,
            quantity: 1,
            totalPrice: action.item.price
        });

        updatedTotalPrice = state.totalPrice + 1 * updatedItems.find(el => el.id === action.item.id).totalPrice;

        return ({
            items: updatedItems,
            totalPrice: updatedTotalPrice
        });

    }

    if (action.type === 'REMOVE') {
        let updatedItems;
        let updatedTotalPrice;

        const item = state.items.find(el => el.id === action.id);

        updatedItems = state.items.filter(el => el.id !== action.id);

        updatedTotalPrice = state.totalPrice - 1 * item.totalPrice;

        return ({
            items: updatedItems,
            totalPrice: updatedTotalPrice
        });
    }

    if (action.type === 'CHANGE-QUANTITY') {
        let updatedItems;
        let updatedTotalPrice;

        const item = state.items.find(el => el.id === action.id);

        let updatedTotalPriceOfItem;
        let updatedItem;

        updatedTotalPriceOfItem = action.newQuantity * item.price;
        updatedItem = {
            ...item,
            quantity: action.newQuantity,
            totalPrice: updatedTotalPriceOfItem
        };

        updatedItems = state.items.map(el => {
            if (el.id === action.id) {
                return updatedItem;
            }
            return el;
        });

        if (item.totalPrice > updatedTotalPriceOfItem) {
            updatedTotalPrice = state.totalPrice - (item.totalPrice - updatedTotalPriceOfItem);
        } else {
            updatedTotalPrice = state.totalPrice + (updatedTotalPriceOfItem - item.totalPrice);
        }

        return ({
            items: updatedItems,
            totalPrice: updatedTotalPrice
        });
    }
    return defaultCartState;
};

const CartProvider = props => {

    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler = item => {
        cartDispatch({ type: 'ADD', item: item });
    };

    const removeFromCartHandler = id => {
        cartDispatch({ type: 'REMOVE', id: id });
    };

    const changeQuantityCartHandler = (id, price, newQuantity) => {
        cartDispatch({
            type: 'CHANGE-QUANTITY',
            id: id,
            price: price,
            newQuantity: newQuantity
        });
    };

    const cartItemObject = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        additem: addToCartHandler,
        removeItem: removeFromCartHandler,
        changeQuantity: changeQuantityCartHandler
    };

    return (
        <cart.Provider value={cartItemObject}>
            {props.children}
        </cart.Provider>
    );
};

export default CartProvider;