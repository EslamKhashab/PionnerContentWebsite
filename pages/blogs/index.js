import styles from '../../styles/Home.module.css'
import commonStyles from "../../components/home/Common.module.css"
import BlogsCard from "../../components/Cards/BlogsCard";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const blogsListing = ({lang}) => {
    const [data, setdata] = useState([]);
    // const [totalCount, setTotalCount] = useState(1);
    const [page, setPage] = useState(0);
    const router = useRouter();

    useEffect(() => {
        async function loadData() {
            let link = 'https://swagger.pioneer.city-edge-developments.com/api/Blog/ListBlogHome';
            if (router.asPath.split('?')[1] != null) {
                let tag = router.asPath.split('?')[1];
                if (/^\d+$/.test(tag.split('=')[1])) {
                    link = 'https://swagger.pioneer.city-edge-developments.com/api/Blog/ListBlogHome?TagId=' + tag.split('=')[1];
                }
            }
            // let link = 'https://swagger.pioneer.city-edge-developments.com/api/Blog/ListBlogHome?TagId=' + id;
            const listBlogHome = await fetch(link, {
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
            const blogs = await listBlogHome.json()

            setdata(blogs.data)
        }
        loadData();
    }, [page, lang]);

    if (data) {
        return (
            <>
                <Head>

                    <title>Blogs</title>
                    {/* <meta name="description" content={data.metatagDescription} />
                    <meta name="keywords" content={data.keywords} /> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/logo.ico" />
                </Head>
                <main className={styles.main}>
                    <div className={commonStyles.bg}>
                        <div className={commonStyles.RealeStateContainer}>
                            {
                                lang == 'ar' ?
                                <h2 className={commonStyles.title}> أحدث المقالات من بايونير</h2>
                                :
                                <h2 className={commonStyles.title}>Latest Articles From Pioneer</h2>
                            }
                            <div className={`${commonStyles.grid} ${lang == 'en' ? commonStyles.en:''}`}>
                                {
                                    data ? data.items && data.items.map((blog) => (
                                        <BlogsCard blog={blog} key={blog.id} lang={lang} />
                                    )) : <></>
                                }
                            </div>
                            {
                                data.totalcount > 1 ?
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
                        </div>
                    </div>
                </main>
            </>
        )
    } else {
        return <></>
    }
}

export default blogsListing