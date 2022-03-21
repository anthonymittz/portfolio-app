import '../styles/globals.sass'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Navigation from '../components/navigation'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Header>
      <Navigation type="main" />
    </Header>
    <Main>
      <Component {...pageProps} />
    </Main>
    <Footer>
      <Navigation type="secondary" />
    </Footer>
  </>;
}
