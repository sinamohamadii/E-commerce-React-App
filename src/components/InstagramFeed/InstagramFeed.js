import InstagramFeedItem from "./InstagramFeedItem";
import imgs from "./InstagramFeedPhotos";

const InstagramFeed = () => {

    return (
        <section className='mb-10'>
            <h3 className='text-2xl text-gray-800 font-semibold text-center mb-10'>Instagram feed</h3>
            <div className='flex gap-y-5 flex-wrap'>
                {imgs.map((img, index) => (<InstagramFeedItem src={img.src} key={index} />))}
            </div>
        </section >
    );
};

export default InstagramFeed;