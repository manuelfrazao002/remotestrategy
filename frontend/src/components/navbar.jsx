import logo from '../imgs/logo_cor.png'
import '../App.css'

function Navbar() {

  return (
    <>
      <nav id='navbar'>
        <a href="#">
          <img src={logo} className="logo" alt="Remote Strategy Logo" />
        </a>
        <aside id='links-aside'>
        <a href='#'><p>Sobre Nós</p></a>
        <a href='#'><p>Portfólio</p></a>
        <a href='#'><p>Link</p></a>
        </aside>
      </nav>
    </>
  )
}

export default Navbar
