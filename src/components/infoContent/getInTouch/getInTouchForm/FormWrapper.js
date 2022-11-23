import { useRef } from 'react';

import Button from '../../../layout/Button';
import FormInput from './FormInput';

const FormWrapper = () => {
    const nameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const messageInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        console.log([
            nameInputRef.current.value,
            lastNameInputRef.current.value,
            emailInputRef.current.value,
            messageInputRef.current.value
        ]);

        nameInputRef.current.value = '';
        lastNameInputRef.current.value = '';
        emailInputRef.current.value = '';
        messageInputRef.current.value = '';
    };

    return (
        <form className='h-full flex flex-col gap-y-5' onSubmit={submitHandler}>
            <FormInput
                ref={nameInputRef}
                id='name'
                placeHolder='Your name'
                label='Name*'
                type='text'
            />
            <FormInput
                ref={lastNameInputRef}
                id='last_name'
                placeHolder='Your last name'
                label='Last name*'
                type='text'
            />
            <FormInput
                ref={emailInputRef}
                id='email'
                placeHolder='Your email'
                label='Email*'
                type='email'
            />
            <div className='flex flex-col gap-y-2'>
                <label className='text-gray-800 font-light text-[14px]' htmlFor='message'>
                    Message*
                </label>
                <textarea
                    ref={messageInputRef}
                    className='bg-[#f4f4f4] p-3 rounded-md resize-none'
                    id='message'
                    placeholder='Your message'
                    required
                />
            </div>
            <Button type='submit'>Submit</Button>
        </form>
    );
};

export default FormWrapper;