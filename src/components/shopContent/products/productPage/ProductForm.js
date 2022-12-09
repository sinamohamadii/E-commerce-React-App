import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './ProductForm.module.css';

const ProductForm = props => {
    const [favorite, setFavorite] = useState(false);

    const input1 = useRef();
    const input2 = useRef();
    const input3 = useRef();
    const input4 = useRef();
    const input5 = useRef();

    const inputs = [input1, input2, input3, input4, input5];

    const submitHandler = e => {
        e.preventDefault();

        let checkedSize;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].current.checked) {
                checkedSize = inputs[i].current.value;
            }
        }

        props.onSubmit(checkedSize);
    };

    const favoriteBtnHandler = () => {
        setFavorite(prevState => !prevState);
    };

    return (
        <div className='flex flex-col gap-y-2'>
            <span>Size</span>
            <form onSubmit={submitHandler} action='#' className='w-full flex flex-col gap-y-10'>
                <div className='flex justify-around'>
                    <div className='flex flex-col'>
                        <input ref={input1} value='1' type='radio' id='1' name='radio-group' defaultChecked />
                        <label htmlFor='1' className='flex items-center justify-center'>1</label>
                    </div>
                    <div className='flex flex-col'>
                        <input ref={input2} value='2' type='radio' id='2' name='radio-group' />
                        <label htmlFor='2' className='flex items-center justify-center'>2</label>
                    </div>
                    <div className='flex flex-col'>
                        <input ref={input3} value='3' type='radio' id='3' name='radio-group' />
                        <label htmlFor='3' className='flex items-center justify-center'>3</label>
                    </div>
                    <div className='flex flex-col'>
                        <input ref={input4} value='4' type='radio' id='4' name='radio-group' />
                        <label htmlFor='4' className='flex items-center justify-center'>4</label>
                    </div>
                    <div className='flex flex-col'>
                        <input ref={input5} value='5' type='radio' id='5' name='radio-group' />
                        <label htmlFor='5' className='flex items-center justify-center'>5</label>
                    </div>
                </div>
                <button type='submit' className='rounded-md bg-gray-800 text-white flex-items-center justify-center w-full h-12'>
                    Add to Bag
                </button>
            </form>
            <button
                className={!favorite ?
                    'rounded-md border border-gray-800 text-gray-800 flex items-center justify-center w-full h-12'
                    : 'rounded-md border border-gray-800 text-gray-800 flex items-center justify-center gap-x-3 w-full h-12'
                }
                type='button'
                onClick={favoriteBtnHandler}>
                {!favorite ? <span>Favorite</span> :
                    <>
                        <span>Favorited</span>
                        <svg width='16' height='16' fill='currentColor' className='text-red-500 bi bi-heart-fill' viewBox='0 0 16 16'>
                            <path fillRule='evenodd' d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z' />
                        </svg>
                    </>}
            </button>
            {favorite &&
                <Link 
                to='/shop?fav=true' 
                className='rounded-md border border-gray-800 text-gray-800 flex items-center justify-center w-full h-12'>
                    View Favorites
                </Link>
            }
        </div>
    );
};

export default ProductForm;