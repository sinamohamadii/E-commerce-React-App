import { Link } from 'react-router-dom';

const ProductsNavigationLink = prpos => {
    return (
        <Link to={prpos.path}
            className='text-gray-600 hover:text-black hover:font-semibold transition-all duration-300'>
            {prpos.content}
        </Link>
    );
};

export default ProductsNavigationLink;