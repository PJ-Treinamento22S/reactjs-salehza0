import React, { useState, useEffect, useContext } from "react";

import highlight from "../../assets/home.svg";
import like from "../../assets/like.svg";
import trash from "../../assets/trash.svg";
import api from "../../config/api";
import unk from "../../assets/unk.png";
import { GetPiusContext } from "../../templates/Feed";

import * as S from "./styles";

interface PiuProps {
  image: string;
  username: string;
  content: string;
  user: boolean;
  likes: number;
  id: string;
}

const Piu: React.FC<PiuProps> = (props) => {
  const { getPius } = useContext(GetPiusContext);
  const user = props.user;
  async function addLike() {
    await api.post("/pius/like", {
      piu_id: props.id,
    });
    getPius();
  }

  async function favPiu() {
    await api.post("/pius/favorite", {
      piu_id: props.id,
    });
    getPius();
  }

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
            <S.PiuButton onClick={() => favPiu()}>
              <S.PiuButtonIcon src={highlight} />
            </S.PiuButton>
            <S.PiuButton onClick={() => addLike()}>
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
            <S.PiuButton onClick={() => addLike()}>
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
