import { useState } from "react";
import axios from "axios";

function Weather() {
  const [userCity, setUserCity] = useState("");
  const [result, setResult] = useState(null);

  async function getWeather(e) {
    e.preventDefault();
    try {
      const cityRef = await axios.get(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${userCity}`,
      );
      setResult(cityRef.data);
      console.log(cityRef);
    } catch (err) {
      alert("Something Went Wrong :/");
      console.log(err);
    }
  }
  return (
    <>
      <div>
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
              <p>Feels like: {result.current.feelslike_c}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
