import React from 'react';
import styled from 'styled-components';

const CharacterCardDiv = styled.p`
    width: 100px;
    height: 380px;
    color: black;
`;

function CharacterCard ({person}) {

    return (
        <CharacterCardDiv>
            <p> {person.name} </p>
            <p> {person.height} </p>
            <p> {person.mass} </p>
            <p> {person.skin_color} </p>
            <p> {person.hair_color} </p>
            <p> {person.eye_color} </p>
            <p> {person.gender} </p>
        </CharacterCardDiv>
    )
}

export default CharacterCard;