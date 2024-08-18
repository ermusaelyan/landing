'use client'

import React, {useState} from 'react';
import s from './Header.module.scss';
import LogoIcon from "@/icons/LogoIcon.jsx";
import Menu from "@/components/Menu/Menu.jsx";
import classNames from "classnames";
import TabletNav from "@/components/TabletNav/TabletNav.jsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
        setIsMenuOpen(prevState => !prevState);
    };
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.logo}>
                    <a href="#">
                        <LogoIcon />
                    </a>
                </div>
                <Menu openMenu={isMenuOpen} />
                <TabletNav />
                <div className={s.menuToggler}>
                    <button
                        className={classNames(s.menuToggle, { [s.expanded]: isMenuOpen })}
                        onClick={toggleMenu}
                    >
                        <span className={s.line}></span>
                        <span className={s.line}></span>
                    </button>
                </div>
                {isMenuOpen ?
                    <>
                    <div className={s.menuShape} />
                    <div className={s.menuClose} onClick={toggleMenu} />
                    </>
                    : null}
            </div>
        </div>
    );
};

export default Header;