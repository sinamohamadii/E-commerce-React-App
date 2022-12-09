import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import cart from '../../../../store/cart-context';
import ProductForm from './ProductForm';
import ProductSwiper from './ProductSwiper';

const Product = props => {
    const cartCTX = useContext(cart);

    const productId = useParams().productId;

    const product = props.products[productId - 1];

    const formSubmitHandler = size => {
        cartCTX.additem({
            id: `${product.id}-${size}`,
            name: product.name,
            price: product.price,
            size: size,
            images: product.images
        });
    };

    return (
        <section className='w-full flex flex-col-reverse sm:flex-row sm:justify-around px-4'>
            <div className='w-full sm:w-96 p-2'>
                <ProductSwiper product={product} />
            </div>
            <div className='w-full sm:w-1/3 p-2 flex flex-col gap-y-5 sm:gap-y-0 sm:justify-between'>
                <span className='text-[22px] md:text-[26px] text-gray-800'>{product?.name}</span>
                <span className='text-[22px] md:text-[26px] text-gray-800'>{product?.price}$</span>
                <ProductForm onSubmit={formSubmitHandler} />
            </div>
        </section>
    );
};

export default Product;