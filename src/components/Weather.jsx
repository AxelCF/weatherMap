import Icons from "./Icons";
export default function Weather({ data }) {
  let weatherIcon;

  if (data.weather[0].id === 800) {
    if (data.weather[0].icon.endsWith('n')) {
      // C'est la nuit, afficher l'icône de la lune
      weatherIcon = Icons.icons['moon'];
    } else if (data.weather[0].icon.endsWith('d')) {
      // C'est le jour, afficher l'icône du soleil
      weatherIcon = Icons.icons['sun'];
    } else {
      // Utilisez l'icône de base pour l'ID 800
      weatherIcon = Icons.icons[800];
    }
  } else if (data.weather[0].id === 801) {
    if (data.weather[0].icon.endsWith('n')) {
      // C'est la nuit, afficher l'icône de la nuit pour le ciel partiellement nuageux
      weatherIcon = Icons.icons['partlyCloudyNight'];
    } else if (data.weather[0].icon.endsWith('d')) {
      // C'est le jour, afficher l'icône du jour pour le ciel partiellement nuageux
      weatherIcon = Icons.icons['partlyCloudyDay'];
    } else {
      // Utilisez l'icône de base pour l'ID 801
      weatherIcon = Icons.icons[801];
    }
  } else {
    // Pour tous les autres cas, utilisez l'icône basée sur l'ID
    weatherIcon = Icons.getIcon(data.weather[0].id);
  }

  return (
    <div className="container">
        <div className="top">
          <div className="lieu">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          <h1>{data.main.temp.toFixed()}°</h1>
        </div>
        <div className="img">
          <p><img src={weatherIcon} alt="icon" /></p>
        </div>
        <div className="description">
          <p>{data.weather[0].description}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="ressentie">
          <p className="bold">{data.main.feels_like.toFixed()}°</p>
          <p>Ressentie</p>
        </div>
          <div className="humidité">
          <p className="bold">{data.main.humidity}%</p>
          <p>Humidité</p>
        </div>
          <div className="vent">
          <p className="bold">{data.wind.speed.toFixed() * 3.6}km/h</p>
          <p>Vent</p>
          </div>
        </div>
      </div>
    
    );
  }
  