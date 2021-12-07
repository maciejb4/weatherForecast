import { Card } from "react-bootstrap"
import {useEffect, useState} from "react";


export const WeatherDetails = (props: any) => {

    const [weekday,setWeekday] = useState<any>();

    useEffect(() => {
        const date = new Date();
        date.setDate(date.getDate() + props.index);
        const weekday = date.toLocaleDateString('pl-pl', { weekday: 'long' });
        setWeekday(weekday);
    });

    return (
        <Card bg='Dark' style={{width: '10rem'}}>
            <Card.Body>
                <Card.Title>{weekday}</Card.Title>
               <div style={{height:'5rem'}}>
                   <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}/>
               </div>
                <Card.Title>{Math.floor(props.data.temp.day)}</Card.Title>
            </Card.Body>
        </Card>
    )
}