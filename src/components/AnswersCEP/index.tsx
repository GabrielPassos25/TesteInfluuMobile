import React from 'react';
import {AnswerContent, TitleAnswer, RequestedAnswer} from './styles'

interface Props {
    title: string;
    info?: string; 
}

export function AnswersCEP({title, info}: Props){
    return(
        <>
            <AnswerContent>
                <TitleAnswer>{title}</TitleAnswer>
                <RequestedAnswer>{info}</RequestedAnswer>
            </AnswerContent>
        </>
    );
}