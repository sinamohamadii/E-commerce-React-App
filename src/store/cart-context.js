import React from "react";

const cart = React.createContext({
    items: [],
    totalPrice: 0,
    additem(item) { },
    removeItem(id) { },
    changeQuantity(id, price, newQuantity) { }
});

export default cart;