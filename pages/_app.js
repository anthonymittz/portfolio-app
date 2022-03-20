import Layout from '../components/layout/Layout'
import AppContext from '../context/app/Provider'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  );
}

export default MyApp
