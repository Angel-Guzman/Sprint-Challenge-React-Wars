import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './CharacterCard'
// Write your Character component here


const CharacterDiv = styled.div`
    display: flex;
    margin: 10px;
    width: 100px;
    height: 300px;
    color: black;
    p {
    display: flex;
    flex-direction: column;    
    text-align: center;
    margin: 10px;
    background-color: lightgray;
    padding: 3px;
    border-radius: 8px;
}
`;

function Character ({luke, setLuke, people, setPeople}) {

    useEffect(() => {
        axios.get(`https://swapi.py4e.com/api/people/1`)
        .then(res => {
            setLuke(res.data.name)
            // debugger
        })
        .catch(err => {
            debugger
        })
    }, [luke])

    useEffect(() => {
        axios.get(`https://swapi.py4e.com/api/people/`)
        .then(res => {
            setPeople(res.data.results)
            // debugger
        })
        .catch(err => {
            debugger
        })
    }, [people])

    if (!Character) {
        return null
    }

    return (
        <CharacterDiv>
            {/* Commented out since Luke is in mapped array */}
            {/* <p>Single Character: {luke}</p> */} 
            {
            people.map(person => {
                return <CharacterCard key={person.url} person={person} />
            })
            }
        </CharacterDiv>
    )
}

export default Character;