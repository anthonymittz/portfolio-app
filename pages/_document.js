import { Html, Main, NextScript, Head } from 'next/document'

import Header from '../components/header'
import Footer from '../components/footer'
import MainNavigation from '../components/navigation/main'
import SecondaryNavigation from '../components/navigation/secondary'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="__app">
        <Header>
          <MainNavigation />
        </Header>
        <Main />
        <NextScript />
        <Footer>
          <SecondaryNavigation />
        </Footer>
      </body>
    </Html>
  )
}