import React from 'react';
import s from './MenuItem.module.scss';
import ArrowIcon from "@/icons/ArrowIcon.jsx";
import VideoIcon from "@/icons/VideoIcon.jsx";
import BrowseIcon from "@/icons/BrowseIcon.jsx";
import classNames from "classnames";

const MenuItem = ({ title }) => {
    const isAi = title.toLowerCase().includes('ai');

    const renderAiDropdown = () => (
        <ul className={s.ai__list}>
            <li className={s.dropdown__item}>
                <a href="#" className={s.dropdown__navLink}>AI Business Name Generator</a>
            </li>
            <li className={s.dropdown__item}>
                <a href="#" className={s.dropdown__navLink}>AI Logo Maker</a>
            </li>
        </ul>
    );

    const renderDefaultDropdown = () => (
        <>
            <div className={classNames(s.dropdown__head, { [s[title]]: title })}>
                <a className={s.dropdown__link}>
                    <span className={s.dropdown__icon}><VideoIcon /></span>
                    <span className={s.dropdown__title}>Create Video</span>
                </a>
            </div>
            <div className={s.dropdown__body}>
                {['Categories', 'Featured'].map((section) => (
                    <div className={s.dropdown__wrap} key={section}>
                        <div className={s.dropdown__subtitle}>{section}</div>
                        <ul className={s.dropdown__list}>
                            {Array.from({ length: 10 }, (_, i) => (
                                <li className={s.dropdown__item} key={i}>
                                    <a href="#" className={s.dropdown__navLink}>
                                        {section === 'Categories' ? 'Music Visualizations' : 'Animated Explainers'}
                                    </a>
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
        </>
    );

    return (
        <li className={s.wrapper}>
            <div className={s.trigger}>
                <div className={s.name}>{title}</div>
                <div className={s.caret}><ArrowIcon /></div>
            </div>
            <div className={s.dropdown}>
                {isAi ? renderAiDropdown() : renderDefaultDropdown()}
            </div>
        </li>
    );
};

export default MenuItem;

