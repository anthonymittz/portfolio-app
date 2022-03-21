import Main from './main'
import Aside from './aside'
import Secondary from './secondary'

export default function Navigation({ type }) {
  const Nav = getComponent(type);
  return <nav>
    <Nav />
  </nav>
}

function getComponent(type) {
  switch (type) {
    case "main":
      return Main;
    case "aside":
      return Aside;
    case "secondary":
      return Secondary;
    default:
      throw new Error(`[Navigation] Unable to find '${type}' type of navigation`);
  }
}