'use client'

import React, {useState} from 'react';
import s from './Menu.module.scss';
import MenuItem from "@/components/Menu/components/MenuItem/MenuItem.jsx";
import ArrowIcon from "@/icons/ArrowIcon.jsx";
import EnglishIcon from "@/icons/EnglishIcon.jsx";
import classNames from "classnames";

const titles = ['videos', 'websites', 'logos', 'mockups', 'graphics'];

const Menu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isAiOpen, setIsAiOpen] = useState(false);

    return (
        <div className={s.wrapper}>
            <div className={classNames(s.point, s.nav, {[s.open] : isNavOpen})} onClick={() => setIsNavOpen(prevState => !prevState)}>
                <div className={s.trigger}>
                    <div className={s.name}>Create</div>
                    <div className={s.caret}><ArrowIcon /></div>
                </div>
                <div className={s.dropdown}>
                    <nav className={s.nav}>
                        <ul className={s.list}>
                            {titles.map(title => (
                                <MenuItem key={title} title={title} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={classNames(s.point, s.ai, {[s.open] : isAiOpen})} onClick={() => setIsAiOpen(prevState => !prevState)}>
                <div className={s.trigger}>
                    <div className={s.name}>Explore AI</div>
                    <div className={s.caret}><ArrowIcon /></div>
                </div>
                <div className={s.dropdown}>
                    <ul className={s.dropdown__list}>
                        <li className={s.dropdown__item}>
                            <a href="#" className={s.dropdown__navLink}>Business Name Generator</a>
                        </li>
                        <li className={s.dropdown__item}>
                            <a href="#" className={s.dropdown__navLink}>AI Logo Maker</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.point}>
                <div className={s.trigger}>
                    <a>Pricing</a>
                </div>
            </div>
            <div className={s.point}>
                <div className={s.trigger}>
                    <div className={s.name}>Learn</div>
                    <div className={s.caret}><ArrowIcon /></div>
                </div>
            </div>
            <div className={s.point}>
                <div className={s.trigger}>
                <div className={s.language__icon}>
                    <EnglishIcon />
                </div>
                <div className={s.language__name}>English</div>
                <div className={s.caret}><ArrowIcon /></div>
            </div>
            </div>
            <div className={s.sign}>
                <button className={s.sign__button}>Sign In</button>
                <button className={classNames(s.sign__button, s.up)}>Try for Free</button>
            </div>
        </div>
    );
};

export default Menu;