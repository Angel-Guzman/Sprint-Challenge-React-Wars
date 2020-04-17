import React from 'react';
import styled from 'styled-components';

const CharacterCardDiv = styled.p`
    width: 100px;
    height: 50px;
    color: black;
`;

function CharacterCard ({person}) {

    return (
        <CharacterCardDiv>
            <p> {person.name} </p>
        </CharacterCardDiv>
    )
}

export default CharacterCard;