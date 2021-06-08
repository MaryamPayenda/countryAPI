import React from "react";

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    const { name, flag, capital, population } = obj;
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h5>{capital}</h5>
        <h3>{population}</h3>
        <img src={flag} alt="{name}" />
      </div>
    );
  });
  return <React.Fragment>{lands}</React.Fragment>;
};

export default Country;
