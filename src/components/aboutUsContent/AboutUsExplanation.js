const AboutUsExplanation = () => {
    const pTagClasses = 'text-gray-800 font-normal text-[19px]';

    return (
        <section className='w-full lg:w-2/3 h-auto px-5 lg:px-24 flex flex-col gap-y-10'>
            <h1 className='text-gray-800 lg:text-5xl font-bold text-3xl'>
                About Millaw kids
            </h1>
            <div className='w-full flex flex-col gap-y-2'>
                <p className={pTagClasses}>
                    Our main goal is to make kids comfortable and free. As a mom of two wild ones i know how important is to let them decide what to wear. So kids became my biggest inspiration and judges about material and designs.
                </p>
                <p className={pTagClasses}>
                    Our collection is made unisex and oversized because we strongly believe that one kid can wear it longer or share it with brother or sister.
                </p>
                <p className={pTagClasses}>
                    Everything is made with LOVE and care so we really hope that you gonna feel it too.
                </p>
                <p className={pTagClasses}>
                    Let your kids be ourselves and play with their new soft clothes.
                </p>
            </div>
        </section>
    );
};

export default AboutUsExplanation;