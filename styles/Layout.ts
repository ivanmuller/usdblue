import styled from 'styled-components'
import settings from 'settings'

// --- Layout --- //
export const Wrapper = styled.div`
  margin-left:auto;
  margin-right:auto;
  padding-left:${settings.styles.gap};
  padding-right:${settings.styles.gap};
  max-width: ${settings.styles.wrapperWidth};
`

export const MainStyled = styled.div`
  min-height: calc(100vh - ${settings.styles.headerHeight});
  padding:${settings.styles.gap} 0 7rem;
  background:${settings.styles.colors.white};
  overflow:auto;
`

export const FooterStyled = styled.footer`
  position:fixed;
  bottom:0;
  width:100%;
  background:${settings.styles.colors.light};
  border-top:1px solid ${settings.styles.colors.neutral};
  ${Wrapper} {
    height:100%;
    height:${settings.styles.headerHeight};
    display:flex;
    justify-content:right;
    align-items:center;
  }
  a {
    &:hover {
      text-decoration:none;
      border-bottom:1px solid;
    }
  }
  
  ul {
    display:flex;
    margin-right:${settings.styles.gap};
    gap:calc(${settings.styles.gap} / 2);
    li a {
      display:block;
      text-transform: uppercase;
      font-size:${settings.styles.fs.xs};
      &.active {
        border-bottom:1px solid;
      }
    }
  }
`

// --- Elements -- //

export const ImgStyled = styled.div`
  display:inline-block;
  vertical-align: middle;
`

export const Card = styled.article`
  border-radius:1rem;
  padding:${settings.styles.gap};
  position:relative;
  margin-bottom:${settings.styles.gap};
  overflow:hidden;
  display:flex;
  flex-wrap:wrap;
  gap:${settings.styles.gap};
  flex-direction:${props => props.direction || ''};
`
