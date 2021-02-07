import Head from 'next/head'
import styles from '../styles/Home.module.css'

import HeroSlider from "../components/sliders/HeroSlider";
import HomeProRealState from "../components/home/HomeProRealState";
import HomeRealState from "../components/home/HomeRealState";
import HomeRealState2 from "../components/home/HomeRealState2";
import Developers from '../components/sliders/Developers';
import UsCard from "../components/Cards/UsCard";
import UsSection from "../components/Cards/UsSection";
import HomeBlogs from "../components/home/HomeBlogs";

const Home = ({lang, flag}) => {

  return (
    
    <div className={styles.container}>

     { lang=='ar'?
      <Head>
        <title>بايونير العقارية - شاليهات وشقق وفيلات ومكاتب للبيع</title>
        <meta name="description" content="تسويق وبيع شاليهات وشقق وفيلات (الساحل الشمالي - العين السخنة - العاصطة الادارية - القاهرة الجديدة - 6أكتوبر - المنصورة الجديدة)" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      :
      <Head>
        <title>pionner</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* 
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
         */}
       
      </Head>
}
      <main className={styles.main}>

        <HeroSlider lang={lang} flag={flag} />

        <HomeProRealState lang={lang} flag={flag} />

        <HomeRealState lang={lang} flag={flag} />

        <HomeRealState2 lang={lang} flag={flag} />

        {/* just in case , slice the the first 6 blogs in the array */}
        <HomeBlogs lang={lang} flag={flag} />

        <UsSection lang={lang} flag={flag} />

        <UsCard lang={lang} flag={flag} />

        <Developers lang={lang} flag={flag} />
      </main>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const res = await fetch(`https://swagger.pioneer.city-edge-developments.com/api/Slider/ListSliders`)
//   const data = await res.json()

//   return {
//     props: {
//       Sliders : data.data
//     }
//   }
// }


export default Home;