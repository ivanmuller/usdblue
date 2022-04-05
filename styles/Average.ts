import styled from "styled-components";
import settings from '/styles/_settings';
import { Card } from '/styles/Layout';

export const AverageStyled = styled(Card)`
  background:${settings.colors.brandLight};
  padding: ${settings.gap};
  padding-bottom:calc(${settings.gap} + 3.2rem);
  h2 {
    margin-right:auto;
    span {
      display:block;
    }
  }
  h3,h4 {
    margin-bottom:${settings.gap};
  }
  > div {
    display:flex;
    flex-wrap: wrap;
    gap:${settings.gap};
  }
  .date {
    position:absolute;
    bottom:0;
    background:${settings.colors.brand1};
    color:${settings.colors.white};
    width:100%;
    height:3.2rem;
    line-height:3.2rem;
    padding:0 ${settings.gap};
    left:0;
    display:flex;
    justify-content: space-between;
    span:nth-child(2){
      color:${settings.colors.brand2};
    }
  }
`