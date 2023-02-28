import React, { useEffect, useState } from "react";

const Filters = ({ data, setFilterData }) => {
  const region = ["Americas", "Asia", "Europe", "Oceania", "Africa"];
  const [searchValue, setsearchValue] = useState("");
  const [selectValue, setselectValue] = useState("");

  useEffect(() => {
    const newData =
      data &&
      data
        .filter((data) => {
          return data.name.common
            .toLowerCase()
            .includes(searchValue.toLowerCase().trim());
        })
        .filter((data) => {
          return data.region.includes(selectValue);
        });
    setFilterData(newData);
  }, [searchValue, selectValue]);
  function handlerSearch(e) {
    setsearchValue(e.target.value);
  }
  function renderSelect(e) {
    setselectValue(e.target.value);
  }

  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          placeholder="Search For A Country"
          onChange={handlerSearch}
          value={searchValue}
        ></input>
      </form>

      <div className="region-filter">
        <select value={selectValue} onChange={renderSelect} className="select">
          <option value="">Filter by Region</option>
          {region.map((region) => {
            return (
              <option key={region} value={region}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default Filters;
