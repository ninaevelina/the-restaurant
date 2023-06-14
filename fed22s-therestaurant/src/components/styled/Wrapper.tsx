import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid black;
  margin-top: 50px;
`;

export const WrapperColumnCentered = styled.div`
  display: inline-block;

  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin-top: 50px;
`;
