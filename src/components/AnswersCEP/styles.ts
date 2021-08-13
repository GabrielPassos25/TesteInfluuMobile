import styled from 'styled-components';
import { View, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

export const AnswerContent = styled(View)`
    margin-top: ${RFValue(8)}px;
    margin-bottom: ${RFValue(8)}px;
`;

export const TitleAnswer = styled(Text)`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
`;

export const RequestedAnswer = styled(Text)`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
`;