import CartItem from './CartItem';

const ShoppingCart = () => {
    return (
        <div className='flex flex-col gap-y-4 items-center justify-center'>
            <h1 className='font-semibold text-2xl'>Shopping Cart</h1>
            <div className='flex flex-col gap-y-3'>
                <CartItem />
            </div>
            <span className='text-2xl font-bold'>Total Price: $x</span>
            <button className='bg-gray-700 hover:bg-gray-800 text-white h-12 px-3 rounded-md'>
                Submit Order
            </button>
        </div>
    );
};

export default ShoppingCart;