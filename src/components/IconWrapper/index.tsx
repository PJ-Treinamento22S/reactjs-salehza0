import React from "react";
import * as S from "./styles";
import Icons from "../HeaderIcons";
import home from "../../assets/home.svg";
import search from "../../assets/lupa.svg";
import noti from "../../assets/noti.svg";
import profile from "../../assets/profile.svg";

const IconsWrapper: React.FC = () => {
  return (
    <S.IconsWrapper>
      <a>
        <Icons icon={home}></Icons>
      </a>
      <a>
        <Icons icon={search}></Icons>
      </a>
      <a>
        <Icons icon={noti}></Icons>
      </a>
      <a>
        <Icons icon={profile}></Icons>
      </a>
    </S.IconsWrapper>
  );
};

export default IconsWrapper;
