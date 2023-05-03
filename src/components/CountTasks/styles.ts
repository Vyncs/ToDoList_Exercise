import styled from "styled-components";

interface ICountTask {
  variant: "total" | "created";
}

export const CountTaskContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 2rem auto -2rem auto;
  padding: 2rem 2rem 0 0;
`;

export const CountP = styled.p<ICountTask>`
  ${(props) => props.variant === 'total' ? `color: ${props.theme["blue"]};` : `color: ${props.theme["purple"]};`}
  

  span {
    margin-left: 5px;
    color: #000;
    padding: 3px 9px;
    border-radius: 50px;
    background-color: ${(props) => props.theme["gray-200"]};
    /* font-weight: bold; */
    font-size: 14px
  }
`;
