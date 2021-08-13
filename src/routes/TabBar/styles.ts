import styled from 'styled-components';
import {ImageBackground, SafeAreaView, View, Text, TextInput, TouchableOpacity,Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from "expo-linear-gradient";
import theme from '../../global/styles/theme';
export const Container = styled(View)`
    flex-direction: column;
    align-items: center;
    margin-bottom: ${RFValue(20)}px;
    margin-left: ${RFValue(20)}px;
    margin-right: ${RFValue(20)}px;
`;

export const Button = styled(TouchableOpacity)`
    position: absolute;
    align-self: center;
    width: ${RFValue(70)}px;
    height: ${RFValue(70)}px;
    border-radius: ${RFValue(20)}px;
    bottom: ${RFValue(25)}px;
    z-index: ${RFValue(10)};
`;

export const Gradient = styled(LinearGradient).attrs({
   colors: theme.colors.linear_gradient_home 
})`
   position: absolute;
   align-self: center;
   width: ${RFValue(70)}px;
   height: ${RFValue(70)}px;
   border-radius: ${RFValue(35)}px;
   bottom: ${RFValue(-10)}px;
`;

export const IconContainer = styled(View)`
    align-self: center;
    justify-content: center;
    margin-top: ${RFValue(25)}px;
`;

export const TabsContainer = styled(View)`
    position: absolute;
    background-color: ${theme.colors.white};
    bottom: 0;
    width: 100%;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(35)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;