import React from "react";
import { useTheme } from "styled-components";
import { AntDesign } from '@expo/vector-icons';
import {Text, TouchableOpacity,  } from "react-native";
import { Container, Button, Gradient, IconContainer, TabsContainer} from './styles';
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
  title: string;
  onPressHome?: () => void;
  onPressCEP?: () => void;
  onPressText?: () => void;
}

export function TabBar({title, onPressHome, onPressCEP, onPressText}: Props){
    const theme = useTheme();
    return (
      <Container>
        <Button onPress={onPressHome}>
          <Gradient>
              <IconContainer>
                <AntDesign name="home" size={24} color="white" />
              </IconContainer>
          </Gradient>
        </Button>
        <TabsContainer>
            <TouchableOpacity onPress={onPressText}>
              <Text style={{marginLeft:60, color: title === "Text" ? theme.colors.pink : theme.colors.gray, fontFamily: theme.fonts.bold, fontSize: RFValue(16)}}>Texto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressCEP}>
              <Text style={{marginRight:60, color: title === "CEP" ? theme.colors.pink : theme.colors.gray, fontFamily: theme.fonts.bold, fontSize: RFValue(16)}}>CEP</Text>
            </TouchableOpacity>
        </TabsContainer>
    </Container>
  );
}
