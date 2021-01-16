import Head from 'next/head'
import styles from '../projects/Projects.module.css'
import Similiar from '../../components/SimiliarSlider/Similiar';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const Developer = () => {
    const router = useRouter();
    const { url } = router.query;
    const [data, setdata] = useState({});
    const [urllink, seturllink] = useState('');
    const [img, setImg] = useState('');


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        if (url) {
            async function loadData() {
                let link = "https://swagger.city-edge-developments.com/api/Developer/GetDeveloper/" + url;
                const DeveloperDestails = await fetch(link, {
                    method: "get",
                    headers: {
                        'LanguageCode': 'ar'
                    }
                })
                const res = await DeveloperDestails.json();
                if (res.isError) {
                    router.push('/404');
                } else {
                    setdata(res.data);
                }
            }
            loadData();
            seturllink(window.location.href);
        }
    }, [url])

    function convert(text) {
        document.querySelector('#text').innerHTML = text;
    }

    useEffect(() => {
        if (data != undefined && data != null) {
            if (Object.keys(data).length != 0 && data.constructor === Object) {
                setImg(data.pcImage)
            }
        }
    }, [data]);

    if (data) {
        return (
            <>
                <Head>
                    <title>{data.metatagTitle ? data.metatagTitle : data.url}</title>
                    <meta name="description" content={data.metatagDescription ? data.metatagDescription : ''} />
                    <meta name="keywords" content={data.keyword ? data.keyword : ''} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/logo.ico" />
                    <meta property="og:url" content={urllink} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={data.metatagTitle ? data.metatagTitle : data.name} />
                    <meta property="og:description" content={data.metatagDescription ? data.metatagDescription : ''} />
                    <meta property="og:image" content={img ? img : ''} />
                </Head>
                <main className={styles.main} dir="rtl">
                    <div className={`${styles.project_cont} ${styles.dev_cont}`}>
                        <div className={styles.content}>
                            <div className={styles.list_content}>
                                <div id="text"></div>
                                {
                                    data.description && convert(data.description)
                                }
                            </div>
                        </div>
                        <div className={`${styles.aside_container} ${styles.developeraside}`}>
                            <div className={styles.aside}>
                                <div className={styles.devimg}>
                                    <div className={styles.pc}>
                                        <img src={data.pcImage} alt="developer" loading="lazy" />
                                    </div>
                                    <div className={styles.mob}>
                                        <img src={data.mobileImage} alt="developer" loading="lazy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.similiar}>
                        <h1 className={styles.title}> مشروعات شركة {data.name} </h1>
                        <Similiar list={data.relatedProjects} />
                    </div>
                </main>
            </>
        )
    } else {
        return <></>
    }
}

export default Developer;