import React from "react";
import { Link } from "react-router-dom";

function Country({ data, darkMode, handler }) {
  console.log(data, "its data of main page");
  const sendName = (country) => {
    handler(country);
  };

  return (
    <div
      className={`country ${darkMode}`}
      onClick={() => sendName(data.name.common)}
    >
      <Link to={data.name.common.replaceAll(" ", "-")}>
        <img alt="country-flag" src={data.flags.png} className="flag" />

        <div className="country-details">
          <h2>{data.name.common}</h2>
          <div className="population">
            <p>
              <b>Area:</b>{" "}
              {data.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                " km2"}
            </p>
          </div>
          <div className="region">
            <p>
              <b>Region:</b> {data.region}
            </p>
          </div>
          <div className="capital">
            <p>
              <b>Capital:</b> {data.capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Country;
