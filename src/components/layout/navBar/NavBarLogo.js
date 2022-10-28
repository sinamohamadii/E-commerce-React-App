import logo from '../../../assets/logo.jpg';

const NavBarLogo = () => {
    return (
        <div className='w-fit'>
            <img src={logo} className='w-[50px] md:w-[154px]' />
        </div>
    );
};

export default NavBarLogo;