import React from 'react';
import s from './Menu.module.scss';
import MenuItem from "@/components/Menu/components/MenuItem/MenuItem.jsx";
import ArrowIcon from "@/icons/ArrowIcon.jsx";
import EnglishIcon from "@/icons/EnglishIcon.jsx";

const titles = ['videos', 'websites', 'logos', 'mockups', 'graphics', 'Explore AI'];

const Menu = () => {
    return (
        <div className={s.wrapper}>
            <nav className={s.wrapper}>
                <ul className={s.list}>
                    {titles.map(title => (
                        <MenuItem key={title} title={title} />
                    ))}
                </ul>
            </nav>
            <div className={s.point}>
                <a href="#" className={s.point__link}>Pricing</a>
            </div>
            <div className={s.point}>
                <span className={s.point__title}>Learn</span>
                <span className={s.point__icon}>
                    <ArrowIcon />
                </span>
            </div>
            <div className={s.point}>
                <span className={s.point__logo}>
                    <EnglishIcon />
                </span>
                <span className={s.point__icon}>
                    <ArrowIcon />
                </span>
            </div>
        </div>
    );
};

export default Menu;