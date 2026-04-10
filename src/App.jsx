import { useState } from "react";
import axios from "axios";
import "tailwindcss";
import Header from "./Components/Header/Header";
import SearchButton from "./Components/SearchButton/Button";
import "./App.css";
import Card from "./Components/Card/Card";
import TheInput from "./Components/Input/Input";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function Weather() {
  const [userCity, setUserCity] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getWeather(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const API_KEY = "cbdade7bde0366db77e1ff1053ad99d1";

      const cityRef = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${API_KEY}&units=metric`,
      );
      setResult(cityRef.data);
    } catch (err) {
      alert("Something Went Wrong, Please try again later :/");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="main-div relative">
        <Header />
        <div className="form-container">
          <form onSubmit={getWeather}>
            <TheInput
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
            />
            <br />
            <SearchButton />
          </form>
        </div>
        {result && (
          <div className="card-container">
            <Card weatherData={result} />
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
