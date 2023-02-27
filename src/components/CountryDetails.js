import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

function CountryDetails({ data, darkMode }) {
  const [country, setcountry] = useState("");
  const countryName = data;
  const [lang, setlang] = useState("");
  const [currency, setcurrency] = useState("");
  useEffect(() => {
    loadCountry();
  }, []);

  const loadCountry = function () {
    console.log(countryName, "its country Name");
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "its separated data fetched");
        setcountry(data[0]);
        loadlang(data[0]);
        loadcurrency(data[0]);
        console.log(data[0], "its data maping checking");
      });
  };

  const loadlang = (countryData) => {
    console.log(countryData, "its country data");
    const languages = Object.entries(countryData.languages)
      .map((lang) => lang[1])
      .join(", ");
    setlang(languages);
  };

  const loadcurrency = (countryData) => {

    const currency = Object.entries(countryData.currencies)
      .map((cur) => cur[0])
      .join(", ");
    setcurrency(currency);
  };

  return (
    <div className={`country-details-container`}>
      <Link to={"/"}>
        <button className={`back-btn ${darkMode}`}>
          <BiArrowBack className="back-icon" />
          <p>Back</p>
        </button>
      </Link>
      {!country ? null : (
        <div className="country-data">
          <div className="left-col">
            <img src={country.flags.png} alt="country-flag"></img>
          </div>
          <div className={`right-col ${darkMode}`}>
            <h2>{country.name.official}</h2>
            <div className="country-info">
              <div className="info-left">
                <p>
                  <b>Native Name: </b>
                  {country.name.common}
                  <br />
                  <b>Population: </b>
                  {country.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  <br />
                  <b>Region: </b>
                  {country.region}
                  <br />
                  <b>Sub Region: </b>
                  {country.subregion}
                  <br />
                  <b>Capital: </b>
                  {country.capital}
                  <br />
                </p>
              </div>
              <div className="info-right">
                <p>
                  <b>Top Level Domain: </b>
                  {country.tld}
                  <br />
                  <b>Currencies: </b>
                  {!currency ? null : currency}
                  <br />
                  <b>Languages: </b>
                  {!lang ? "hello" : lang}
                  <br />
                </p>
              </div>
            </div>
            <div className="b-c-container">
              <p>
                <b>Border Countries:</b>
              </p>
              {!country.borders
                ? "No Border Country."
                : country.borders.map((border) => {
                    return (
                      <button className={`b-country-btn ${darkMode}`}>
                        {border}
                      </button>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CountryDetails;
