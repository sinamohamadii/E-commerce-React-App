import React from 'react';

import AboutUsHeader from '../components/layout/headers/AboutUsHeader';
import AboutUsExplanation from '../components/aboutUsContent/AboutUsExplanation';
import AboutUsTwoPhotos from '../components/aboutUsContent/AboutUsTwoPhotos';
import AboutUsBoy1 from '../assets/aboutUsBoy1.avif';
import AboutUsBoy2 from '../assets/aboutUsBoy2.avif';
import AboutUsMottoText from '../components/aboutUsContent/AboutUsMottoText';
import AboutUsBoy3 from '../assets/aboutUsBoy3.avif';
import AboutUsBoy4 from '../assets/aboutUsBoy4.webp';
import AboutUsSocial from '../components/aboutUsContent/AboutUsSocial';
import InstagramFeed from '../components/InstagramFeed/InstagramFeed';

const AboutUs = () => {
    return (
        <>
            <AboutUsHeader />
            <main className='w-full overflow-hidden flex flex-col gap-y-10 mt-16 md:mt-28'>
                <AboutUsExplanation />
                <AboutUsTwoPhotos sources={[AboutUsBoy1, AboutUsBoy2]} className='md:px-0' />
                <AboutUsMottoText />
                <AboutUsTwoPhotos sources={[AboutUsBoy3, AboutUsBoy4]} className='md:px-24 gap-x-4' />
                <AboutUsSocial />
                <InstagramFeed />
            </main>
        </>
    );
};

export default AboutUs;