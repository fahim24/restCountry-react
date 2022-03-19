import React, { useEffect, useState } from "react";
import "./Countries.css";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);
	return (
		<div>
			<h1>Country List</h1>
			<p>Total Country: {countries.length}</p>
			<div className="country-container">
				{countries.map((country) => (
					<Country country={country} key={country.cca3}></Country>
				))}
			</div>
		</div>
	);
};

const Country = (props) => {
	const { name, area, population, flags, continents, capital } = props.country;
	return (
		<div className="country">
			<h3>Name: {name.common}</h3>
			<h5>Continent: {continents[0]}</h5>
			<p>Capital: {capital[0]}</p>
			<p>Population: {population}</p>
			<p>Area: {area}</p>
			<img src={flags.png} alt="" />
		</div>
	);
};

export default Countries;
