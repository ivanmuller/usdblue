import styled from "styled-components";
import settings from '/styles/_settings';
import { Card } from '/styles/Layout';

export const QuotesListStyled = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:${settings.gap};
  flex-direction:column;
  > p {
    flex:1 1 100%;
  }
  @media screen and (min-width:${settings.wrapperWidth}){
    flex-direction:row;
  }
`

export const QuoteStyled = styled(Card)`
  background:${settings.colors.light};
  margin:0;
  flex:0 0 auto;
  width:100%;
  @media screen and (min-width:${settings.wrapperWidth}){
    width:calc(33.333% - (${settings.gap} / 3) * 2);
  }
`