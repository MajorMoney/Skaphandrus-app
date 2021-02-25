import React from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Input = styled.TextInput`
borderBottomColor: #FFFF
borderBottomWidth: 2px
width: 100%
padding: 10px
marginLeft: 10px
textShadowColor: #FFFF
color: black
`;

export default ({ texto, flag }) => {
  return (
    <Input
      placeholder={texto}
      placeholderTextColor="#fff"
      secureTextEntry={flag}
    ></Input>
  );
};
