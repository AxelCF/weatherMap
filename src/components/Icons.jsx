import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import cloud from '../assets/cloudy.svg';
import rain from '../assets/rainy.svg';
import drizzle from '../assets/drizzle.svg';
import snow from '../assets/snow.svg';
import thunderstorm from '../assets/thunder.svg';
import thunderRain from '../assets/thunderstorms-rain.svg';
import sleet from '../assets/sleet.svg';
import mist from '../assets/mist.svg';
import smoke from '../assets/smoke.svg';
import haze from '../assets/haze.svg';
import dust from '../assets/dust.svg';
import dustWind from '../assets/dust-wind.svg';
import fog from '../assets/fog.svg';
import squall from '../assets/squall.svg';
import tornado from '../assets/tornado.svg';
import overcast from '../assets/overcast.svg';
import partlyCloudyDay from '../assets/partly-cloudy-day.svg';
import partlyCloudyNight from '../assets/partly-cloudy-night.svg';

class Icons {
  static icons = {
    200: thunderRain,
    201: thunderRain,
    202: thunderRain,
    210: thunderstorm,
    211: thunderstorm,
    212: thunderstorm,
    221: thunderstorm,
    300: drizzle,
    301: drizzle,
    302: drizzle,
    310: drizzle,
    311: drizzle,
    312: drizzle,
    313: drizzle,
    314: drizzle,
    321: drizzle,
    500: rain,
    501: rain,
    502: rain,
    503: rain,
    504: rain,
    520: rain,
    521: rain,
    522: rain,
    531: rain,
    511: sleet,
    611: sleet,
    615: sleet,
    600: snow,
    601: snow,
    602: snow,
    612: snow,
    613: snow,
    616: snow,
    620: snow,
    621: snow,
    622: snow,
    701: mist,
    711: smoke,
    721: haze,
    731: dustWind,
    741: fog,
    751: dust,
    761: dust,
    762: dust,
    771: squall,
    781: tornado,
    800: sun, // Le jour par défaut
    801: partlyCloudyDay,
    802: cloud,
    803: overcast,
    804: overcast,
    moon: moon, // Icône de la lune
    partlyCloudyNight: partlyCloudyNight, // Icône de la lune
  };

  static getIcon(icon) {
    return this.icons[icon] || 'url_de_votre_image_par_defaut.png';
  }
}

export default Icons;