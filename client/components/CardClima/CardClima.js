import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faTemperatureHigh, faTint } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import styles from './card.module.css';

export const CardClima = ({ data }) => {
    return (
        <div>
            <Card className={styles.main}>
                <div className={styles.container}>
                    <div className="col-4">
                        <img className={styles.image} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="imagem condição climática" />
                    </div>
                    <div className="col-8">
                        <CardTitle tag="h5" className={styles.title}>{data.name}, {data.sys.country}</CardTitle>
                        <CardBody>
                            <h6>
                                <FontAwesomeIcon className={styles.icon} icon={faTemperatureHigh} />: {data.main.temp}°C
                            </h6>
                            <h6>
                                <FontAwesomeIcon className={styles.iconTint} icon={faTint} />: {data.main.humidity}
                            </h6>
                            <h6>
                                <FontAwesomeIcon className={styles.icon} icon={faCloudSun} />: {data.weather[0].description}
                            </h6>
                        </CardBody>
                    </div>
                </div>
            </Card>
        </div>
    );
}