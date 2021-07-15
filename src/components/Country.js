import React from "react";

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    const {
      name,
      flag,
      capital,
      population,
      region,
      timezones,
      borders,
      numericCode,
      languages,
      altSpellings,
    } = obj;
    return (
      <div key={i}>
        <h2> {name}</h2>
        <div className="container">
          <div>
            <h4>Capital :{capital}</h4>
            <h3> Population: {population}</h3>
            <h4>Region: {region}</h4>
            <h4>Time Zone: {timezones}</h4>
            <h4>Langauge : {languages.map((language) => language.name)}</h4>
            <h4>code number: {numericCode}</h4>
          </div>
          <div>
            <img src={flag} alt="{name}" className="flag" />
          </div>
        </div>
      </div>
    );
  });
  return <React.Fragment>{lands}</React.Fragment>;
};

export default Country;
