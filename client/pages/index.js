import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CardClima } from '../components/CardClima/CardClima';
import styles from '../styles/Home.module.css';
import { Input } from 'reactstrap';

export default function Home() {

  const handleClick = (event) => {
    const element = document.getElementById('city');
    const inputCity = event.target.id !== 'button' ? event.target.innerHTML : (element.value != '' ? element.value : null);
    if (inputCity !== null)
      axios.post('/api/search', { name: inputCity })
        .then(response => {
          setRes(response.data);
          callApi();
        });
  }

  const callApi = () => {
    axios.get('/api/search')
      .then(response => {
        if (response.status !== 200) alert(response.message);

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
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
                    <Input type="text" id="city" className={styles.input} />
                    <input type="button" value="Buscar" onClick={handleClick} className={styles.button} id="button" />
                  </div>
                  {
                    cities.map(city => {
                      return <div onClick={handleClick} className={styles.city} key={city.id}>
                        <a><h5>{city.name}, {city.country}</h5></a>
                      </div>;
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
        <div className={styles.license}>Favicon feito por &nbsp;<a href="https://www.freepik.com" title="Freepik" ><span> Freepik</span></a></div>
      </footer>
    </div>
  )
}
