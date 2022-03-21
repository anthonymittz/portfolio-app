import '../styles/globals.sass'
import Header from '../components/header'
import Footer from '../components/footer'
import MainNavigation from '../components/navigation/main'
import SecondaryNavigation from '../components/navigation/secondary'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Header>
        <MainNavigation />
      </Header>
      <Component {...pageProps} />
      <Footer>
        <SecondaryNavigation />
      </Footer>
    </>
  );
}
