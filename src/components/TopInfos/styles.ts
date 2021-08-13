import styled from 'styled-components';
import { View, Text} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '../../global/styles/theme';

export const LogoContent = styled(View)`
    align-items: flex-start;
`;

export const InfoContent = styled(View)`
    margin-top: ${RFValue(24)}px;
`;

export const Title = styled(Text)`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(36)}px;
    color: ${theme.colors.white};
`;

export const Subtitle = styled(Text)`
    margin-top: ${RFValue(8)}px;
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.white};
    margin-bottom: ${RFValue(16)}px;
`;