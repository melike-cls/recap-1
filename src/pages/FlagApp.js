import React, { useEffect, useState } from "react";

const FlagApp = () => {
  const [ulkeler, setUlkeler] = useState([]);
  //   console.log(ulkeler);
  const [hata, setHata] = useState(false);
  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setHata(true);
        }
      })
      .then((data) => setUlkeler(data))
      .catch((err) => console.log(err));
  }, []);
  if (!hata) {
    return (
      <div>
        <h1>ULKELER</h1>
        {ulkeler.map((ulke) => {
          const { name, capital, flags } = ulke;
          return (
            <div key={name.common}>
              <h2>{name.common}</h2>
              <h4>{capital}</h4>
              <img src={flags[0]} alt="" />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h1>!!Hata, Veriler Çekilemedi</h1>
      </div>
    );
  }
};

export default FlagApp;
