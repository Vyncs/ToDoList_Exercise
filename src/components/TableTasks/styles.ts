import { CheckCircle } from "phosphor-react"
import styled, { css } from 'styled-components'
export const TableContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1.5rem;

  display: flex;
  justify-content: center;
`

interface VariantChecked {
    variant: boolean
}



export const FormTable = styled.td`
    width: 100%;
    border-collapse: separete;
    border-spacing: 0 1rem;

    td {
        color:${props => props.theme["gray-100"]};
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-400"]};
        
        &:first-child{            
            width: 10%;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;

        }
        &:nth-child(2){
            width: 80% ;
         }
        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;

            :hover{
                color: #ff6459;
            }
        }
    }
`
export const DescriptionText = styled.p<VariantChecked>`
    ${({variant}) => variant && 'text-decoration: line-through'}
`

export const CursorPointer = styled.p`
    cursor: pointer;
`

