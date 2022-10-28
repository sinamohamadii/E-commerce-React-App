import FormWrapper from "./getInTouchForm/FormWrapper";

const ContactFormDiv = () => {
    return (
        <div className='w-full md:w-[60%] px-4 lg:px-32 flex flex-col gap-y-5 py-5 md:py-14 lg:!py-16'>
            <h4 className='text-[32px] text-gray-800 font-light'>
                Get in touch
            </h4>
            <FormWrapper />
        </div>
    );
};

export default ContactFormDiv;