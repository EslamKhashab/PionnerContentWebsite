import { useEffect, useState } from 'react';
import RealStateCard from "../Cards/RealStateCard"
import styles from "./HomeRealState.module.css";
import commonStyles from "./Common.module.css"

const HomeRealState = () => {
    const [showcase, setShowcase] = useState("");
    const [nonRes, setnonRes] = useState([]);
    const [dataList, setdataList] = useState([]);
    const [arr, setarr] = useState([]);

    useEffect(() => {
        async function loadData() {
            if (window.localStorage.getItem('nonCommercialListTime') != null) {
                if (new Date(window.localStorage.getItem('nonCommercialListTime')).getHours() + 1 < new Date().getHours()) {
                    window.localStorage.removeItem('nonCommercialList');
                    window.localStorage.removeItem('nonCommercialListTime');
                }
            }
            if (window.localStorage.getItem('nonCommercialList') != null) {
                setnonRes(JSON.parse(window.localStorage.getItem('nonCommercialList')))
            } else {
                const nonResReq = await fetch('https://swagger.city-edge-developments.com/api/Home/ListFilterType?IsCommercial=false', {
                    method: "get",
                    headers: {
                        'LanguageCode': 'ar'
                    }
                })
                const nonResRes = await nonResReq.json()
                setnonRes(nonResRes.data);
                window.localStorage.setItem('nonCommercialList', JSON.stringify(nonResRes.data));
                window.localStorage.setItem('nonCommercialListTime', new Date());
            }
        }

        loadData();
    }, []);
    useEffect(() => {

        if (nonRes.length) {
            setShowcase(nonRes[0].name);
            nonRes.map(item => {
                let link = 'https://swagger.city-edge-developments.com/api/Home/ListHomeProjects/' + item.id + '?IsCommercial=false';
                let listItem = fetch(link, {
                    method: "get",
                    headers: {
                        'LanguageCode': 'ar'
                    }
                }).then(res => res.json())
                    .then(da => {
                        if (da.data.length) {
                            setdataList(da.data)
                        }
                    })
            })
        }

    }, [nonRes]);
    useEffect(() => {
        setarr([...arr, ...dataList])
    }, [dataList]);

    let ShowcaseArray = () => {
        let ret = []
        nonRes.map(item => {
            if (showcase === item.name) {
                ret = arr.filter(arrItem => arrItem.cityName == item.name)
            }
        })
        return ret;
    }

    if (nonRes.length) {
        return (
            <div className={styles.bg}>
                <div className={commonStyles.RealeStateContainer}>
                    <h2 className={styles.title}>المشاريع العقارية المميزة</h2>
                    <h3 className={styles.subTitle} dir="rtl">
                        {
                            nonRes.map((item) => (
                                <div
                                    key={item.id}
                                    className={`${styles.category} ${showcase == item.name && styles.activeCategory}`}
                                    onClick={() => setShowcase(item.name)}
                                >
                                    {item.name}
                                </div>
                            ))
                        }
                    </h3>
                    <div className={commonStyles.grid}>
                        {
                            ShowcaseArray().map((project) => (
                                <RealStateCard project={project} key={project.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}
export default HomeRealState