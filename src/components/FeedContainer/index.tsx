import React from "react";
import * as S from "./styles";
import UserInfo from "../UserInfo";

const FeedContainer: React.FC = () => {
  return (
    <S.Container>
      <UserInfo></UserInfo>
    </S.Container>
  );
};

export default FeedContainer;
