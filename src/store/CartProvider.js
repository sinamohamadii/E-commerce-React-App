import { useReducer } from "react";
import cart from "./cart-context";

const defaultCartState = {
    items: [],
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existItem = state.items.find(el => el.id === action.item.id);
        const existItemIndex = state.items.indexOf(existItem);

        let updatedItems = state.items.concat({
            ...action.item,
            totalPrice: action.item.price * action.item.quantity
        });
        let updatedTotalPrice = state.totalPrice + updatedItems.find(el => el.id === action.item.id).totalPrice;

        if (existItem) {
            let updatedQuantity = state.items[existItemIndex].quantity + 1;
            let updatedTotalPriceOfItem = state.items[existItemIndex].price * updatedQuantity;

            let existSizeItem = state.items.find(el => el.size === action.item.size);
            let existSizeItemIndex = state.items.indexOf(existSizeItem);

            if (!existSizeItem) {
                updatedItems = state.items.concat({
                    ...action.item,
                    totalPrice: action.item.price * action.item.quantity
                });

                updatedTotalPrice = state.totalPrice + 1 * action.item.price;

                console.log(updatedItems);

                return ({
                    items: updatedItems,
                    totalPrice: updatedTotalPrice
                });
            }

            if (existSizeItem) {
                updatedQuantity = state.items[existSizeItemIndex].quantity + 1;
                updatedTotalPriceOfItem = 1 * action.item.price * updatedQuantity;

                let updatedItem = {
                    ...state.items[existSizeItemIndex],
                    quantity: updatedQuantity,
                    totalPrice: updatedTotalPriceOfItem
                }

                updatedItems = state.items.map((el) => {
                    if (el.id === action.item.id && el.size === action.item.size) {
                        return updatedItem;
                    }
                    return el;
                });

                updatedTotalPrice = state.totalPrice + 1 * action.item.price;

                console.log(updatedItems);

                return ({
                    items: updatedItems,
                    totalPrice: updatedTotalPrice
                });
            }

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

            console.log(updatedItems);

            return ({
                items: updatedItems,
                totalPrice: updatedTotalPrice
            });
        }

        console.log(updatedItems);

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

        // const existItem = cartItemObject.items.find(el => el.id === item.id);
        // const existItemIndex = cartItemObject.items.indexOf(existItem);

        // if (existItem) {
        //     const existSizeItem = cartItemObject.items.find(el => el.size === item.size);
        //     const existSizeItemIndex = cartItemObject.items.indexOf(existSizeItem);

        //     if (!existSizeItem) {
        //         cartItemObject.items.push({
        //             ...item,
        //             totalPrice: item.price * item.quantity
        //         });
        //         console.log(cartItemObject.items);
        //         console.log(cartItemObject.totalPrice);
        //         return;
        //     }

        //     if (existSizeItem) {
        //         cartItemObject.items[existSizeItemIndex].quantity = 1 * existSizeItem.quantity + 1 * item.quantity;
        //         cartItemObject.items[existSizeItemIndex].totalPrice = cartItemObject.items[existSizeItemIndex].quantity * cartItemObject.items[existSizeItemIndex].price;
        //         console.log(cartItemObject.items);
        //         console.log(cartItemObject.totalPrice);
        //         return;
        //     }

        //     cartItemObject.items[existItemIndex].quantity = 1 * existItem.quantity + 1 * item.quantity;
        //     cartItemObject.items[existItemIndex].totalPrice = cartItemObject.items[existItemIndex].quantity * cartItemObject.items[existItemIndex].price;
        //     console.log(cartItemObject.items);
        //     console.log(cartItemObject.totalPrice);
        //     return;
        // }

        // cartItemObject.items.push({
        //     ...item,
        //     totalPrice: item.price * item.quantity
        // });

        // console.log(cartItemObject.items);
        // console.log(cartItemObject.totalPrice);
    };

    const removeFromCartHandler = id => { };

    const changeQuantityCartHandler = id => { };

    const cartItemObject = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        additem: addToCartHandler,
        removeItem: removeFromCartHandler,
        changeQuantity: changeQuantityCartHandler
    };

    console.log(cartState.totalPrice);

    return (
        <cart.Provider value={cartItemObject}>
            {props.children}
        </cart.Provider>
    );
};

export default CartProvider;