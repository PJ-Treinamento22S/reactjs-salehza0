import React from "react";

import highlight from "../../assets/home.svg";
import like from "../../assets/like.svg";

import * as S from "./styles";

interface PiuProps {
  image: string;
  username: string;
  content: string;
}

const Piu: React.FC<PiuProps> = (props) => {
  return (
    <div>
      <S.Container>
        <S.User>
          <S.ProfPhoto src={props.image} />
          <S.Username>{props.username}</S.Username>
        </S.User>
        <S.PiuText>{props.content}</S.PiuText>
        <S.BtnWrapper>
          <S.PiuButton>
            <S.PiuButtonIcon src={highlight} />
          </S.PiuButton>
          <S.PiuButton>
            <S.PiuButtonIcon src={like} />
          </S.PiuButton>
        </S.BtnWrapper>
      </S.Container>
    </div>
  );
};

export default Piu;
