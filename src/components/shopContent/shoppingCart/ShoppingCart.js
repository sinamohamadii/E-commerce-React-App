import CartItem from './CartItem';

import cart from '../../../store/cart-context';
import { useContext } from 'react';

const ShoppingCart = () => {
    const cartCTX = useContext(cart);

    console.log(cartCTX.items.length);

    return (
        <div className='flex flex-col gap-y-4 items-center justify-center'>
            <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
            <div className='flex flex-col gap-y-3'>
                {
                    cartCTX.items ? cartCTX.items.map(el => {
                        return (<CartItem
                            key={el.id}
                            id={el.id}
                            price={el.price}
                            name={el.name}
                            size={el.size}
                            totalPrice={el.totalPrice}
                            image={el.images[0]}
                            quantity={el.quantity}
                        />);
                    }) :
                        <p>There are no item in cart</p>
                }
            </div>
            <span className='text-2xl font-bold'>Total Price: ${cartCTX.totalPrice}</span>
            <button className='bg-gray-700 hover:bg-gray-800 text-white h-12 px-3 rounded-md'>
                Submit Order
            </button>
        </div>
    );
};

export default ShoppingCart;