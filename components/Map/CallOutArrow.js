import React from "react";
import { View } from "react-native";
import { Marker } from "react-native-maps";
import { Text, Image } from "react-native";
import styled from "styled-components/native";

const Arrow = styled.View`
    background-color: transparent
    border-color: transparent
    border-top-color:#ccc
    border-width: 16px
    margin-top: -0.5px
    align-self: center
`;

const ArrowBorder = styled.View`
    background-color: transparent
    border-color: transparent
    border-width: 16px
    margin-top: -0.5px
    align-self: center
`;

//<ArrowBorder></ArrowBorder>;
export default (title, description, image, coordinate) => {
  return <Arrow></Arrow>;
};
