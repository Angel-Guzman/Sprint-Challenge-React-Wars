import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from './CharacterCard'
// Write your Character component here

const CharacterDiv = styled.div`
    width: 100px;
    height: 50px;
    color: black;
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
        <p>{luke}</p>
        {
        people.map(person => {
            return <CharacterCard person={person} />
        })
        }
    </CharacterDiv>
    )
}

export default Character;