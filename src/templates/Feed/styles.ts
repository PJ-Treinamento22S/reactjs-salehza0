import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 8px;
  width: 100%;
  max-height: 90vh;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 90vh;
  min-height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`;
