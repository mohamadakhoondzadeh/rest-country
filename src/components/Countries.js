import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filters from "./Filters";
const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState(null);
  const [FilterData, setFilterData] = useState(null);
  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterData(data);
    };
    fetchCountryData();
  }, []);

  return (
    <>
      <Filters data={countries} setFilterData={setFilterData} />
      <section className="grid">
        {FilterData &&
          FilterData.map((country) => {
            const { numericCode, name, population, region, capital, flags } =
              country;

            return (
              <>
                <article key={numericCode}>
                  <div className="cards">
                    <img src={flags.png} alt={name.common} />
                    <div>
                      <Link className="color" to={`/c/${name.common}`}>
                        {" "}
                        Country : {name.common}
                      </Link>

                      <h4>
                        population: <span>{population}</span>
                      </h4>
                      <h4>
                        region : <span>{region}</span>
                      </h4>
                      <h4>
                        capital : <span>{capital}</span>
                      </h4>
                    </div>
                  </div>
                </article>
              </>
            );
          })}
      </section>
    </>
  );
};

export default Countries;
