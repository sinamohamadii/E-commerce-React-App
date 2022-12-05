import React from "react";

const cart = React.createContext({
    items: [],
    totalPrice: '',
    additem() { },
    removeItem() { },
    changeQuantity() { }
});

export const CartCTXProvider = props => {
    return (
        <cart.Provider value={{
            items: [],
            totalPrice: '',
            additem(item) {
                const existItem = this.items.find(el => el.id === item.id);
                const existItemIndex = this.items.indexOf(existItem);

                if (existItem) {
                    const existSizeItem = this.items.find(el => el.size === item.size);
                    const existSizeItemIndex = this.items.indexOf(existSizeItem);

                    if (!existSizeItem) {
                        this.items.push({
                            ...item,
                            totalPrice: item.price * item.quantity
                        });
                        console.log(this.items);
                        console.log(this.totalPrice);
                        return;
                    }

                    if (existSizeItem) {
                        this.items[existSizeItemIndex].quantity = 1 * existSizeItem.quantity + 1 * item.quantity;
                        this.items[existSizeItemIndex].totalPrice = this.items[existSizeItemIndex].quantity * this.items[existSizeItemIndex].price;
                        console.log(this.items);
                        console.log(this.totalPrice);
                        return;
                    }

                    this.items[existItemIndex].quantity = 1 * existItem.quantity + 1 * item.quantity;
                    this.items[existItemIndex].totalPrice = this.items[existItemIndex].quantity * this.items[existItemIndex].price;
                    console.log(this.items);
                    console.log(this.totalPrice);
                    return;
                }

                this.items.push({
                    ...item,
                    totalPrice: item.price * item.quantity
                });
                
                console.log(this.items);
                console.log(totalPrice);
            },
            removeItem() { },
            changeQuantity() { }
        }}>
            {props.children}
        </cart.Provider>
    );
};


export default cart;