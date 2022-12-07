import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import CartProvider from '../store/CartProvider';
import ShopHeader from '../components/layout/headers/ShopHeader';
import ShopNavigation from '../components/shopContent/ShopNavigation';
import ProductsWrapper from '../components/shopContent/products/ProductsWrapper';
import ShopFooter from '../components/shopContent/ShopFooter';
import Product from '../components/shopContent/products/productPage/Product';
import ShoppingCart from '../components/shopContent/shoppingCart/ShoppingCart';

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
                <CartProvider>
                    <Routes>
                        <Route
                            path='/*'
                            element={
                                <ProductsWrapper products={products} loadingProducts={loadingProducts} hasError={hasError} />
                            }
                        />
                        <Route path='/:productId' element={<Product products={products} />} />
                        <Route path='/shopping-cart' element={<ShoppingCart />} />
                    </Routes>
                </CartProvider>
            </main>
            <ShopFooter />
        </>
    );
};

export default Shop;