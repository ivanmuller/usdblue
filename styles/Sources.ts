import styled from "styled-components"
import settings from 'styles/_settings'
import { Card } from 'styles/Layout'

export const SourcesListStyled = styled.div`
  display:flex;
  flex-wrap:wrap;
  //gap:${settings.gap};
  flex-direction:column;
  margin-left:calc(-${settings.gap} / 2);
  margin-right:calc(-${settings.gap} / 2);
  > p {
    flex:1 1 100%;
  }
  @media screen and (min-width:${settings.wrapperWidth}){
    flex-direction:row;
  }
`

export const SourceStyled = styled(Card)`
  background:${settings.colors.light};
  margin-left:calc(${settings.gap} / 2);
  margin-right:calc(${settings.gap} / 2);
  flex:1 1 calc(50% - ${settings.gap});
  .wrapPrices {
    display:flex;
    flex-wrap: wrap;
    gap:${settings.gap};
  }
  @media screen and (min-width:${settings.wrapperWidth}){
    //width:calc(33.333% - (${settings.gap} / 3) * 2);
  }
`

