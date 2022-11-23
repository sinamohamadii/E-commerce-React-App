import { useParams } from 'react-router-dom';

import ProductForm from './ProductForm';
import ProductSwiper from './ProductSwiper';

const Product = props => {
    const productId = useParams().productId;
   // const product = props.products[productId - 1];

    const formSubmitHandler = id => {
        console.log(id);
    };

    return (
        <section className='w-full flex flex-col-reverse xs:flex-row px-4'>
            <div className='w-full xs:w-2/3 p-2'>
                <ProductSwiper />
            </div>
            <div className='w-full xs:w-1/3 p-2 flex flex-col gap-y-5 xs:gap-y-0 xs:justify-between'>
                <span className='text-[22px] md:text-[26px] text-gray-800'>product name</span>
                <span className='text-[22px] md:text-[26px] text-gray-800'>35.00$</span>
                <ProductForm onSubmit={formSubmitHandler} />
            </div>
        </section>
    );
};

export default Product;