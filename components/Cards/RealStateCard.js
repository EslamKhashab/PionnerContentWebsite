import Link from 'next/link';
import styles from "./RealStateCard.module.css";

export default function RealStateCard({ project }) {

    return (
        <>
            <div className={`${styles.RealeStateCard} blogsProjectsListingItem`}>
                <div className={styles.RealeStateInfo}>
                    {/* en */}
                    {/* <Link href={`/projects/${project.isCommercial ? 'commerial' : 'noncommerial'}/${project.cityName.replace(' ','_')}/${project.url}`} target="_blank"> */}
                    <Link href={`/projects/${project.isCommercial ? 'commerial' : 'noncommerial'}/${project.cityName.replace(' ','_')}/${project.url}`} target="_blank">
                        <a>
                            <div className={` ${styles.RealeStateWrapper} blogsProjectsListingItemWrapper`}>
                                <div className={styles.imageBg + " imageBg"}>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <h3 className={styles.projectName}>{project.name}</h3>
                            <h4 className={styles.minPrice}>اسعار تبدأ من {project.price}</h4>
                        </a>
                    </Link>
                    <div className={styles.RealeStateTag}>
                        <Link href={`/projects/${project.isCommercial ? 'commerial' : 'noncommerial'}/${project.cityName.replace(' ','_')}`}>
                            <a>
                                <h3 className={styles.RealeStateCity}><span>{project.cityName}</span></h3>
                            </a>
                        </Link>
                    </div>
                    <style jsx>{`
              .imageBg{
                background-image: url(${project.pcImage ? project.pcImage : ''});
              }
              @media screen and (max-width: 786px) {
                .imageBg{
                    background-image: url(${project.mobileImage ? project.mobileImage : project.pcImage ? project.pcImage : ''});
                  }
              }
            `}</style>
                </div>
            </div>
        </>
    )
}

