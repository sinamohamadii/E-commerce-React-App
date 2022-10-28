import React from 'react';

const FormInput = React.forwardRef((props, ref) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <label
                className='text-gray-800 font-light text-[14px]'
                htmlFor={props.id}>
                {props.label}
            </label>
            <input
                ref={ref}
                className='bg-[#f4f4f4] p-3 rounded-md'
                id={props.id}
                placeholder={props.placeHolder}
                type={props.type}
                required
            />
        </div>
    );
});

export default FormInput;