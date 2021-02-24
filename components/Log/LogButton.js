import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  border-color: #FFFF
  border-radius: 10px
  padding-vertical: 5px
  padding-horizontal: 5px
  border-width: 3px
  width: 80%
  min-height: 30px
  margin-top: 30px
`;

const Textinho = styled.Text`
  color: #FFFF
  text-align: center
  font-size: 20px
  font-weight: bold 
`;

export default ({ navigation, texto, nav }) => {
  return (
    <Btn onPress={() => navigation.navigate(nav)}>
      <Textinho>{texto}</Textinho>
    </Btn>
  );
};
