import Layout from '../components/layout'

export default function Home() {
  return <div id="home_page">
    <h1>Homepage</h1>
    <a href="/">Home</a>
  </div>
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}