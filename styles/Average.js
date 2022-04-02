import styled from "styled-components";
import settings from './_settings';
import { Card } from './Layout.js';

export const AverageStyled = styled(Card)`
  background:${settings.colors.brandLight};
  padding: calc(${settings.gap} * 2);
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
    padding:0 calc(${settings.gap} * 2);
    left:0;
  }
`