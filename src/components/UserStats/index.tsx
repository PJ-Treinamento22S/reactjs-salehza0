import React from "react";
import * as S from "./styles";
import ProfPht from "../../assets/profilephoto.jpg";
import prof from "../../assets/profile.svg";

const UserStats: React.FC = () => {
  return (
    <S.Wrapper>
      <S.ProfilePhoto src={ProfPht}></S.ProfilePhoto>
      <S.StatsContainer>
        <S.Username>@salehza0</S.Username>
        <S.Folowers>
          <S.ProfIcon src={prof}></S.ProfIcon>
          <p>100</p>
        </S.Folowers>
      </S.StatsContainer>
    </S.Wrapper>
  );
};

export default UserStats;
