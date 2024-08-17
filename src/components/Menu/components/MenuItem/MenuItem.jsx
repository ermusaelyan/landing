'use client'

import React, {useState} from 'react';
import s from './MenuItem.module.scss';
import ArrowIcon from "@/icons/ArrowIcon.jsx";
import VideoIcon from "@/icons/VideoIcon.jsx";
import BrowseIcon from "@/icons/BrowseIcon.jsx";
import classNames from "classnames";
import SideIcon from "@/icons/SideIcon.jsx";

const sections = ['Categories', 'Featured'];
const items = {
    Categories: 'Music Visualizations',
    Featured: 'Animated Explainers',
};

const MenuItem = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={s.wrapper}>
            <div className={s.trigger}>
                <div className={s.name}>{title}</div>
                <div className={s.caret}><ArrowIcon /></div>
            </div>
            <div className={s.dropdown}>
                <div className={classNames(s.dropdown__head, { [s[title]]: title })}
                     onClick={() => setIsOpen(true)}>
                    <a className={s.dropdown__link}>
                        <span className={s.dropdown__icon}><VideoIcon /></span>
                        <span className={s.dropdown__title}>Create Video</span>
                        <span className={s.dropdown__open}>
                            <SideIcon />
                        </span>
                    </a>
                </div>
                <div className={classNames(s.wrap, {[s.open]: isOpen })}>
                    <div className={s.dropdown__body}>
                        <div className={s.side}>
                            <button className={s.side__button} onClick={() => setIsOpen(false)}>
                            <span className={s.side__icon}>
                            <SideIcon />
                        </span>
                            </button>
                            <a href="#" className={s.side__link}>Create video</a>
                        </div>
                        {sections.map(section => (
                            <div className={s.dropdown__wrap} key={section}>
                                <div className={s.dropdown__subtitle}>{section}</div>
                                <ul className={s.dropdown__list}>
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <li className={s.dropdown__item} key={i}>
                                            <a href="#" className={s.dropdown__navLink}>{items[section]}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={s.dropdown__footer}>
                        <a className={s.dropdown__browseLink}>
                            <span className={s.browse__title}>Browse More</span>
                            <span className={s.browse__icon}><BrowseIcon /></span>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default MenuItem;


