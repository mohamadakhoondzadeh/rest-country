import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Detail = () => {
  const { name } = useParams();
  const [country, setcountry] = useState(null);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcountry(data[0]);
      });
  }, []);
  console.log(country);
  return (
    <div className="cards">
      <div className="Back">
        <Link to={"/"}>Back</Link>
      </div>
      {country ? (
        <div className="wrapper">
          <img src={country.flags.png} alt={country.flags.alt} />
          <div>
            <p
              style={{
                color: "red",
              }}
            >
              Country Name :{country.name.common}
            </p>
            <p>
              Native Name :{" "}
              {country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                .official || country.name.common}
            </p>
            <p>Population : {country.population}</p>
            <p>Region : {country.region}</p>
            <p>Sub Region : {country.subregion}</p>
            <p>capital :{country.capital}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
