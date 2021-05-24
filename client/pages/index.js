import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CardClima } from '../components/CardClima/CardClima';
import styles from '../styles/Home.module.css';

export default function Home() {

  const handleClick = () => {
    const inputCity = document.getElementById('city');
    axios.post('/api/search', { name: inputCity.value })
      .then(response => {
        if (response.status !== 200) throw Error(response.message);

        setRes(response.data);
        callApi();
      });
  }

  const callApi = () => {
    axios.get('/api/search')
      .then(response => {
        if (response.status !== 200) throw Error(response.message);

        setCities(response.data);
      })
  };

  const [res, setRes] = useState({});
  const [cities, setCities] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Clima</title>
        <meta name="description" content="Meteorologia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca Clima
        </h1>
        <div className={styles.mainBlock}>
          <div className="row">
            <div className={styles.columns}>
              <div className="col-5">
                <div className={styles.columnLeft}>
                  <div className={styles.inputCard}>
                    <input type="text" id="city" className={styles.input} />
                    <input type="button" value="Buscar" onClick={handleClick} className={styles.button} />
                  </div>
                  {
                    cities.map(city => {
                      return <div className={styles.city} key={city.id}><h5>{city.name}, {city.country}</h5></div>;
                    })
                  }
                </div>
              </div>
              <div className="col-7">
                <div className={styles.columnRight}>
                  {
                    res.name ? <CardClima data={res} /> : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
