import { Card } from "react-bootstrap"
import {useEffect, useState} from "react";

import "./WeatherDetails.css";


export const WeatherDetails = (props: any) => {

    const [weekday,setWeekday] = useState<any>();
    const isMobile = window.innerWidth <= 1024;


    useEffect(() => {
        const date = new Date();
        date.setDate(date.getDate() + props.index);
        const weekday = date.toLocaleDateString('en-en', { weekday: 'long' });
        setWeekday(weekday);
    });

    return (
        <Card bg='Dark' className={props.active ? "day-active" : "day"}>
            <Card.Body className="card-body-custom">
                <Card.Title className="day-name">{weekday}</Card.Title>
               <div className="day-body">
                   {!isMobile && (<img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/>)}
                   {isMobile && (<img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}/>)}
               </div>
                <Card.Title>{Math.round(props.data.temp.day)} °C</Card.Title>
            </Card.Body>
        </Card>
    )
}