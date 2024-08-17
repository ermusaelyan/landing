import React from 'react';
import s from './Equalizer.module.scss'

const Equalizer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.equalizer}>
                {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className={s.bar}></div>
                ))}
            </div>
        </div>
    );
};

export default Equalizer;