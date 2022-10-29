import { useEffect, useState } from "react";

import ProductItem from "./ProductItem";

const ProductsWrapper = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products").then(res => res.json()).then(result => setProducts(result));
    }, []);

    return (
        <div className='w-full flex gap-y-5 flex-wrap px-5 lg:px-16'>
            {products.map(item => {
                return (<ProductItem images={item.images} key={item.id} id={item.id} price={item.price} name={item.name} />)
            })}
        </div>
    );
};

export default ProductsWrapper;