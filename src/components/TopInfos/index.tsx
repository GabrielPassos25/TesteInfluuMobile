import React from 'react';

import {LogoContent, InfoContent, Title, Subtitle} from './styles'
import Logo from '../../icons/logo';
import Separator from '../../icons/separator';

interface Props {
    title: string;
    subtitle: string;
}

export function TopInfos({title, subtitle}: Props){
    return(
        <>
            <LogoContent>
                <Logo/>
            </LogoContent>
            <InfoContent>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Separator/>
            </InfoContent>
        </>
    );
}