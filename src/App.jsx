import { useState } from "react";
import axios from "axios";
import "tailwindcss";
import Header from "./Components/Header/Header";
import SearchButton from "./Components/SearchButton/Button";
import { NavLink } from "react-router";

function Weather() {
  const [userCity, setUserCity] = useState("");
  const [result, setResult] = useState(null);

  async function getWeather(e) {
    e.preventDefault();
    try {
      const API_KEY = "cbdade7bde0366db77e1ff1053ad99d1";

      const cityRef = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}&units=metric`,
      );
      setResult(cityRef.data);
      console.log(cityRef.data);
    } catch (err) {
      alert("Something Went Wrong :/");
      console.log(err);
    }
  }
  return (
    <>
      <div>
        <Header />
        <br />
        <h1>Weather App</h1>
        <br />
        <form onSubmit={getWeather}>
          <label htmlFor="user-city">City Name:</label> <br />
          <input
            type="text"
            name="user-city"
            id="user-city"
            placeholder="Enter the City name"
            required
            onChange={(e) => setUserCity(e.target.value)}
          />
          <br />
          <button type="submit">Search</button>
        </form>

        <div>
          {result && (
            <div>
              <p>Temperature: {result.main.temp}°C</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
