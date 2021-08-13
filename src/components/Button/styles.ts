import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

export const ButtonContainer = styled(TouchableOpacity)`
    flex:1;
    border-radius: ${RFValue(4)}px;
    background-color: ${theme.colors.pink};
    justify-content: center;
    align-items: center;
`;

export const ButtonTitle = styled(Text)`
    padding: ${RFValue(10)}px;
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.white};
`;