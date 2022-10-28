import ProductItem from "./ProductItem";

const ProductsWrapper = () => {
    return (
        <div className='w-full flex gap-y-5 flex-wrap px-5 md:px-20'>
            <ProductItem id='1' />
            <ProductItem id='2' />
            <ProductItem id='3' />
            <ProductItem id='4' />
            <ProductItem id='5' />
            <ProductItem id='6' />
            <ProductItem id='7' />
            <ProductItem id='8' />
        </div>
    );
};

export default ProductsWrapper;