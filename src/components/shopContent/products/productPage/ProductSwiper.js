import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "swiper/css/bundle";

import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper';

export default function ProductSwiper(props) {
    const product = props.product;
    const images = product?.images;

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
                <div className={`w-full h-full rounded-md bg-center bg-no-repeat bg-cover`}
                    style={{ backgroundImage: `url('../${images?.[0]}')` }}>
                </div>
            </SwiperSlide>
            <SwiperSlide className='flex items-center justify-center'>
                <div className={`w-full h-full rounded-md bg-center bg-no-repeat bg-cover`}
                    style={{ backgroundImage: `url('../${images?.[1]}')` }}>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
