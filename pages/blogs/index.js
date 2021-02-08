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
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148363005-1"></script>
<script dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-148363005-1');`
}}
>
</script>
<script dangerouslySetInnerHTML={{
  __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '806077823314147');
fbq('track', 'PageView');`}}>
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=806077823314147&ev=PageView&noscript=1"
/></noscript>
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