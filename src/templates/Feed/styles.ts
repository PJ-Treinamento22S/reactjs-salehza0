import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 8px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 85vh;
  min-height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`;
