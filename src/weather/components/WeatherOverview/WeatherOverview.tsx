import {Container, Navbar} from "react-bootstrap";
import {WeatherDetails} from "../WeatherDetails/WeatherDetails";
import { useEffect, useState} from "react";
import './WeatherOverview.css';
import {WeatherSpecific} from "../WeatherSpecific/WeatherSpecific";


export const WeatherOverview = (props: any) => {

    const [ weatherData, setWeatherData] = useState<any>(null);
    const [ selectedItem, setSelectedItem ] = useState<any>();

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=52.4064&lon=16.9252&exclude=hourly,minutely&units=metric&lang=pl&appid=e7dbf2490167397151d02b2e61d9f83b')
            .then(res => res.json())
            .then((data) => {
                console.log('data',data);
                setWeatherData(data);
            })
    },[]);

    useEffect(() => {
        weatherData && setSelectedItem({el:weatherData.daily[0],index:0});
    },[weatherData])

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Weather Forecast</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="container-element">
                <div style={{display:'flex',justifyContent:'center'}}>
                    {weatherData?.daily.map((el: any,index: number) => (
                        <div  onClick={() => setSelectedItem({el:el,index:index})}>
                            <WeatherDetails
                                data={el}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="bottom-element">
                {selectedItem && (
                    <WeatherSpecific
                        data={selectedItem}
                    />
                )}
            </div>
        </div>

    )
}