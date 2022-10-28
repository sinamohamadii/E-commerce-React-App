const AboutUsTwoPhotos = props => {
    return (
        <section className={`w-screen flex flex-col gap-y-4 px-4 md:flex-row ${props.className}`}>
            <img src={props.sources[0]} className='w-full md:w-1/2' alt='A boy that wears our product' loading='lazy' />
            <img src={props.sources[1]} className='w-full md:w-1/2' alt='A boy that wears our product' loading='lazy' />
        </section>
    );
};

export default AboutUsTwoPhotos;