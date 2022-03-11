import React from "react";

import Piu from "../../components/Piu";
import UserInfo from "../../components/UserInfo";
import image from "../../assets/profilephoyo.jpg";

import * as S from "./styles";

const FeedTemplate: React.FC = () => {
  return (
    <div>
      <UserInfo />
      {/* <S.Container>
        <Piu image={image} username="salehza0" content="Hello World"></Piu>
      </S.Container> */}
    </div>
  );
};

export default FeedTemplate;
