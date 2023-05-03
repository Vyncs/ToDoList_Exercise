import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -1.7rem;

  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 70%;
  background: ${(props) => props.theme["gray-500"]};
  border: 2px solid ${(props) => props.theme["gray-700"]};
  border-radius: 8px;
  font-size: 18px;
  height: 54px;
  padding-left: 1rem;
  color: ${(props) => props.theme["gray-100"]};
`;

export const ButtonCreate = styled.button`
  height: 52px;
  border: 0;
  background: ${(props) => props.theme["blue-dark"]};
  color: ${(props) => props.theme["gray-100"]};
  font-weith: bold;
  margin: 1px 5px;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  :hover {
    background: ${(props) => props.theme["blue"]};
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;
