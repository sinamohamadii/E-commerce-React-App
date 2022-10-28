import { Route, Routes } from 'react-router-dom';

import ShopHeader from '../components/layout/headers/ShopHeader';
import ShopNavigation from '../components/shopContent/ShopNavigation';
import ProductsWrapper from '../components/shopContent/products/ProductsWrapper';

const Shop = () => {
    return (
        <>
            <ShopHeader />
            <main className='w-full overflow-hidden flex flex-col gap-y-10 mt-7'>
                <ShopNavigation />
                <Routes>
                    <Route path='/' element={<ProductsWrapper />} />
                    <Route path='/:identifier' element={<h1>product page</h1>} />
                    <Route path='/shopping-cart' element={<h1>hello there shop cart 2</h1>} />
                </Routes>
            </main>
        </>
    );
};

export default Shop;