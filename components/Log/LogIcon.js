import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styled from "styled-components/native";

const Icon = styled.FontAwesomeIcon``;

export default ({ icon, color }) => {
  return <Icon icon={icon} color={color}></Icon>;
};
