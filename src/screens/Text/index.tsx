import React from 'react';
import {hyphenate} from "hyphen/pt";
import {Container, Input, Button, ButtonContainer, ButtonText, TitleContent, TitleResult, TitleSecondary, AnswerContent, TitleAnswer, Space} from './styles'
import { ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TopInfos } from '../../components/TopInfos';
import { PageContent } from '../../components/PageContent';
import { Background } from '../../components/Background';
import { TabBar } from '../../routes/TabBar/app.routes';

interface Props {
    navigation: any;
}

export function TextScreen({navigation}: Props){
    React.useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    
        return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);
    
    const [keyboardStatus, setKeyboardStatus] = React.useState(false);
    const _keyboardDidShow = () => setKeyboardStatus(true);
    const _keyboardDidHide = () => setKeyboardStatus(false);
    const [text, setText] = React.useState<string>("");
    const check = ['abrandar', 'abrindo', 'agora', 'alcance', 'antigo', 'apenas', 'aterrar', 'através', 'câmaras', 'caminho', 'chamados', 'chinesa', 'coberta', 'colocar', 'condições','conforme ', 'corresse', 'demora', 'descida', 'distância', 'enorme', 'enquanto','entrada', 'entrada', 'envolta', 'equipas', 'espaço', 'esperar', 'estado', 'estava','explorar', 'foguetões', 'futuras', 'história', 'humanas', 'imagens', 'indícios','metade', 'minutos', 'observar', 'orbital', 'orbitar', 'passada', 'passado', 'planeta','planície', 'primeira', 'procurar', 'profundo', 'programa', 'proteger', 'receber','segundo', 'segundos', 'segura', 'silêncio', 'suave', 'sucesso', 'tamanho', 'terreno','trajeto', 'vantagem', 'vermelho']
    const [answer, setAnswer] = React.useState<string>("");
    const [result, setResult] = React.useState<number>(0);
    function compareArrays(phrase: string){
        {/* hyphenate(phrase).then( result => { */}
            let aux = [];
            // if want to use Franklin M. Liang's hyphenation algorithm for hyphenation patterns, uncomment the following line and comment the one below it
            // aux = result.replace(/[\.,]/gu, "").replace(new RegExp(String.fromCharCode(173), "gu"),"-").split(" ").filter(word => word.split("-").length == 3);
            aux = phrase.replace(/[\.,]/gu, "").split(" ").filter(word => check.includes(word));
            setAnswer(aux.reduce((acc : string, value : string, index: number) => acc + (index+1) + ". " + value.replace(/-/gu,"") + "\n", ""));
            setResult(aux.length);
        {/*{ }});*/}
    }
    return(
        <TouchableWithoutFeedback onPress={() => {
            if(keyboardStatus){
                Keyboard.dismiss();
            }
        }}>
            <Container>
                <Background>
                    <PageContent>
                        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:5}}>
                        <TopInfos title="Busca por textos" subtitle="Filtre o texto abaixo capturando somente as palavras trissílabas."/>
                            <Input onChangeText={setText}/>
                            <ButtonContainer>
                                <Button onPress={() => compareArrays(text)}>
                                    <ButtonText>Processar</ButtonText>
                                </Button>
                            </ButtonContainer>
                            <TitleContent>
                                <TitleResult>Resultado</TitleResult>
                                <TitleSecondary>Total: <TitleAnswer>{result}</TitleAnswer></TitleSecondary>
                            </TitleContent>
                            <AnswerContent>
                                <TitleAnswer>{answer}</TitleAnswer>
                            </AnswerContent>
                        <Space/>
                    </ScrollView>
                    </PageContent>
                    {
                        keyboardStatus ? <></> : <TabBar title="Text" onPressHome={() => navigation.push("Home")} onPressCEP={() => navigation.push("CEP")} onPressText={() => navigation.push("Text")}/>
                    }
                </Background>
            </Container>
        </TouchableWithoutFeedback>
    );
}