import { useState, useEffect } from 'react'
import useRoutingState from '../hooks/useRoutingState'
import Loader from '../components/loader'
import '../styles/globals.sass'

import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import Navigation from '../components/navigation'

export default function MyApp({ Component, pageProps }) {
  const routing = useRoutingState();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    let timeout = setTimeout(() => setInitialLoad(false), 3000);
    return () => clearTimeout(timeout);
  })

  return <>
    { initialLoad && <Loader />}
    <Header>
      <Navigation type="main" />
    </Header>
    {routing ? <p>Loading</p> : <Main><Component {...pageProps} /></Main>}
    <Footer>
      <Navigation type="secondary" />
    </Footer>
  </>;
}
