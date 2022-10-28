const InstagramFeedItem = props => {
    return (
        <div className='w-1/3 lg:w-[12.5%] px-2'>
            <img src={props.src} alt='Instagram photos' className='w-full' />
        </div>
    );
};

export default InstagramFeedItem;