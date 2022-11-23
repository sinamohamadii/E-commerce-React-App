import ProductsNavigationLink from './ProductsNavigationLink';

const ProductsNavigation = () => {
    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <div className='flex gap-x-2'>
                <span>
                    1 - 12
                </span>
                <span>
                    of
                </span>
                <span>
                    42 items
                </span>
            </div>
            <div className='flex gap-x-7 md:gap-x-14'>
                <button className='flex items-center justify-center text-gray-600 hover:text-[#347fb8]'>
                    <span>
                        <svg width='16' height='16' fill='currentColor' className='bi bi-caret-left-fill' viewBox='0 0 16 16'>
                            <path d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' />
                        </svg>
                    </span>
                    PREV
                </button>
                <div className='flex gap-x-7'>
                    <ProductsNavigationLink path='/shop?items=1-12' content='1'/>
                    <ProductsNavigationLink path='/shop?items=13-24' content='2'/>
                    <ProductsNavigationLink path='/shop?items=25-36' content='3'/>
                    <ProductsNavigationLink path='/shop?items=37-42' content='4'/>
                </div>
                <button className='flex items-center justify-center text-gray-600 hover:text-[#347fb8]'>
                    NEXT
                    <span>
                        <svg width='16' height='16' fill='currentColor' className='bi bi-caret-right-fill' viewBox='0 0 16 16'>
                            <path d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProductsNavigation;