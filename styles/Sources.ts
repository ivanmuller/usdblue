import styled from 'styled-components'
import settings from 'settings'
import { Card } from 'styles/Layout'

export const SourcesListStyled = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  margin-left:calc(-${settings.styles.gap} / 2);
  margin-right:calc(-${settings.styles.gap} / 2);
  > p {
    flex:1 1 100%;
  }
  @media screen and (min-width:${settings.styles.wrapperWidth}){
    flex-direction:row;
  }
`

export const SourceStyled = styled(Card)`
  background:${settings.styles.colors.light};
  margin-left:calc(${settings.styles.gap} / 2);
  margin-right:calc(${settings.styles.gap} / 2);
  flex:1 1 calc(50% - ${settings.styles.gap});
  h4 {
    margin-bottom:0;
  }
  .wrapPrices {
    display:flex;
    flex-wrap: wrap;
    gap:${settings.styles.gap};
  }
`
