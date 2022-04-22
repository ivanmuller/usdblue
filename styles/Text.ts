import styled from 'styled-components'
import settings from 'settings'

export const Text = styled.span`
  padding:0;
  font-weight:300;
  font-size: ${settings.styles.fs.sm};
`

export const TextBold = styled(Text)`
  font-weight:900;
`

export const TextSm = styled(Text)`
  font-size:${settings.styles.fs.sm};
`

export const TextBrand1 = styled(Text)`
   color:${settings.styles.colors.brand1};
`

export const TextBrand2 = styled(Text)`
   color:${settings.styles.colors.brand2};
`

export const TextMdBold = styled(Text)`
  font-weight:900;
  font-size:${settings.styles.fs.md};
`

export const TextLgBold = styled(Text)`
  font-weight:900;
  font-size:${settings.styles.fs.lg};
`

export const TextXsNeutral = styled(Text)`
  font-size:${settings.styles.fs.xs};
  color:${settings.styles.colors.neutral};
`

export const TextMdBrand1 = styled(Text)`
  font-size:${settings.styles.fs.md};
  color:${settings.styles.colors.brand1};
`

export const TextMdBrand2 = styled(Text)`
  font-size:${settings.styles.fs.md};
  color:${settings.styles.colors.brand2};
`
