'use client'

import React, {useState} from 'react';
import s from './Header.module.scss';
import LogoIcon from "@/icons/LogoIcon.jsx";
import Menu from "@/components/Menu/Menu.jsx";
import classNames from "classnames";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
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
                <Menu />
            </div>
        </div>
    );
};

export default Header;