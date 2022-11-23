import { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './ProductItem.module.css';


const ProductItem = props => {
    const [mouseIn, setMouseIn] = useState(false);

    const mouseInHandler = () => {
        setMouseIn(prevState => !prevState);
    };

    const mouseOutHandler = () => {
        setMouseIn(prevState => !prevState);
    };


    let imgContent;

    if (!mouseIn) {
        imgContent = props.images[0];
    } else {
        imgContent = props.images[1];
    }

    return (
        <div className='w-1/2 md:!w-1/3 lg:!w-1/4 px-4'>
            <Link
                to={`/shop/${props.id}`}
                className={`w-full flex flex-col items-start justify-center ${classes.productLink}`}
                onMouseEnter={mouseInHandler}
                onMouseOut={mouseOutHandler}>
                <div className={`w-full h-52 xs:h-96 flex max-h-[300px] rounded-md ${classes.productImg}`}
                    style={{ backgroundImage: `url('${imgContent}')` }}>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-full flex-col flex items-center justify-center'>
                        <span className={`text-gray-500 text-sm xs:text-md ml-2 font-semibold text-center w-full ${classes.productName}`}>
                            {props.name}
                        </span>
                        <span className='font-semibold ml-2 text-lg xs:text-xl text-center w-full'>
                            {props.price}$
                        </span>
                    </div>
                    <div className='w-fit flex items-center justify-center pr-2'>
                        <span className='text-yellow-500'>
                            <svg width='18' height='18' fill='currentColor' className='bi bi-star-fill' viewBox='0 0 16 16'>
                                <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductItem;