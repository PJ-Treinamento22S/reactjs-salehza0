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
          <a>
            <Icon icon={home} />
          </a>
          <a>
            <Icon icon={search} />
          </a>
          <a>
            <Icon icon={noti} />
          </a>
          <a>
            <Icon icon={profile} />
          </a>
        </S.IconsWrapper>
        <S.ProfPhoto src={profPhoto}></S.ProfPhoto>
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
