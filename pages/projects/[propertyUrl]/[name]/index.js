import mainStyle from '../../../../styles/Home.module.css';
import commonStyles from '../../../../components/home/Common.module.css';
import RealStateCard from '../../../../components/Cards/RealStateCard';
import styles from '../../../../components/list/Projects.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

const ProjectsListing = ({ lang }) => {
    const router = useRouter();
    const { name, propertyUrl } = router.query;
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (name) {
            async function loadData() {
                const id = window.localStorage.getItem(`${name}-${propertyUrl}`);
                let link = 'https://swagger.pioneer.city-edge-developments.com/api/Project/ListProject?CityId=' + id + '&PropertyTypeUrl=' + propertyUrl;
                const listProjects = await fetch(link, {
                    method: "POST",
                    headers: {
                        'LanguageCode': lang == 'ar' ? 'ar' : 'en',
                        'content-type': 'application/json'
                    },
                    body:
                        JSON.stringify({
                            pageNumber: page,
                            pageSize: 12
                        })
                })
                const projects = await listProjects.json()
                // setPage(projects.data.paginationCount)
                if (projects.isError) {
                    router.push('/404');
                } else {
                    setdata(projects.data)
                }
            }
            loadData();
        }
    }, [page, name,lang]);
    return (
        <>
            <Head>
                <title>{name}</title>
                <link rel="icon" href="/logo.ico" />
            </Head>
            <main className={mainStyle.main}>
                <div className={styles.cover}>
                    <div className={styles.background}>
                        <div className={`${styles.container} ${lang == 'en' ? styles.en : ''}`}>
                            {
                                lang == 'ar' ?
                                    <h3 className={styles.superTitle}>الرئيسية /</h3>
                                    :
                                    <h3 className={styles.superTitle}>Home /</h3>
                            }
                            <h1 className={styles.title}>{name ? name.replace('-', ' ') : ''}</h1>
                        </div>
                    </div>
                </div>
                <div className={commonStyles.RealeStateContainer}>
                    <div className={`${commonStyles.grid} ${lang == 'en' ? commonStyles.en : ''}`}>
                        {
                            data ? data.items && data.items.map((project) => (
                                <RealStateCard project={project} key={project.id} lang={lang} />
                            )) :
                                <div className="noItems">
                                    No Projects
                                </div>
                        }
                    </div>
                </div>
                {
                    data && data.totalcount > 1 ?
                        <div className={`${commonStyles.swipContainer} ${lang == 'en' ? commonStyles.en : ''}`}>
                            {
                                page < data.totalcount ?
                                    <div className={commonStyles.left}>
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <path d="M11.0775 5.24417L6.32167 10L11.0775 14.7558L12.2558 13.5775L8.67833 10L12.2558 6.4225L11.0775 5.24417Z" fill="white" />
                                        </svg>
                                    </div> :
                                    <div onClick={() => setPage(page + 1)}>
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <path d="M11.0775 5.24417L6.32167 10L11.0775 14.7558L12.2558 13.5775L8.67833 10L12.2558 6.4225L11.0775 5.24417Z" fill="white" />
                                        </svg>
                                    </div>
                            }
                            {
                                !page ?
                                    <div className={`${commonStyles.right} ${commonStyles.active}`}>
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <path d="M11.0775 5.24417L6.32167 10L11.0775 14.7558L12.2558 13.5775L8.67833 10L12.2558 6.4225L11.0775 5.24417Z" fill="white" />
                                        </svg>
                                    </div> :
                                    <div className={commonStyles.right} onClick={() => setPage(page - 1)}>
                                        <svg viewBox="0 0 20 20" fill="none">
                                            <path d="M11.0775 5.24417L6.32167 10L11.0775 14.7558L12.2558 13.5775L8.67833 10L12.2558 6.4225L11.0775 5.24417Z" fill="white" />
                                        </svg>
                                    </div>
                            }
                        </div> :
                        <></>
                }
            </main>
        </>
    )
}
export default ProjectsListing