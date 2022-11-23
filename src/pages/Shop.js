import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ShopHeader from '../components/layout/headers/ShopHeader';
import ShopNavigation from '../components/shopContent/ShopNavigation';
import ProductsWrapper from '../components/shopContent/products/ProductsWrapper';
import ShopFooter from '../components/shopContent/ShopFooter';
import Product from '../components/shopContent/products/productPage/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoadingProducts(true);

            const response = await fetch('http://localhost:3001/products');

            if (!response.ok) {
                setLoadingProducts(false);
                throw new Error('Oops! something went wrong.');
            }

            const result = await response.json();

            setProducts(result);

            setLoadingProducts(false);
        };

        getData().catch(error => setHasError(error.message));
    }, []);

    return (
        <>
            <ShopHeader />
            <main className='w-full overflow-hidden flex flex-col gap-y-10 mt-7'>
                <ShopNavigation />
                <Routes>
                    <Route
                        path='/*'
                        element={
                            <ProductsWrapper products={products} loadingProducts={loadingProducts} hasError={hasError} />
                        }
                    />
                    <Route path='/:productId' element={<Product products={products} />} />
                    <Route path='/shopping-cart' element={<h1>hello there shop cart 2</h1>} />
                </Routes>
            </main>
            <ShopFooter />
        </>
    );
};

export default Shop;