import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: white;
  opacity: 0.6;
  padding: 8px;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 4px 2px #555;
`;

export const HeaderH1 = styled.h1`
  margin-left: 8px;
  font-family: "Outfit";
  font-weight: bold;
  color: black;
`;

export const ProfPhoto = styled.img`
  margin-right: 16px;
  width: 48px;
  height: 48px;
  border: 2px solid black;
  border-radius: 64px;
`;

export const IconsWrapper = styled.div`
  height: 100%;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconButton = styled.button`
  width: fit-content;
  height: fit-content;
  border: 0;
  background: none;
`;
