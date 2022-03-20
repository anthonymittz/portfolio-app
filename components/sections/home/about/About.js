import Container from '../../../layout/container/Container'
import styles from './About.module.sass'

const text_1 = "There is nothing wrong with your television set. Do not attempt to adjust the picture. We are controlling transmission. We will control the horizontal, we will control the vertical. We can change the focus to a soft blur or sharpen it to crystal clarity. For the next hour, sit quietly and we will control all that you see and hear. You are about to participate in a great adventure. You are about to experience the awe and mystery which reaches from the inner mind to the Outer Limits."
const text_2 = "Dr. David Banner: physician; scientist. Searching for a way to tap into the hidden strengths that all humans have... then an accidental overdose of gamma radiation alters his body chemistry. And now when David Banner grows angry or outraged, a startling metamorphosis occurs. The creature is driven by rage and pursued by an investigative reporter. The creature is wanted for a murder he didn't commit. David Banner is believed to be dead, and he must let the world think that he is dead, until he can find a way to control the raging spirit that dwells within him. Extraordinary crimes against the people and the state had to be avenged by agents extraordinary. Two such people are John Steed, top professional; and his partner, Emma Peel, talented amateur... otherwise known as The Avengers."

export default function About() {
  return <div className={styles.section} id="about">
    <Container>
      <h2>About</h2>
      <p>{text_1}</p>
      <p>{text_2}</p>
    </Container>
  </div>
}
