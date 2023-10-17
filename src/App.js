// import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather";
import Days from "./components/Days";
import Headers from "./components/Headers";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=00b12f3d7c4e96a59ae0ee5add5dd028&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      searchLocation("");
    }
  };

  return (
    <div className="App">
      <Headers />
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Ville"
          type="text"
        />
      </div>
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <Weather data={data} />
            <Days />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
