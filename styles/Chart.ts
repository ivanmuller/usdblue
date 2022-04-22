import styled from 'styled-components'
import settings from 'settings'

export const ChartWrapStyled = styled.div`
  width:calc(100% + (${settings.styles.gap}*2));
  height:${settings.styles.chart.height};
  margin:-${settings.styles.gap};
  margin-top:0;
  position:relative;
  &:before {
    content: "";
    position:absolute;
    left:0;
    width:25px;
    height:${settings.styles.chart.height};
    bottom:0;
    z-index:9;
  }
  &:after {
    content: "";
    position:absolute;
    right:0;
    width:25px;
    height:${settings.styles.chart.height};
    background-image: linear-gradient(90deg, transparent, ${settings.styles.colors.brandLight});
    bottom:0;
  }
  @media screen and (min-width:${settings.styles.wrapperWidth}){
    &:before, &:after {
      width:75px;
    }
  }
`
