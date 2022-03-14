import React, { useState } from "react";

import highlight from "../../assets/home.svg";
import like from "../../assets/like.svg";
import trash from "../../assets/trash.svg";

import * as S from "./styles";

interface PiuProps {
  image: string;
  username: string;
  content: string;
  user: boolean;
  likes: number;
}

const Piu: React.FC<PiuProps> = (props) => {
  const user = props.user;
  if (user) {
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
            <S.PiuButton
            // onClick={() => {

            // }}
            >
              <S.PiuButtonIcon src={like} />
              <S.likesNumber>{props.likes}</S.likesNumber>
            </S.PiuButton>
            <S.PiuButton>
              <S.PiuButtonIcon src={trash} />
            </S.PiuButton>
          </S.BtnWrapper>
        </S.Container>
      </div>
    );
  } else {
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
            <S.PiuButton
            // onClick={() => {

            // }}
            >
              <S.PiuButtonIcon src={like} />
              <S.likesNumber>{props.likes}</S.likesNumber>
            </S.PiuButton>
          </S.BtnWrapper>
        </S.Container>
      </div>
    );
  }
};

export default Piu;
