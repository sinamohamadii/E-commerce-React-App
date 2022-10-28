import classes from './ShopHeader.module.css';

const ShopHeader = () => {
    return (
        <header className={`w-full h-auto ${classes.headerBg}`}>
            <div className='w-full h-[50vh] flex items-center md:h-screen'>
                <h1 className='w-full text-white ml-5 text-[32px] md:text-[64px] font-semibold text-center'>
                    Soft and comfortable for our kids
                </h1>
            </div>
        </header>
    );
};

export default ShopHeader;