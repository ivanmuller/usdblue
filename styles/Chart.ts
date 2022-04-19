import styled from "styled-components"
import settings from 'styles/_settings'

export const ChartWrapStyled = styled.div`
  width:calc(100% + (${settings.gap}*2));
  height:200px;
  margin:-${settings.gap};
  margin-top:0;
  @media screen and (min-width:${settings.wrapperWidth}){
    //background-color:red;
  }
`

