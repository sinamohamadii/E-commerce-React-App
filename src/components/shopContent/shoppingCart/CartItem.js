const CartItem = () => {
    return (
        <div className='flex border-4 rounded-md min-w-[320px] p-5'>
            <div className='w-2/3 flex flex-col gap-y-4'>
                <span className='font-semibold text-lg text-gray-800'>name</span>
                <select className='bg-gray-200 rounded-md p-1 w-fit'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <span className='font-semibold text-md text-gray-600'>size</span>
            </div>
            <div className='w-1/3 flex flex-col justify-between items-end'>
                <button className='text-gray-500'>
                    X
                </button>
                <span className='text-xl font-bold text-gray-800'>$800</span>
            </div>
        </div>
    );
};

export default CartItem;