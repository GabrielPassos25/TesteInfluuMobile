import styled from 'styled-components';
import { SafeAreaView, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(SafeAreaView).attrs({
    marginTop: Platform.OS === 'android' ? 40 : 0,
})`
    flex:1;
    margin-left: ${RFValue(20)}px;
    margin-right: ${RFValue(20)}px;
`;