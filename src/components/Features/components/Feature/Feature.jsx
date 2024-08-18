import React from 'react';
import s from './Feature.module.scss';
import NextImage from 'next/image';
import featureImage from './../../../../images/features/feature.png';

const Feature = () => {
    return (
        <article className={s.wrapper}>
            <div className={s.content}>
                <h3 className={s.title}>Large Library of Sound Wave Template</h3>
                <p className={s.description}>Each music and audio project has its own ambiance. With the huge library of templates to choose from, our Sound Wave Generator lets you find and customize a soundwave animation that matches your project’s unique style.</p>
            </div>
            <div className={s.image}>
                <div className={s.image__container}>
                    <NextImage
                        src={featureImage}
                        alt="Large Library"
                        width={532}
                        height={330}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </article>
    );
};

export default Feature;