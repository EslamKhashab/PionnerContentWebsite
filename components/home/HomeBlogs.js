import { useEffect, useState } from 'react';
import BlogsCard from "../Cards/BlogsCard";
import commonStyles from "./Common.module.css"

export default function HomeBlogs() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function loadData() {
      if (window.localStorage.getItem('listBlogHomeTime') != null) {
        if (new Date(window.localStorage.getItem('listBlogHomeTime')).getHours() + 1 < new Date().getHours()) {
          window.localStorage.removeItem('listBlogHome');
          window.localStorage.removeItem('listBlogHomeTime');
        }
      }
      if (window.localStorage.getItem('listBlogHome') != null) {
        setdata(JSON.parse(window.localStorage.getItem('listBlogHome')))
      } else {
        const listBlogHome = await fetch('https://swagger.city-edge-developments.com/api/Home/ListHomeBlogs', {
          method: "get",
          headers: {
            'LanguageCode': 'ar'
          }
        })
        const blogs = await listBlogHome.json()
        window.localStorage.setItem('listBlogHome', JSON.stringify(blogs.data));
        window.localStorage.setItem('listBlogHomeTime', new Date());
        setdata(blogs.data)
      }
    }

    loadData();
  }, []);
  return (
    <div className={commonStyles.bg}>
      <div className={commonStyles.RealeStateContainer}>
        <h2 className={commonStyles.title}> أحدث المقالات من بايونير</h2>
        <div className={commonStyles.grid}>
          {
            data && data.map((blog) => {
              return (
                <BlogsCard blog={blog} key={blog.id} />
              )
            })
          }
        </div>
      </div>
    </div>

  )
}