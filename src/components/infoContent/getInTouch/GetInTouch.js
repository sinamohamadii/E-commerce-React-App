import ContactFormDiv from './ContactFormDiv';
import classes from './GetInTouch.module.css';
import img from '../../../assets/infoFormImg.avif';

const GetInTouch = () => {
    return (
        <section className='w-full flex flex-col-reverse md:flex-row mb-10'>
            <div className='w-full h-[full] md:w-[40%] px-4 md:px-0'>
                <div className={`${classes.formBg} w-full h-full`} />
                <img src={img} className='md:hidden' />
            </div>
            <ContactFormDiv />
        </section>
    );
};

export default GetInTouch;