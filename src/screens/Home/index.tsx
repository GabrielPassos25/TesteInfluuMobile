import React from 'react';
import {Container, PageContent, LogoContent, InfoContent, Title, Subtitle} from './styles'
import {Background} from '../../components/Background';
import Logo from '../../icons/logo';
import Separator from '../../icons/separator';
import { TabBar } from '../../routes/TabBar/app.routes';

interface Props {
    navigation: any;
}

export function Home({navigation} : Props){
    return(
        <Container>
            <Background>
                <PageContent>
                    <LogoContent>
                        <Logo/>
                    </LogoContent>
                    <InfoContent>
                        <Title>Seja bem-vindo!</Title>
                        <Subtitle>Selecione um teste abaixo</Subtitle>
                        <Separator/>
                    </InfoContent>
                </PageContent>
                <TabBar title="home" onPressHome={() => navigation.navigate("Home")} onPressCEP={() => navigation.navigate("CEP")} onPressText={() => navigation.navigate("Text")}/>
            </Background>
        </Container>
    );
}