import { useEffect, useState } from 'react';
import useParams from 'react-router';


const Earthquake = props => {
    const {eventid}= useParams();
    const [location, setLocation] = useState(eventid);
    const [earthquake, setWeather] = useState({
        place: "10km WNW of The Geysers, CA",
        time: 1642025636650,
        latitude: "38.8265",
        longitude: "-122.8573333",
        magnitude: "1.47"
    });

    const updateEarthquake = async () => {
        
        const res = await fetch('https: earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&endtime=2022-12-01&limit=10')
        const data = await res.json();
        const newEarthquake = {
            place: data.properties.place,
            time: data.properties.time,
            latitude: data.origin.properties.latitude,
            longitude: data.origin.properties.longitude,
            magnitude: data.origin.properties.magnitude
        }
       
        setWeather(newEarthquake)
    }

    useEffect(() => {
        updateEarthquake()
    }, [location])

    return (
        <div className="weather-container">
            <div className='search-area'>
               
            </div>
            
                <h1>{earthquake.place}</h1> 
                <h2>{earthquake.time}</h2> 
                <h3>{earthquake.latitude}</h3> 
                <h3>{earthquake.longitude}</h3> 
                <h3>{earthquake.magnitude}</h3> 
            
        </div>
    )
}

export default Earthquake;