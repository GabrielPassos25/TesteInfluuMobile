import React from 'react';
import {ButtonContainer, ButtonTitle} from './styles'

interface Props {
    onPress?: () => void;
}

export function Button({onPress}: Props){
    return(
        <>
            <ButtonContainer onPress={onPress}>
                <ButtonTitle>Processar</ButtonTitle>
            </ButtonContainer>
        </>
    );
}