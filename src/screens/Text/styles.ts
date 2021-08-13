import styled from 'styled-components';
import { LinearGradient} from 'expo-linear-gradient';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
    colors: theme.colors.linear_gradient_background
})`
    flex:1;
`;

export const Input = styled(TextInput).attrs({
    placeholder: 'Texto para análise',
    multiline: true,
    placeholderTextColor: theme.colors.gray,
})`
    border-radius: ${RFValue(4)}px;
    border-width: 3px;
    border-color: ${theme.colors.purple};
    margin-top: ${RFValue(48)}px;
    background-color: ${theme.colors.white};
    padding: ${RFValue(10)}px;
    height: ${RFValue(236)}px;
    justify-content: center;
    textAlignVertical: top;
`;

export const ButtonContainer = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(24)}px;
`;

export const Button = styled(TouchableOpacity)`
    border-radius: ${RFValue(4)}px;
    background-color: ${theme.colors.pink};
    justify-content: center;
    align-items: center;
    width: ${RFValue(200)}px;
    height: ${RFValue(48)}px;
`;

export const ButtonText = styled(Text)`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.white};
`;

export const TitleContent = styled(View)`
    margin-top: ${RFValue(48)}px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.white_25opacity};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TitleResult = styled(Text)`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.white};
    margin-bottom: ${RFValue(8)}px;
`;

export const TitleSecondary = styled(Text)`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.white};
    margin-bottom: ${RFValue(8)}px;
`;

export const AnswerContent = styled(View)`
    margin-top: ${RFValue(16)}px;
`;

export const TitleAnswer = styled(Text)`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
`;

export const Space = styled(View)`
    margin-bottom: ${RFValue(100)}px;
`;