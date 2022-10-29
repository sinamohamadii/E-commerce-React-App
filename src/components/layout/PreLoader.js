import PreLoaderImg from '../../assets/preLoader.gif';

const PreLoader = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <img src={PreLoaderImg} alt='Preloader' />
        </div>
    );
};

export default PreLoader;