import React, { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    const [visited, setVisited] = useState(false);

    // console.log(country.area.area)
    const handleVisited = () => {
        setVisited(visited ? false : true)
    }
    return (
        <div className={`country ${visited && 'visited-button'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <h4>Population : {country.population.population}</h4>
            <h4>Area : {country.area.area} 
                {
                    country.area.area < 30000 
                    ? "Small Country" 
                    : "Big Country"
                }
            </h4>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;