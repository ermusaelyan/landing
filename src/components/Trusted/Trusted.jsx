import React from 'react';
import s from './Trusted.module.scss';
import StanfordIcon from "@/icons/StanfordIcon.jsx";
import MetaIcon from "@/icons/MetaIcon.jsx";
import BookingIcon from "@/icons/BookingIcon.jsx";
import NikeIcon from "@/icons/NikeIcon.jsx";
import HootsuiteIcon from "@/icons/HootsuiteIcon.jsx";

const Trusted = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.top}>
                <p className={s.description}>Sound Wave Generator <span>Trusted by Our</span> Partners</p>
            </div>
            <div className={s.bottom}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <StanfordIcon />
                    </li>
                    <li className={s.item}>
                        <MetaIcon />
                    </li>
                    <li className={s.item}>
                        <BookingIcon />
                    </li>
                    <li className={s.item}>
                        <NikeIcon />
                    </li>
                    <li className={s.item}>
                        <HootsuiteIcon />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Trusted;