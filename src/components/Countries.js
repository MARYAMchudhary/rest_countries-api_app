import React from "react";
import Country from "./Country";
function Countries({ data, page, darkMode, handler }) {
  const setCountry = (country) => {
    console.log(country, "its country name");
    handler(country);
  };

  if (!data) return null;
  const resPerPage = 20,
    start = (page - 1) * resPerPage,
    end = page * resPerPage;
  const dataPortion = data.slice(start, end);
  const countries = dataPortion.map((country) => {
    return <Country data={country} darkMode={darkMode} handler={setCountry} />;
  });

  return countries;
}

export default Countries;
