import React from "react";
import * as S from "./styles";

interface IconProps {
  icon: string;
}
const Icons: React.FC<IconProps> = ({ icon }) => {
  return <S.Icons src={icon}></S.Icons>;
};
export default Icons;
