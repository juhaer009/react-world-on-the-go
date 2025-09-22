import React, { use, useState} from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    // console.log(countries)
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountry = (country) => {
        console.log('visited country clicked', country)
        const newVisitedCountries = [...visitedCountries, country] 
        setVisitedCountries(newVisitedCountries)
    }
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedFlags = (flag) => {
        // console.log('add flag button clicked', flag)
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h1>No. of Countries : {countries.length}</h1>
            <p>No. of Countries Visited : {visitedCountries.length} </p>
            <ol>
                {
                    visitedCountries.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <p>No. of flags : {visitedFlags.length}</p>
            <div>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} handleVisitedFlags={handleVisitedFlags} handleVisitedCountry={handleVisitedCountry} country= {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;