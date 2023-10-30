import React, { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledColumn,
  StyledIcon,
  StyledDescription,
  StyledTemp,
  StyledCity,
} from './styles';

const WeatherData = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const fetchWeather = () => {
    const apiKey = '718dca3aeb9e485aab7b391d17d0a610';
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
      const apiKey = '718dca3aeb9e485aab7b391d17d0a610';
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
    <>
      {weatherData && (
        <StyledContainer>
          <StyledColumn>
            <StyledIcon
              src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`}
              alt='Weather icon'
            />
            <StyledDescription>{weatherData.description}</StyledDescription>
          </StyledColumn>
          <StyledColumn>
            <StyledTemp>{weatherData.temp}°C</StyledTemp>
            <StyledCity>{weatherData.name}</StyledCity>
          </StyledColumn>
        </StyledContainer>
      )}
    </>
  );
};

export default WeatherData;
