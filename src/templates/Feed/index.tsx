import React from "react";

import Piu from "../../components/Piu";
import UserInfo from "../../components/UserInfo";
import Image from "../../assets/profilephoto.jpg";

import * as S from "./styles";

const FeedTemplate: React.FC = () => {
  return (
    <S.ContentWrapper>
      <UserInfo />
      <S.Container>
        <Piu image={Image} username="salehza0" content="Hello World"></Piu>
      </S.Container>
    </S.ContentWrapper>
  );
};

export default FeedTemplate;
