import '../styles/globals.sass'

import Head from '../components/meta/Head'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Navigation from '../components/navigation'
import Loader from '../components/loader'

export default function MyApp({ Component, pageProps }) {
  return <>
    {/* <Loader /> */}
    <Head />
    <Header>
      <Navigation type="main" />
    </Header>
    <Main><Component {...pageProps} /></Main>
    <Footer>
      <Navigation type="secondary" />
    </Footer>
  </>;
}
