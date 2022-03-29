import Head from '../meta/HtmlHead';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
