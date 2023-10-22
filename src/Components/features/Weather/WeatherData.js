import React, { useState, useEffect } from 'react';
import './Weather.css';

const WeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const fetchWeather = () => {
    const apiKey = "718dca3aeb9e485aab7b391d17d0a610";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        setWeatherData({ name, icon, description, temp, humidity, speed });
      });
  };

  const search = () => {
    fetchWeather(city);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      const apiKey = "718dca3aeb9e485aab7b391d17d0a610";
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=metric&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          const { name } = data;
          const { icon, description } = data.weather[0];
          const { temp, humidity } = data.main;
          const { speed } = data.wind;
          setWeatherData({ name, icon, description, temp, humidity, speed });
        });
    }
  }, [userLocation]);

  return (
    <div className="weather-app">
      {/* <div className="search">
        <input
          type="text"
          className="search-bar"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && search()}
          placeholder="Enter city..."
        />
        <button onClick={search}>Search</button>
      </div> */}
      {weatherData && (
        <div className="weather">
          <div className="column">
            <img
              className="icon"
              src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`}
              alt="Weather icon"
            />
            <p className="description">{weatherData.description}</p>
          </div>
          <div className="column">
            <h2 className="temp">{weatherData.temp}°C</h2>
            <p className="city">{weatherData.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherData;
