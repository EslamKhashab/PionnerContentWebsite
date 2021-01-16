import React, { useEffect, useState } from 'react';
import ProRealStateCard from '../Cards/ProRealStateCard';
import styles from "./HomeProRealState.module.css";
import commonStyles from "./Common.module.css"

const HomeProRealState = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function loadData() {
      if (window.localStorage.getItem('ListMostPopularCitiesTime') != null) {
        if (new Date(window.localStorage.getItem('ListMostPopularCitiesTime')).getHours() + 1 < new Date().getHours()) {
          window.localStorage.removeItem('ListMostPopularCities');
          window.localStorage.removeItem('ListMostPopularCitiesTime');
        }
      }
      if (window.localStorage.getItem('ListMostPopularCities') != null) {
        setdata(JSON.parse(window.localStorage.getItem('ListMostPopularCities')))
      } else {
        const ListMostPopularCities = await fetch('https://swagger.city-edge-developments.com/api/Home/ListMostPopularCities', {
          method: "get",
          headers: {
            'LanguageCode': 'ar'
          }
        })
        const MostPopularCities = await ListMostPopularCities.json()
        window.localStorage.setItem('ListMostPopularCities', JSON.stringify(MostPopularCities.data));
        window.localStorage.setItem('ListMostPopularCitiesTime', new Date());
        setdata(MostPopularCities.data);
      }
    }

    loadData();
  }, []);

  return (
    <div className={commonStyles.RealeStateContainer}>
      <h3 className={styles.superTitle}>إبحث عن منزل أحلامك</h3>
      <h2 className={styles.title}>أشهر المناطق</h2>
      <div className={commonStyles.grid}>
        {
          data && data.slice(0, 6).map((city) => {
            return (
              <ProRealStateCard city={city} key={city.id} />
            )
          })
        }
      </div>
    </div>

  )
}
export default HomeProRealState;