import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
`;
export const ProfilePhoto = styled.img`
  margin-right: 16px;
  width: 80px;
  height: 80px;
  border: 2px solid black;
  border-radius: 64px;
`;
export const StatsContainer = styled.div`
  font-family: "Outfit";
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;
export const Username = styled.h3`
  width: fit-content;
  height: fit-content;
`;
export const Folowers = styled.div`
  height: fit-content;
  width: fit-content;
  margin-top: 0px;
  font-family: "Outfit";
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfIcon = styled.img`
  height: 24px;
  width: 24px;
`;
