// import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather";

import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // État pour gérer les erreurs

  const searchLocation = (event) => {
    if (event.key === "Enter" && location) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},fr&appid=00b12f3d7c4e96a59ae0ee5add5dd028&units=metric&lang=fr`;

      axios
        .get(url)
        .then((response) => {
          if (response.data.cod === 200) {
            setData(response.data);
            console.log(response.data);
            setErrorMessage(""); // Réinitialisez le message d'erreur en cas de succès
          } else {
            setErrorMessage(
              "La ville n'existe pas. Veuillez entrer un nom de ville valide."
            );
          }
        })
        .catch((error) => {
          setErrorMessage(
            "La ville n'existe pas ou n'est pas située en France"
          );
        });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => {
            const textValue = event.target.value;
            // Vérifiez si le texte ne contient que des lettres, des espaces et des tirets
            if (/^[a-zA-Z\s-]*$/.test(textValue)) {
              setLocation(textValue);
            }
          }}
          onKeyDown={searchLocation}
          placeholder="Ville"
        />
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {data.name !== undefined && <Weather data={data} />}
    </div>
  );
}

export default App;
