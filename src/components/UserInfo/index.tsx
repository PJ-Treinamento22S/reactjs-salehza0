import React, { useState } from "react";
import Bio from "../Bio";
import NewPiuArea from "../NewPiu";
import UserStats from "../UserStats";
import * as S from "./styles";

const UserInfo: React.FC = () => {
  return (
    <S.UserContainer>
      <S.UserInfos>
        <NewPiuArea placeholder="PiuPiuzer como quiser..."></NewPiuArea>
        <UserStats></UserStats>
        <Bio></Bio>
      </S.UserInfos>
    </S.UserContainer>
  );
};

export default UserInfo;
