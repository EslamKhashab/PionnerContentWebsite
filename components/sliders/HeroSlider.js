import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, lazy } from 'swiper';
import "swiper/swiper-bundle.css";
import styles from "./heroSlider.module.css";
import Button from '../Button/Button';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

const HeroSlider = ({lang, flag}) => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        async function loadData() {
            if (window.localStorage.getItem('ListSlidersTime') != null) {
                if (new Date(window.localStorage.getItem('ListSlidersTime')).getMinutes() + 5 < new Date().getMinutes()) {
                    window.localStorage.removeItem('ListSliders');
                    window.localStorage.removeItem('ListSlidersTime');
                }
            }
            if (window.localStorage.getItem('ListSliders') != null && !flag) {
                setdata(JSON.parse(window.localStorage.getItem('ListSliders')))
            } else {
                const ListSliders = await fetch('https://swagger.pioneer.city-edge-developments.com/api/Slider/ListSliders', {
                    method: "get",
                    headers: {
                        'LanguageCode': lang == 'ar' ? 'ar' : 'en'
                    }
                })
                const Sliders = await ListSliders.json()
                window.localStorage.setItem('ListSliders', JSON.stringify(Sliders.data));
                window.localStorage.setItem('ListSlidersTime', new Date());
                setdata(Sliders.data);
            }
        }

        loadData();
    }, [flag]);

    if (data) {
        return (
            <div className={`${styles.container} heroSlider`}>
                <Swiper
                    effect="fade"
                    speed={2000}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    pagination={{ clickable: true }}
                    draggable={true}
                    lazy={true}
                    preloadImages={false}
                >
                    {
                        data.map((project, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className={`${styles.slide} ${lang == 'en' ? styles.en: ''} swiper-lazy`} style={{ backgroundImage: `url(${project.pcImage})` }} data-background={project.pcImage}>
                                        <div className={styles.slideOverlay}>
                                            <div className={styles.slideContainer}>
                                                <h1 className={styles.title}>{project.title}</h1>
                                                <h1 className={styles.superTitle}>{project.subTitle}</h1>
                                                <div className={styles.eventUrl}>
                                                    <Button path={`${project.link ? project.link : '/'} `} text={lang == 'ar' ? "المزيد" : 'More'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div >
        );
    } else {
        <div className="loading">
            loading...
        </div>
    }
}
export default HeroSlider;