import React from 'react';
import s from './TabletNav.module.scss';

const TabletNav = () => {
    return (
        <nav className={s.wrapper}>
            <ul className={s.list}>
                <li className={s.item}>
                    <a href="#" className={s.link}>Videos</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Websites</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Logos</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Mockups</a>
                </li>
                <li className={s.item}>
                    <a href="#" className={s.link}>Designs</a>
                </li>
            </ul>
        </nav>
    );
};

export default TabletNav;