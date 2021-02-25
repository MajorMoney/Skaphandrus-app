import React from "react";
import { View } from "react-native";
import { Marker } from "react-native-maps";
import { Text, Image } from "react-native";
import styled from "styled-components/native";

const Buble = styled.View`
    flex-direction: column
    background-color: #ccc
    padding: 20px
    border-radius: 10px
    border-color: #ccc
    border-width: 1px
    justify-content: center
    align-content: center 
`;

const Imagem = styled.Image`
  border-radius: 10px
  width:100px
  height:100px
  align-self: flex-start
  resize-mode:center
  padding-top:-50px
`;

const Texto = styled.Text`
  align-self: center
  margin-bottom: 15px
  align-content:flex-start
  align-items:flex-start
`;

//<Image source={image}></Image>
const CostumCallout = ({ title, description, image }) => {
  return (
    <Buble>
      <Texto>{title}</Texto>
      <Texto>{description}</Texto>
      <Texto>
        <Imagem source={image}></Imagem>
      </Texto>
    </Buble>
  );
};

export default CostumCallout;
