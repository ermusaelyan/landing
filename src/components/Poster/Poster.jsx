import React from 'react';
import s from './Poster.module.scss';
import NextImage from 'next/image'
import posterImage from '../../images/poster/poster.png'
import Equalizer from "@/components/Equalizer/Equalizer.jsx";
const Poster = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.container}>
                <div className={s.content}>
                    <h1 className={s.title}>Sound Wave Generator</h1>
                    <p className={s.description}>Make your audio flow visually with automatically generated sound waves. Whether you’re a musician looking for a quick music video solution or a content creator thinking of sharing your podcast episode on social media, Renderforest’s online Sound Wave Generator is the solution you need.</p>
                    <a href="#" className={s.link}>Animate Sound Waves</a>
                </div>
                <div className={s.content}>
                    <Equalizer />
                    <div className={s.image}>
                        <NextImage
                            src={posterImage}
                            alt="Sound Wave Generator"
                            layout="responsive"
                            width={782}
                            height={434}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Poster;