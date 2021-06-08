import React from "react";

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    const { name, flag, capital, population, language } = obj;
    return (
      <div key={i} className="container">
        <h2> {name}</h2>
        <h5>Capital :{capital}</h5>
        <h3> Population: {population}</h3>
        <h5>{language}</h5>
        <img src={flag} alt="{name}" className="flag" />
      </div>
    );
  });
  return <React.Fragment>{lands}</React.Fragment>;
};

export default Country;
