import React,{useState} from "react";

import highlight from "../../assets/home.svg";
import like from "../../assets/like.svg";

import * as S from "./styles";

interface PiuProps {
  image: string;
  username: string;
  content: string;
}

const Piu: React.FC<PiuProps> = (props) => {
  const [contador,setContador]= useState(0)
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
          <S.PiuButton onClick={()=>{
              setContador(contador+1)
          }}>
            <S.PiuButtonIcon src={like} />
            <S.likesNumber>{contador}</S.likesNumber>
          </S.PiuButton>
        </S.BtnWrapper>
      </S.Container>
    </div>
  );
};

export default Piu;
