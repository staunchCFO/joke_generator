import React, { useState, useEffect} from 'react'

function useRandomJoke(firstName , lastName) {
    const [ joke , setJoke ] = useState("") 

    useEffect(() => {
        const fetchJoke = async () => 
            await fetch(
                `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
            ).then(res => res.json())
            .then(data => {
                setJoke(data.value.joke)
            });
            if(firstName !== "" && lastName !== "") {
                fetchJoke();
            }
    }, [firstName , lastName]);

    return joke;
}

export default  useRandomJoke;
