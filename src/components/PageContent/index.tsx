import React from 'react';
import {Container} from './styles'

interface Props {
    children: React.ReactNode
}

export function PageContent({children}: Props){
    return(
        <>
            <Container>
                {children}
            </Container>
        </>
    );
}