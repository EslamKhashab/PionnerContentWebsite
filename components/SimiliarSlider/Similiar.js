import React from 'react';
import Link from 'next/link';
import styles from "./SimiliarSlider.module.css";
import realstyle from '../Cards/RealStateCard.module.css';

const Similiar = ({ list }) => {
    return (
        <div className={styles.dev}>
            <div className={styles.container}>
                <div className={styles.sliderContainer}>
                    {
                        list && list.map((dev) => {
                            return (
                                <div className={realstyle.RealeStateCard} key={dev.id}>
                                    <Link href={`/projects/${dev.isCommercial ? 'commerial' : 'noncommerial'}/${dev.cityName ? dev.cityName.replace(' ','_') : dev.name.replace(' ','_')}/${dev.url}`} target="_blank">
                                        <div className={realstyle.RealeStateWrapper}>
                                            <div className="pc">
                                                <img className={realstyle.RealeStateImg} src={dev.pcImage} loading="lazy" />
                                            </div>
                                            <div className="mob">
                                                <img className={realstyle.RealeStateImg} src={dev.mobileImage ? dev.mobileImage : dev.pcImage} loading="lazy" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className={realstyle.RealeStateTag}>
                                        <Link href={`/projects/${dev.isCommercial ? 'commerial' : 'noncommerial'}/${dev.cityName ? dev.cityName.replace(' ','_') : dev.name.replace(' ','_')}`}>
                                            <h3 className={realstyle.RealeStateCity}><span>{dev.cityName}</span></h3>
                                        </Link>
                                    </div>
                                    <div className={realstyle.RealeStateInfo}>
                                        <Link href={`/projects/${dev.isCommercial ? 'commerial' : 'noncommerial'}/${dev.cityName ? dev.cityName.replace(' ','_') : dev.name.replace(' ','_')}/${dev.url}`} target="_blank">
                                            <a>
                                                <h3 className={realstyle.projectName}>{dev.name}</h3>
                                                <h4 className={realstyle.minPrice}>اسعار تبدأ من {dev.price}</h4>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default Similiar; 