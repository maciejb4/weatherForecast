import {Card, Tab, Table, Tabs} from "react-bootstrap";
import {useEffect, useState} from "react";
import { BsSunset, BsSunrise } from 'react-icons/bs'
import { IconContext } from "react-icons";
import './WeatherSpecific.css';


export const WeatherSpecific = (props: any) => {

    const [weekday,setWeekday] = useState<any>();
    const sunrise = new Date(props.data.el.sunrise*1000).toLocaleTimeString();
    const sunset = new Date(props.data.el.sunset*1000).toLocaleTimeString();

    useEffect(() => {
        const date = new Date();
        date.setDate(date.getDate() + props.data.index);
        const weekday = date.toLocaleDateString('en-en', { weekday: 'long' });
        setWeekday(weekday);
    },[props.data.index]);

    return(
        <Card bg='Dark' style={{width: '50rem'}}>
            <div className="row" style={{paddingTop:'10px'}}>
                <div className="col-md-4 col-12">
                    <div style={{padding:'1rem',textAlign:'center'}}>
                        <Card.Title>{weekday}</Card.Title>
                        <div style={{height:'7rem'}}>
                            <img src={`http://openweathermap.org/img/wn/${props.data.el.weather[0].icon}@2x.png`}/>
                        </div>
                        <Card.Title>{Math.round(props.data.el.temp.day)}</Card.Title>
                    </div>
                </div>
                <div className="col-md-8 col-12">
                    <Tabs defaultActiveKey="temperature" className="mb-3">
                        <Tab eventKey="temperature" title="Temperature" className="temperature-tab">
                            <Table borderless>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Morning</th>
                                    <th>Afternoon</th>
                                    <th>Evening</th>
                                    <th>Night</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Temperature</td>
                                    <td>{Math.round(props.data.el.temp.morn)} °C</td>
                                    <td>{Math.round(props.data.el.temp.day)} °C</td>
                                    <td>{Math.round(props.data.el.temp.eve)} °C</td>
                                    <td>{Math.round(props.data.el.temp.night)} °C</td>
                                </tr>
                                <tr>
                                    <td>Feels Like</td>
                                    <td>{Math.round(props.data.el.feels_like.morn)} °C</td>
                                    <td>{Math.round(props.data.el.feels_like.day)} °C</td>
                                    <td>{Math.round(props.data.el.feels_like.eve)} °C</td>
                                    <td>{Math.round(props.data.el.feels_like.night)} °C</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="sun-journey" title="Sun journey">
                            <div style={{display:'flex',alignItems:'center',height:'9rem'}}>
                                <div style={{flexBasis:'50%',display:'flex',alignItems:'center'}}>
                                    <IconContext.Provider value={{ size: '5rem' }}>
                                        <BsSunrise/>
                                    </IconContext.Provider>
                                    <h4 style={{marginLeft:'1rem'}}>{sunrise}</h4>
                                </div>
                                <div style={{flexBasis:'50%',display:'flex',alignItems:'center'}}>
                                    <IconContext.Provider value={{ size: '5rem' }}>
                                        <BsSunset/>
                                    </IconContext.Provider>
                                    <h4 style={{marginLeft:'1rem'}}>{sunset}</h4>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Card>
    )
}