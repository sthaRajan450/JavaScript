const weatherData = {
  country: "Nepal",
  cities: [
    {
      name: "Kathmandu",
      latitude: 27.7172,
      longitude: 85.324,
      weather: {
        temperature: 22.5,
        feels_like: 21.8,
        humidity: 65,
        pressure: 1012,
        wind_speed: 5.2,
        wind_direction: "NW",
        condition: "Partly Cloudy",
        icon: "https://example.com/partly-cloudy.png",
      },
      forecast: [
        {
          date: "2025-04-04",
          temperature_min: 15,
          temperature_max: 25,
          condition: "Sunny",
        },
        {
          date: "2025-04-05",
          temperature_min: 16,
          temperature_max: 24,
          condition: "Cloudy",
        },
        {
          date: "2025-04-06",
          temperature_min: 17,
          temperature_max: 26,
          condition: "Rainy",
        },
      ],
    },
    {
      name: "Pokhara",
      latitude: 28.2096,
      longitude: 83.9856,
      weather: {
        temperature: 24.1,
        feels_like: 23.7,
        humidity: 60,
        pressure: 1010,
        wind_speed: 4.8,
        wind_direction: "SW",
        condition: "Sunny",
        icon: "https://example.com/sunny.png",
      },
      forecast: [
        {
          date: "2025-04-04",
          temperature_min: 18,
          temperature_max: 28,
          condition: "Sunny",
        },
        {
          date: "2025-04-05",
          temperature_min: 19,
          temperature_max: 27,
          condition: "Partly Cloudy",
        },
        {
          date: "2025-04-06",
          temperature_min: 20,
          temperature_max: 29,
          condition: "Thunderstorm",
        },
      ],
    },
    {
      name: "Butwal",
      latitude: 27.7,
      longitude: 83.45,
      weather: {
        temperature: 29.0,
        feels_like: 30.5,
        humidity: 55,
        pressure: 1011,
        wind_speed: 6.0,
        wind_direction: "SE",
        condition: "Sunny",
        icon: "https://example.com/sunny.png",
      },
      forecast: [
        {
          date: "2025-04-04",
          temperature_min: 22,
          temperature_max: 32,
          condition: "Sunny",
        },
        {
          date: "2025-04-05",
          temperature_min: 23,
          temperature_max: 33,
          condition: "Cloudy",
        },
        {
          date: "2025-04-06",
          temperature_min: 24,
          temperature_max: 34,
          condition: "Rainy",
        },
      ],
    },
    {
      name: "Palpa",
      latitude: 27.55,
      longitude: 83.5,
      weather: {
        temperature: 26.5,
        feels_like: 27.0,
        humidity: 58,
        pressure: 1010,
        wind_speed: 5.5,
        wind_direction: "W",
        condition: "Partly Cloudy",
        icon: "https://example.com/cloudy.png",
      },
      forecast: [
        {
          date: "2025-04-04",
          temperature_min: 20,
          temperature_max: 30,
          condition: "Cloudy",
        },
        {
          date: "2025-04-05",
          temperature_min: 21,
          temperature_max: 31,
          condition: "Partly Cloudy",
        },
        {
          date: "2025-04-06",
          temperature_min: 22,
          temperature_max: 32,
          condition: "Rainy",
        },
      ],
    },
    {
      name: "Arghakhanchi",
      latitude: 27.9,
      longitude: 83.25,
      weather: {
        temperature: 25.0,
        feels_like: 26.0,
        humidity: 60,
        pressure: 1009,
        wind_speed: 5.8,
        wind_direction: "NW",
        condition: "Cloudy",
        icon: "https://example.com/cloudy.png",
      },
      forecast: [
        {
          date: "2025-04-04",
          temperature_min: 19,
          temperature_max: 29,
          condition: "Cloudy",
        },
        {
          date: "2025-04-05",
          temperature_min: 20,
          temperature_max: 30,
          condition: "Partly Cloudy",
        },
        {
          date: "2025-04-06",
          temperature_min: 21,
          temperature_max: 31,
          condition: "Rainy",
        },
      ],
    },
  ],
};

const search = document
  .querySelector("button")
  .addEventListener("click", () => {
    const cityInput = document.querySelector(".cityInput").value;
    const weatherIcon = document.querySelector(".weather-icon");
    const cityData = weatherData.cities.find(
      (c) => c.name.toLowerCase() === cityInput
    );
    if (cityData) {
      document.querySelector(
        ".temp"
      ).innerHTML = `${cityData.weather.temperature}°C`;

      document.querySelector(".city").innerHTML = `${cityData.name}`;

      document.querySelector(
        ".humidity"
      ).innerHTML = `${cityData.weather.humidity}%`;

      document.querySelector(
        ".wind"
      ).innerHTML = `${cityData.weather.wind_speed}Km/Hr`;

      if (cityData.weather.condition.toLowerCase() === "sunny") {
        weatherIcon.src = `/images/sun.png`;
      } else if (cityData.weather.condition.toLowerCase() === "partly cloudy") {
        weatherIcon.src = `/images/cloudy.png`;
      } else if (cityData.weather.condition.toLowerCase() === "rainy") {
        weatherIcon.src = `/images/rain.png`;
      } else {
        weatherIcon.src = `/images/sun.png`;
      }
    } else {
      document.querySelector(".city").innerHTML = "City not found!";
      document.querySelector(".temp").innerHTML = "";
      document.querySelector(".humidity").innerHTML = "";
      document.querySelector(".wind").innerHTML = "";
      document.querySelector(".weather-icon").innerHTML = "";
    }
  });
