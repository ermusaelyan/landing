import React from 'react';
import s from './Features.module.scss';
import Feature from "@/components/Features/components/Feature/Feature.jsx";


const Features = () => {
    return (
        <section className={s.wrapper}>
            <h2 className={s.title}>Main Features of Renderforest’s Sound Wave Visualizer</h2>
            <div className={s.cards}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <Feature key={i} />
                ))}
            </div>
        </section>
    );
};

export default Features;