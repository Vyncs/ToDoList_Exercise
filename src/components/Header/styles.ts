import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-700"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 3rem;
  max-width: 1120px;

  margin: 2rem auto 0;
  

  display: flex;
  justify-content: center;
`;
