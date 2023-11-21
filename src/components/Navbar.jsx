import { useState } from "react"

const Navbar = () => {
  const [active, setActive] = useState(0)

  return (
    <nav class="navbar navbar-expand-lg bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#inicio">Jenny Suárez</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class={`nav-link ${active === 0 && 'active'}`} href="#inicio"
                onClick={() => setActive(0)}>
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class={`nav-link ${active === 1 && 'active'}`} href="#sobre-mi"
                onClick={() => setActive(1)}>
                Sobre mí
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class={`nav-link ${active === 2 && 'active'}`} href="#contacto"
                onClick={() => setActive(2)}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar