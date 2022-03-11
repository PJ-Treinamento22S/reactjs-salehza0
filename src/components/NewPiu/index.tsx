import React from "react";
import * as S from "./styles";
import home from "../../assets/home.svg";

interface TextAreaProp {
  placeholder: string;
}

const NewPiuArea: React.FC<TextAreaProp> = ({ placeholder }) => {
  return (
    <S.Container>
      <S.TextArea placeholder={placeholder}></S.TextArea>
      <S.NewPiuButton>
        <S.BtnImg src={home}></S.BtnImg>
      </S.NewPiuButton>
    </S.Container>
  );
};

export default NewPiuArea;
