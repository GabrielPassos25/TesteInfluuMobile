import styled from 'styled-components';
import {ImageBackground} from 'react-native';
import Image from '../../assets/background.png';

export const Container = styled(ImageBackground).attrs({
    source: Image,
    resizeMode: 'cover'
})`
    flex:1;
`;