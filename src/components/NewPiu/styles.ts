import styled from "styled-components";
export const Container = styled.div`
  font-family: "Outfit";
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: white;
  max-width: 400px;
  min-width: 240px;
  height: 160px;
  opacity: 0, 8;
  border-radius: 56px;
`;
export const TextArea = styled.textarea`
  font-family: "Outfit";
  font-size: large;
  border: 0;
  outline: 0;
  width: 240px;
  height: 120px;
`;
export const NewPiuButton = styled.button`
  display: flex;
  background-color: #b5c99a;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 64px;
  box-shadow: 0 0 4px 2px #555;
  margin-left: 8px;
  :hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    box-shadow: 0 0 4px 2px #555;
  }
`;
export const BtnImg = styled.img`
  height: 40px;
  width: 40px;
`;
