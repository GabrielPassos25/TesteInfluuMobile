import styled from 'styled-components';
import { View, Text} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

export const TitleContent = styled(View)`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.white_25opacity};
`;

export const TitleResult = styled(Text)`
    margin-top: ${RFValue(64)}px;
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.white};
    margin-bottom: ${RFValue(8)}px;
`;