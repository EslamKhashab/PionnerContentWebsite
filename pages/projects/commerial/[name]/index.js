import mainStyle from '../../../../styles/Home.module.css';
import commonStyles from '../../../../components/home/Common.module.css';
import RealStateCard from '../../../../components/Cards/RealStateCard';
import styles from '../../../../components/list/Projects.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

const ProjectsListing = () => {
    const router = useRouter();
    const { name } = router.query;
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (name) {
            async function loadData() {
                const id = window.localStorage.getItem(`${name}-${router.pathname.split('/')[2]}`);
                let link = 'https://swagger.pioneer.city-edge-developments.com/api/Project/ListProject?CityId=' + id + '&IsCommercial=true';
                const listProjects = await fetch(link, {
                    method: "POST",
                    headers: {
                        'LanguageCode': 'ar',
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
    }, [page, name]);
    return (
        <>
            <Head>
                <title>{name}</title>
                <link rel="icon" href="/logo.ico" />
            </Head>
            <main className={mainStyle.main}>
                <div className={styles.cover}>
                    <div className={styles.background}>
                        <div className={styles.container}>
                            <h3 className={styles.superTitle}>الرئيسية /</h3>
                            <h1 className={styles.title}>{name ? name.replace('_', ' ') : ''}</h1>
                        </div>
                    </div>
                </div>
                <div className={commonStyles.RealeStateContainer}>
                    <div className={commonStyles.grid}>
                        {
                            data ? data.items && data.items.map((project) => (
                                <RealStateCard project={project} key={project.id} />
                            )) :
                                <div className="noItems">
                                    No Projects
                                </div>
                        }
                    </div>
                </div>
                {
                    data && data.totalcount > 1 ?
                        <div className={commonStyles.swipContainer}>
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