import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "swiper/css/bundle";

import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper';

export default function ProductSwiper() {

    return (
        <Swiper
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className='w-full h-96 rounded-md'
        >
            <SwiperSlide className='flex items-center justify-center'>
                <img className='rounded-md w-full h-full object-cover' alt='Swiper' src='https://swiperjs.com/demos/images/nature-1.jpg' />
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
                <img className='rounded-md w-full h-full object-cover' alt='Swiper' src='https://swiperjs.com/demos/images/nature-2.jpg' />
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
                <img className='rounded-md w-full h-full object-cover' alt='Swiper' src='https://swiperjs.com/demos/images/nature-3.jpg' />
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
                <img className='rounded-md w-full h-full object-cover' alt='Swiper' src='https://swiperjs.com/demos/images/nature-4.jpg' />
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
                <img className='rounded-md w-full h-full object-cover' alt='Swiper' src='https://swiperjs.com/demos/images/nature-5.jpg' />
            </SwiperSlide>
        </Swiper>
    );
}
