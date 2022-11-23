import { useState, useEffect } from 'react';

import NavBarLogo from './NavBarLogo';
import NavlinkWrapper from './NavLinkWrapper';
import NavBarButton from './NavBarButton';

const NavBar = () => {
    const [scroll, setScroll] = useState(false);

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 0);
        });
    }, []);

    const openMenuHandler = () => {
        setMenuIsOpen(prevState => !prevState);
    };

    return (
        <nav className='flex flex-col sticky top-0 left-0 z-[999]'>
            <div
                className={`h-14 md:h-24 bg-white flex items-center justify-between md:justify-start 
                p-4 lg:px-24 z-[99999] w-full ${scroll && !menuIsOpen ? 'shadow-xl' : ''} transition-all duration-200`}>
                <NavBarLogo />
                <div
                    className='w-full flex justify-end md:justify-center font-[14px]'>
                    <NavlinkWrapper className='hidden md:flex gap-x-8' />
                    <NavBarButton onClick={openMenuHandler} menuIsOpen={menuIsOpen} />
                </div>
                <div className='w-[50px] md:w-[154px] hidden md:inline-block'></div>
            </div>
            <NavlinkWrapper className={`h-[144px] bg-white md:hidden flex flex-col items-end gap-y-2 p-4 fixed w-full
                transition-all duration-200 z-[800] 
                ${menuIsOpen ? 'top-12 opacity-[100%]' : 'top-[-100%] opacity-0'}`}
            />
        </nav >
    );
};

export default NavBar;