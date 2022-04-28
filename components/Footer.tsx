import { Wrapper, FooterStyled, ImgStyled } from 'styles/Layout'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import * as i18n from 'i18n.json'
import Image from 'next/image'
import logoGithub from 'public/github.png'

export default function Footer () {
  const { locales } = i18n
  const { t, lang } = useTranslation('common')

  return (
    <FooterStyled>
      <Wrapper>
        <ul>
          {locales.map((lng) =>
            <li key={lng}>
              <Link href='/' locale={lng} key={lng} passHref>
                <a className={lang === lng ? 'active' : ''}>{t(`language-name-${lng}`)}</a>
              </Link>
            </li>
          )}
        </ul>
        <span>
          @2022 <a href='https://github.com/ivanmuller/usdblue' target='_blank' rel='noreferrer'>Iván Müller <ImgStyled><Image alt='Iván Müller Github' src={logoGithub} width={16} height={16} /></ImgStyled></a>
        </span>
      </Wrapper>
    </FooterStyled>
  )
}
