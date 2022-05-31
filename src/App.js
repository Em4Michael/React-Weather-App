import React from "react";

import {useState} from "react";
import axios from "axios";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faUser,faLocationDot,faBars,faHouse,faMagnifyingGlass,faCompass} from "@fortawesome/free-solid-svg-icons";

import img3 from "./images/Rain.png";
import img2 from "./images/humidity.png";
import img1 from "./images/Sunny.png";

                
                

function App() {

  const [location, setLocation] = useState('');
  const [data,setData] = useState({});
  const [weather, setWeather] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState('02n');
  const [temp, setTemp] = useState('305.15');
  const [temp_min, setTemp_min] = useState('302.15');
  const [temp_max, setTemp_max] = useState('306.15');
  const [humidity, setHumidity] = useState('50');
  const [wind, setWind] = useState('23');
  const [Gust, setGust] = useState('22');
  const [description, setDescription] = useState('Few Clouds');
  const [city, setCity] = useState('City');
  const [country, setCountry] = useState('Country');


  const link = 'https://api.openweathermap.org/data/2.5/weather'
  const keys = '249d2b45b68604e242df127efa28caa5'
  const Icon = `http://openweathermap.org/img/wn/${icon}@2x.png`
  const send =(event) =>{
    event.preventDefault();
    //console.log(location);
      async function getData(){

        
        
        try{
        const response = await axios.get(`${link}?q=${location}&appid=${keys}`);
        //console.log(response.data);
        
        setData(response.data);
        setWeather(response.data.weather[0].main);
        setIcon(response.data.weather[0].icon);
        setTemp(response.data.main.temp);
        setTemp_min(response.data.main.temp_min);
        setTemp_max(response.data.main.temp_max);
        setWind(response.data.wind.speed);
        setGust(response.data.wind.gust);
        setDescription(response.data.weather[0].description);
        setCity(response.data.name);
        setCountry(response.data.sys.country);
        
        } catch(error){
          alert('Please enter a valid city');
          console.log(error);
        }

      }
      getData();

  }
  
  const convert = (temp) =>{
    return (temp-273.15).toFixed(0);
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    
    <div className="container">
      <div className="row center">
        <div className="Box">
        
        
        
          <div className="menu">
            <span className="Menu barIcon"><FontAwesomeIcon icon={faBars} /></span>
            <div className="title">
              <span className="locationIcon"><FontAwesomeIcon icon={faLocationDot} /></span>
              <h2 id="cityname">{city},</h2>
              <h2 id="Countryname">{country}</h2>

            </div>

          </div>
          <div className="main">
            <div className="heading">
              <h2 className="w s">Today's Report</h2>
              <div className="date s">
                {dateBuilder(new Date())}
              </div>
            </div>

          </div>
          <div className="search-bar">
            <i className="fa fa-search" aria-hidden="true"></i>
            <form className="Search" onSubmit={send} >
              <input type="text"
                id="cityInput"
                placeholder="Search for City"
                autoComplete="off"
                value={location}
                onChange={(e) => setLocation(e.target.value)}

                
              />
            </form>
          </div>
          <main id="pp">
            <div className="mid">
            
              <div className="image"><img src={Icon} alt="weather icon" /></div>
              
              <h3 className="weather" id="day1">{description}</h3>

            </div>
            <div className="temp">
              <div className="left">
                <h2 className="minValues" id="day1Min">{convert(temp_min)} <span className="value">&deg;C</span> </h2>

                <h2 className="maxValues" id="day1Max">{convert(temp_max)} <span className="value">&deg;C</span> </h2>
              </div>
              <div className="right">
                <h1 className="maxValues w" id="day1Max">{convert(temp)} <span className="value">&deg;C</span> </h1>
              </div>
            </div>

            <div className="conditions">
              <div className="one space">
                <img src={img1} alt="" />
                <h4 className="speed">{wind}km/h</h4>
                <h3>Speed</h3>
                
              </div>
              <div className="two space">
                <img src={img2} alt="" />
                <h4 className="humidity">{humidity}%</h4>
                <h4>Humidity</h4>

              </div>
              <div className="three space">
                <img src={img3} alt="" />
                <h4 className="rain">{Gust}km/h</h4>
                <h3>Gust</h3>


              </div>
            </div>
          </main>
          <div className="icon-flex">
            <a href=""><span className="bottomIcon"><FontAwesomeIcon icon={faHouse} /></span></a>
            <a href=""><span className="bottomIcon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span></a>
            <a href=""><span className="bottomIcon"><FontAwesomeIcon icon={faCompass} /></span>></a>
            <a href=""><span className="bottomIcon"><FontAwesomeIcon icon={faUser} /></span></a>
          </div>
          </div>
        </div>
        

      
    </div>
  );
}

export default App;
