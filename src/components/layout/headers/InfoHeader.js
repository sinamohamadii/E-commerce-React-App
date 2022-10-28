import classes from './InfoHeader.module.css';

const InfoHeader = () => {
    return (
        <header className={`w-full h-auto ${classes.headerBg}`}>
            <div className='w-full h-[50vh] flex items-center md:h-screen'>
                <h1 className='text-white ml-5 text-[32px] md:text-[64px] font-semibold'>
                    Feel free to contact us
                </h1>
            </div>
        </header>
    );
};

export default InfoHeader;