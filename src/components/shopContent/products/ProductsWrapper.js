import { useLocation } from 'react-router-dom';

import ProductItem from './ProductItem';
import PreLoader from '../../layout/PreLoader';
import ProductsNavigation from './ProductsNavigation';

const ProductsWrapper = props => {
    const location = useLocation();

    const queryObj = new URLSearchParams(location.search);

    const favoriteQ = queryObj.get('fav');

    return (
        <div className='w-full flex flex-col gap-y-10 px-5 lg:px-16'>
            <div className='w-full flex gap-y-5 flex-wrap'>
                {!props.loadingProducts && !props.hasError && props.products.map(item => {
                    return (<ProductItem images={item.images} key={item.id} id={item.id} price={item.price} name={item.name} />)
                })}
                {props.loadingProducts && !props.hasError && <PreLoader />}
                {!props.loadingProducts && props.hasError &&
                    <p className='w-full text-center text-red-500 font-semibold mb-10'>
                        {props.hasError}
                    </p>
                }
            </div>
        </div>
    );
};

export default ProductsWrapper;