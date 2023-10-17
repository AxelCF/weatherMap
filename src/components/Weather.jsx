import icon from "../icons/sun.svg"
export default function Weather({data}) {
    return (
<div className="card-content white-text">
        <span className="card-title">{ data.name }</span>
                <p><img src={icon} alt="icon"/></p>
                <span className="temperature">{ data.main.temp.toFixed() }</span>
                <div className="wind">{data.wind.speed.toFixed()}km/h ({data.wind.deg}°)</div>
              </div>
    );
  }
  