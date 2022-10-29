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
                <span className={`text-lg ml-2 font-semibold ${classes.productName}`}>
                    {props.name}
                </span>
                <span className='font-semibold ml-2 text-xl'>
                    {props.price}$
                </span>
            </Link>
        </div>
    );
};

export default ProductItem;