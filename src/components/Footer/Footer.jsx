import React from 'react';
import s from './Footer.module.scss';
import FooterLogoIcon from "@/icons/FooterLogoIcon.jsx";
import TwitterIcon from "@/icons/TwitterIcon.jsx";

const Footer = () => {
    return (
        <footer className={s.wrapper}>
            <div className={s.container}>
                <div className={s.logo}>
                    <a href="" className={s.logo__link}>
                    <span className={s.logo__icon}>
                        <FooterLogoIcon />
                    </span>
                    </a>
                </div>
                <div className={s.copyright}>Renderforest © 2013 - 2024</div>
                <ul className={s.social__list}>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <li className={s.social__item}>
                            <a href="#" className={s.social__link}>
                            <span className={s.social__icon}>
                                <TwitterIcon />
                            </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;