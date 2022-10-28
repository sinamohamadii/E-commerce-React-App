const Button = props => {
    const classes = 'w-fit px-10 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-sm rounded-3xl';

    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={props.primary === true ? `bg-gray-800 ${classes}` : classes}>
            {props.children}
        </button >
    );
};

export default Button;