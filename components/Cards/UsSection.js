import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Styles from './UsCard.module.css';

const UsCard = () => {
    const [data, setdata] = useState([]);
    const [convert, setconvert] = useState(false);

    useEffect(() => {
        async function loadData() {
            if (window.localStorage.getItem('usdataTime') != null) {
                if (new Date(window.localStorage.getItem('usdataTime')).getHours() + 1 < new Date().getHours()) {
                    window.localStorage.removeItem('usdata');
                    window.localStorage.removeItem('usdataTime');
                }
            }
            if (window.localStorage.getItem('usdata') != null) {
                setdata(JSON.parse(window.localStorage.getItem('usdata')))
            } else {
                const us = await fetch('https://swagger.city-edge-developments.com/api/Home/GetVideoSection', {
                    method: "get",
                    headers: {
                        'LanguageCode': 'ar'
                    }
                })
                const usdata = await us.json()
                setdata(usdata.data);
                window.localStorage.setItem('usdata', JSON.stringify(usdata.data));
                window.localStorage.setItem('usdataTime', new Date());
            }
        }

        loadData();
    }, []);
    useEffect(() => {
        data && data.isVideo ? document.querySelector('#video').innerHTML = data.videoLink : ''
    }, [data]);

    if (data) {
        return (
            <>
                <div className="pc">
                    <section className={Styles.us}>
                        <div className={Styles.content}>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <Button path={data.link ? data.link : '/'} text='المزيد' />
                        </div>
                        <div className={Styles.img} id="video">
                            {
                                data.isVideo ? ''
                                    :
                                    <>
                                        <div className='pc'>
                                            <img src={data.pcImage} alt="" loading="lazy" />
                                        </div>
                                        <div className='mob'>
                                            <img src={data.mobileImage} alt="" loading="lazy" />
                                        </div>
                                    </>

                            }
                        </div>
                    </section>
                </div>
                <div className="mob">
                    <section className={Styles.us}>
                        <div className={Styles.content}>
                            <h3>{data.title}</h3>
                            <div className={Styles.img} id="video">
                                {
                                    data.isVideo ? ''
                                        :
                                        <>
                                            <div className='pc'>
                                                <img src={data.pcImage} alt="" loading="lazy" />
                                            </div>
                                            <div className='mob'>
                                                <img src={data.mobileImage} alt="" loading="lazy" />
                                            </div>
                                        </>

                                }
                            </div>
                            <p>{data.description}</p>
                            <Button path={data.link ? data.link : '/'} text='المزيد' />
                        </div>
                    </section>
                </div>
            </>
        )
    } else {
        return <></>
    }
}
export default UsCard