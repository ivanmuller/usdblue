import styled from "styled-components";
import settings from './_settings';

// --- Layout --- //
export const Wrapper = styled.div`
  margin-left:auto;
  margin-right:auto;
  padding-left:${settings.gap};
  padding-right:${settings.gap};
  max-width: ${settings.wrapperWidth};
`

export const MainStyled = styled.div`
  min-height: calc(100vh - ${settings.headerHeight});
  padding:${settings.gap} 0 10rem;
  background:${settings.colors.white};
  overflow:auto;
`

export const FooterStyled = styled.footer`
  position:fixed;
  bottom:0;
  width:100%;
  background:${settings.colors.light};
  border-top:1px solid ${settings.colors.brand2};
  ${Wrapper} {
    height:100%;
    height:${settings.headerHeight};
    display:flex;
    justify-content:right;
    align-items:center;
  }
`
// --- Elements -- //
export const Card = styled.article`
  border-radius:1rem;
  padding:${settings.gap};
  position:relative;
  margin-bottom:${settings.gap};
  overflow:hidden;
  display:flex;
  flex-wrap:wrap;
  gap:${settings.gap};
  flex-direction:${props => props.direction || ""};
`

export const Text = styled.span`
  margin:${props => props.margin || "0 0 0 0"};
  padding:0;
  color:${props => settings.colors[props.color] || ""};
  font-weight:${props => props.fw || "300"};
  font-size: ${props => settings.fs[props.fs] || settings.fs["sm"]};
`