import styled from "styled-components"
import settings from 'styles/_settings'

export const ChartWrapStyled = styled.div`
  width:calc(100% + (${settings.gap}*2));
  height:${settings.chart.height};
  margin:-${settings.gap};
  margin-top:0;
  position:relative;
  &:before {
    content: "";
    position:absolute;
    left:0;
    width:25px;
    height:${settings.chart.height};
    bottom:0;
    z-index:9;
  }
  &:after {
    content: "";
    position:absolute;
    right:0;
    width:25px;
    height:${settings.chart.height};
    background-image: linear-gradient(90deg, transparent, ${settings.colors.brandLight});
    bottom:0;
  }
  @media screen and (min-width:${settings.wrapperWidth}){
    &:before, &:after {
      width:75px;
    }
  }
`

