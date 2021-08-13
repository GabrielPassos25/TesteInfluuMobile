import styled from 'styled-components';
import {LinearGradient} from 'expo-linear-gradient';
import { View, Text, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
    colors: theme.colors.linear_gradient_background
})`
    flex:1;
`;

export const ValueContent = styled(View)`
    margin-top: ${RFValue(48)}px;
    flex-direction: row;
    justify-content: space-around;
`;

export const ErrorTip = styled(Text)`
    margin-top: ${RFValue(10)}px;
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.pink};
    text-align: center;
`;

export const Input = styled(TextInput).attrs({
    placeholder: 'CEP',
})`
    flex:1;
    border-radius: ${RFValue(4)}px;
    border-width: 3px;
    border-color: ${theme.colors.purple};
    margin-right: ${RFValue(24)}px;
    background-color: ${theme.colors.white};
    padding: ${RFValue(10)}px;
    text-align: center;
`;

export const Space = styled(View)`
    margin-bottom: ${RFValue(100)}px;
`;