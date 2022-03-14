import React from "react";

import profPhoto from "../../assets/profilephoto.jpg";
import Icon from "../../components/HeaderIcon";
import home from "../../assets/home.svg";
import search from "../../assets/lupa.svg";
import noti from "../../assets/noti.svg";
import profile from "../../assets/profile.svg";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderH1>PiuPiuwer</S.HeaderH1>
        <S.IconsWrapper>
          <S.IconButton>
            <Icon icon={home} />
          </S.IconButton>
          <S.IconButton>
            <Icon icon={search} />
          </S.IconButton>
          <S.IconButton>
            <Icon icon={noti} />
          </S.IconButton>
          <S.IconButton>
            <Icon icon={profile} />
          </S.IconButton>
        </S.IconsWrapper>
        <S.ProfPhoto src={profPhoto}></S.ProfPhoto>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
