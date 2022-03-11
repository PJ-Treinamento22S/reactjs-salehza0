import styled from "styled-components";
import Piu from ".";

export const Container = styled.div`
  font-family: "Outfit";
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 480px;
  height: fit-content;
  background-color: white;
  opacity: 0, 8;
  border: 2px solid black;
  border-radius: 32px;
`;

export const ProfPhoto = styled.img`
  margin-right: 16px;
  width: 48px;
  height: 48px;
  border: 2px solid black;
  border-radius: 64px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export const Username = styled.h3`
  font-family: "Outfit";
  font-weight: bold;
`;

export const PiuText = styled.p`
  font-size: large;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 128px;
  height: fit-content;
`;

export const PiuButton = styled.button`
  border: 0;
  width: fit-content;
  height: fit-content;
  background-color: white;
`;

export const PiuButtonIcon = styled.img`
  width: 32px;
  height: 32px;
`;
