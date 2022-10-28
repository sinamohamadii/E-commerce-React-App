import { NavLink } from 'react-router-dom';

const NavItem = props => {
    return (
        <NavLink
            to={`/${props.path}`}
            className={({ isActive }) => isActive ?
                'border-b-[1px] border-black pb-1 w-fit' :
                'hover:border-b-[1px] border-black pb-1 w-fit transition-all duration-75'}>
            {props.text}
        </NavLink>
    );
};

export default NavItem;