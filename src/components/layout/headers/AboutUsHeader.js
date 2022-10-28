import HeaderImg from '../../../assets/aboutUsHeader.avif';

const AboutUsHeader = () => {
    return (
        <header className='w-full h-auto px-5 lg:px-24'>
            <img alt='Header Kid' src={HeaderImg} className='w-full h-auto' />
        </header>
    );
};

export default AboutUsHeader;