import React, { useState, useContext } from "react";

import home from "../../assets/home.svg";
import api from "../../config/api";
import Piu from "../Piu";
import { GetPiusContext } from "../../templates/Feed";

import * as S from "./styles";
interface TextAreaProp {
  placeholder: string;
}

const NewPiuArea: React.FC<TextAreaProp> = ({ placeholder }) => {
  const [content, setContent] = useState("");
  const { getPius } = useContext(GetPiusContext);
  async function postPiu() {
    await api.post("/pius", {
      text: content,
    });
    getPius();
  }
  return (
    <S.Div>
      <S.Container>
        <S.TextArea
          maxLength={140}
          placeholder={placeholder}
          onChange={(e) => {
            setContent(e.target.value);
            if (e.target.value.length === 140) {
              e.target.style.color = "red";
              return;
            }
            e.target.style.color = "black";
            e.target.innerText = "";
          }}
        ></S.TextArea>
        <S.NewPiuButton onClick={() => postPiu()}>
          <S.BtnImg src={home}></S.BtnImg>
        </S.NewPiuButton>
      </S.Container>
      {content.length === 140 && (
        <S.Counter counter={content.length}>
          Você ultrapassou o limite de caracteres!
        </S.Counter>
      )}
      <S.Counter counter={content.length}>{content.length}/140</S.Counter>
    </S.Div>
  );
};

export default NewPiuArea;
