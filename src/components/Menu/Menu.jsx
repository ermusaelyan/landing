import React from 'react';
import s from './Menu.module.scss';
import MenuItem from "@/components/Menu/components/MenuItem/MenuItem.jsx";

const Menu = () => {
    return (
        <nav className={s.wrapper}>
            <ul className={s.list}>
                <MenuItem />
            </ul>
        </nav>
    );
};

export default Menu;