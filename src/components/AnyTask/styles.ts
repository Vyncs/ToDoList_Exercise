import styled from "styled-components";

interface IQuantityAnyTask {
  variant?: 'bold'
}
export const ContainerAnyTask = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`
export const QuantityAnyTask = styled.p<IQuantityAnyTask>`
    ${({variant}) => variant && 'font-weight: bold;'}
    color: ${(props) => props.theme["gray-300"]};
    padding: 5px;
    font-size: 20px;
`

