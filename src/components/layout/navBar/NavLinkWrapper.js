import NavLink from './NavLink';

const NavlinkWrapper = props => {
    return (
        <div className={props.className + ' text-[15px]'}>
            <NavLink path='shop' text='Shop' />
            <NavLink path='about-us' text='About us' />
            <NavLink path='info' text='Info' />
        </div>
    );
};

export default NavlinkWrapper;