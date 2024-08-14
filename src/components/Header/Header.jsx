import React from 'react';
import s from './Header.module.scss';
import LogoIcon from "@/icons/LogoIcon.jsx";
import Menu from "@/components/Menu/Menu.jsx";

const Header = () => {
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