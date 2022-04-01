import Footer from "@root/components/Footer";
import { MainStyled } from "@root/styles/Layout";

export default function Layout({children}) {
  return (
    <>
      <MainStyled>
        {children}
      </MainStyled>
      <Footer />
    </>
  )
}