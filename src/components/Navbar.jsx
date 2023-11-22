import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [active, setActive] = useState(0)

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Álbum</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class={`nav-link ${active === 0 && 'active'}`} to="/" onClick={() => setActive(0)}>
                Inicio
              </Link>
            </li>
            <li class="nav-item">
              <Link class={`nav-link ${active === 1 && 'active'}`} to="/sobre-mi" onClick={() => setActive(1)}>
                Galería
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link class={`nav-link ${active === 2 && 'active'}`} to="/contacto" onClick={() => setActive(2)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar