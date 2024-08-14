import React from 'react';
import s from './MenuItem.module.scss';
import ArrowIcon from "@/icons/ArrowIcon.jsx";
import VideoIcon from "@/icons/VideoIcon.jsx";

const MenuItem = () => {
    return (
        <li className={s.wrapper}>
            <div className={s.trigger}>
                <div className={s.name}>Videos</div>
                <div className={s.caret}>
                    <ArrowIcon />
                </div>
            </div>
            <div className={s.dropdown}>
                <div className={s.dropdown__head}>
                    <a className={s.dropdown__link}>
                        <span className={s.dropdown__icon}>
                            <VideoIcon />
                        </span>
                        <span className={s.dropdown__title}>Create Video</span>
                    </a>
                </div>
            </div>
        </li>
    );
};

export default MenuItem;