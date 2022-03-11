import React from "react";
import * as S from "./styles";
import IconsWrapper from "../IconWrapper";
import profPhoto from "../../assets/profilephoto.jpg";

const Header: React.FC = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderH1>PiuPiuwer</S.HeaderH1>
        <IconsWrapper></IconsWrapper>
        <S.ProfPhoto src={profPhoto}></S.ProfPhoto>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
