import styled from 'styled-components';
import {LinearGradient} from 'expo-linear-gradient';
import {ImageBackground, SafeAreaView, View, Text, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';
import Image from '../../assets/background.png';

export const Container = styled(LinearGradient).attrs({
    colors: theme.colors.linear_gradient_background
})`
    flex:1;
`;

export const PageContent = styled(SafeAreaView).attrs({
    marginTop: Platform.OS === 'android' ? 40 : 0,
})`
    flex:1;
`;

export const LogoContent = styled(View)`
    align-items: center;
`;

export const InfoContent = styled(View)`
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled(Text)`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(36)}px;
    color: ${theme.colors.white};
`;

export const Subtitle = styled(Text)`
    margin-top: ${RFValue(16)}px;
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
    margin-bottom: ${RFValue(16)}px;
`;