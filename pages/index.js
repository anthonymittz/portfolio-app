import Hero from '../components/sections/home/hero/Hero'
import About from '../components/sections/home/about/About'
import Work from '../components/sections/home/work/Work'
import Blog from '../components/sections/home/blog/Blog'
import Contacts from '../components/sections/home/contacts/Contacts'
import styles from '../styles/pages/Home.module.sass'

export default function Home() {
  return <div id={styles.homepage}>
    <Hero />
    <About />
    <Work />
    <Blog />
    <Contacts />
  </div>
}