import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  margin-top: 30px;

  input {
    width: 350px;
    height: 30px;
  }

  button {
    margin-top: 10px;
    border: 1px solid black;
  }
`;
