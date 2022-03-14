import React, { useState } from "react";

import home from "../../assets/home.svg";

import * as S from "./styles";
interface TextAreaProp {
  placeholder: string;
}

const NewPiuArea: React.FC<TextAreaProp> = ({ placeholder }) => {
  const [counter, setCounter] = useState(0);
  return (
    <S.Div>
      <S.Container>
        <S.TextArea
          maxLength={140}
          placeholder={placeholder}
          onChange={(e) => {
            console.log(e.target.value.length);
            setCounter(e.target.value.length);

            if (e.target.value.length === 140) {
              e.target.style.color = "red";
              return;
            }
            e.target.style.color = "black";
            e.target.innerText = "";
          }}
        ></S.TextArea>
        <S.NewPiuButton>
          <S.BtnImg src={home}></S.BtnImg>
        </S.NewPiuButton>
      </S.Container>
      {counter === 140 && (
        <S.Counter counter={counter}>
          Você ultrapassou o limite de caracteres!
        </S.Counter>
      )}
      <S.Counter counter={counter}>{counter}/140</S.Counter>
    </S.Div>
  );
};

export default NewPiuArea;
