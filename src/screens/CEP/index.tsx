import React from 'react';
import {Container, ValueContent, ErrorTip, Input, Space} from './styles'
import {TopInfos} from '../../components/TopInfos';
import {Button} from '../../components/Button';
import {Result} from '../../components/Result';
import {AnswersCEP} from '../../components/AnswersCEP';
import {PageContent} from '../../components/PageContent';
import {Background} from '../../components/Background';
import { ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TabBar } from '../../routes/TabBar/app.routes';


interface dataProps {
    cep?: string;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    localidade?: string;
    uf?: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
}

interface Props {
    navigation: any;
}

export function CEP({navigation} : Props){
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
    const [data, setData] = React.useState<dataProps>({cep: "", logradouro: "", complemento: "", bairro: "", localidade: "", uf: "", ibge: "", gia: "", ddd: "", siafi: ""});
    const [cep, setCEP] = React.useState<string>("");
    const [tipError, setTipError] = React.useState<boolean>(false);
    const getApiData = (cep : string) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`, {"method": "GET"}).then((response) => response.json()).then((response) => {
            setTipError(false);
            setData(response);
        }).catch((error) => {
            setTipError(true);
        });
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
                            <TopInfos title="CEP" subtitle="Pesquise os campos abaixo atravéis do CEP informado."/>
                                <ValueContent>
                                    <Input onChangeText={setCEP}/>
                                    {/* <Button onPress={() => getApiData(cep.replace(/\D/g,""))}/> */}
                                    <Button onPress={() => getApiData(cep.replace(/\-/g,"").replace(/\s/g, ""))}/>
                                </ValueContent>
                                {
                                    tipError ? <ErrorTip> CEP inválido </ErrorTip> : <></>
                                }
                                <Result/>
                                <AnswersCEP title="Logradouro" info={data.logradouro}/>
                                <AnswersCEP title="Bairro" info={data.bairro}/>
                                <AnswersCEP title="Cidade" info={data.localidade}/>
                                <AnswersCEP title="Estado" info={data.uf}/>
                                <AnswersCEP title="IBGE" info={data.ibge}/>
                                <Space/>
                            </ScrollView>
                        </PageContent>
                    {
                        keyboardStatus ? <></> : <TabBar title="CEP" onPressHome={() => navigation.push("Home")} onPressCEP={() => navigation.push("CEP")} onPressText={() => navigation.push("Text")}/>
                    }
                </Background>
            </Container>
        </TouchableWithoutFeedback>
    );
}