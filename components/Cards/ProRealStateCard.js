import React from 'react';
import Link from 'next/link';
import styles from "./ProRealStateCard.module.css";

const ProRealStateCard = ({ city }) => {

  return (
    <>
      <Link href={`/projects/${city.isCommercial ? 'commerial' : 'noncommerial'}/${city.cityName ? city.cityName.replace(' ','_') : city.name.replace(' ','_')}`} target="_blank">
        <a className={styles.outerLink}>
          <div className="pc">
            <img src={city.pcImage ? city.pcImage : ''} alt="" className={styles.ProRealeStateCard} loading="lazy" />
          </div>
          <div className="mob">
            <img src={city.mobileImage ? city.mobileImage : city.pcImage ? city.pcImage : ''} alt="" className={styles.ProRealeStateCard} loading="lazy" />
          </div>
          <div className={styles.overLay}></div>
          <div className={styles.ProRealeStateInfo}>
            <h2 className={styles.ProRealeStateName}>{city.name}</h2>
            <h3 className={styles.ProRealeStateCount}>
              {
                city.projectCount > 2 && city.projectCount < 10 ?
                  <span>{city.projectCount} مشاريع</span>
                  :
                  <span>{city.projectCount} مشروع</span>
              }
            </h3>
          </div>
        </a>
      </Link>
    </>
  )
}
export default ProRealStateCard