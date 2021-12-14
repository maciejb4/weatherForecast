import {Container, Navbar} from "react-bootstrap";
import {WeatherDetails} from "../WeatherDetails/WeatherDetails";
import { useEffect, useState} from "react";
import './WeatherOverview.css';
import {WeatherSpecific} from "../WeatherSpecific/WeatherSpecific";


export const WeatherOverview = (props: any) => {

    const [ weatherData, setWeatherData] = useState<any>(null);
    const [ selectedItem, setSelectedItem ] = useState<any>();
    const [chosen, setChosen] = useState();

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=52.4064&lon=16.9252&exclude=hourly,minutely&units=metric&lang=pl&appid=e7dbf2490167397151d02b2e61d9f83b')
            .then(res => res.json())
            .then((data) => {
                setWeatherData(data);
            })
    },[]);

    useEffect(() => {
        if(weatherData) {
            setSelectedItem({el:weatherData.daily[0],index:0});
            setChosen(weatherData.daily[0]);
        }
    },[weatherData]);

    const selectItem = (el : any, index : any) => {
        setSelectedItem({el:el,index:index});
        setChosen(el);
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Weather Forecast</Navbar.Brand>
                </Container>
            </Navbar>
            <div className="container-element">
                <div className="inner-container-element">
                    {weatherData?.daily.map((el: any,index: number) => (
                        <div  onClick={() => selectItem(el,index)}
                              style={{cursor: 'pointer'}}
                        >
                            <WeatherDetails
                                data={el}
                                active={el === chosen}
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