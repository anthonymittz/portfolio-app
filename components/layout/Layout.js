import Head from '../meta/head/Head'
import Header from './header/Header'
import Content from './content/Content'
import Footer from './footer/Footer'

export default function Layout({children}) {
  return <>
    <Head />
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </>
}