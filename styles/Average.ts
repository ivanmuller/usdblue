import styled from 'styled-components'
import settings from 'settings'
import { Card } from 'styles/Layout'

export const AverageStyled = styled(Card)`
  background:${settings.styles.colors.brandLight};
  padding: ${settings.styles.gap};
  padding-bottom:calc(${settings.styles.gap} + 3.2rem);
  h2 {
    margin-right:auto;
    margin-bottom:0;
    span {
      display:block;
    }
  }
  h3,h4 {
    margin-bottom:${settings.styles.gap};
  }
  > div {
    display:flex;
    flex-wrap: wrap;
    gap:${settings.styles.gap};
  }
  .date {
    position:absolute;
    bottom:0;
    background:${settings.styles.colors.brand1};
    color:${settings.styles.colors.white};
    width:100%;
    height:3.2rem;
    line-height:3.2rem;
    padding:0 ${settings.styles.gap};
    left:0;
    display:flex;
    justify-content: space-between;
    .liveIndicator {
      font-size:${settings.styles.fs.md};
      color: #ff5bab;
      vertical-align: top;
    }
  }
`
