import { useContext } from 'react';

import cart from '../../../store/cart-context';

const CartItem = props => {
    const cartCTX = useContext(cart);

    const onClickHandler = () => {
        cartCTX.removeItem(props.id);
    };

    const onChangeHandler = e => {
        cartCTX.changeQuantity(props.id, props.price, e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className='flex flex-col xs:flex-row border-4 rounded-md min-w-[305px] p-5'>
            <div className={`w-full xs:w-1/3 h-[300px] xs:h-36 rounded-md bg-center bg-no-repeat bg-cover xs:mr-2`}
                style={{ backgroundImage: `url('..${props.image}')` }}>
            </div>
            <div className='w-full xs:w-2/3 flex justify-between'>
                <div className='w-1/2 flex flex-col gap-y-4'>
                    <span className='font-semibold text-lg text-gray-800'>{props.name}</span>
                    <div className='w-full flex items-center gap-x-2'>
                        <label htmlFor='amount'>Amount:</label>
                        <select id='amount' className='bg-gray-200 rounded-md p-1 w-fit' value={props.quantity} onChange={onChangeHandler}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>
                    </div>
                    <span className='font-semibold text-md text-gray-600'>size:{props.size}</span>
                </div>
                <div className='w-1/2 flex flex-col justify-between items-end'>
                    <button className='text-gray-500' onClick={onClickHandler}>
                        X
                    </button>
                    <span className='text-xl font-bold text-gray-800'>${props.totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;