import styled from "styled-components";
import settings from './_settings';
import { Card } from './Layout.js';

export const QuotesListStyled = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:${settings.gap};
`

export const QuoteStyled = styled(Card)`
  background:${settings.colors.light};
  margin:0;
  flex:0 0 auto;
  width:calc(33.333% - (${settings.gap} / 3) * 2);
`