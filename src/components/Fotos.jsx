const Fotos = ({ fotos }) => {
  return (
    <div className="container-fluid text-center">
      <h1>Galería de fotos</h1>
      <p>Da clic en cualquier foto para agrandarla.</p>
      <div className="row row-gap-4 justify-content-center">
        {fotos.map(foto => (
          <div className="col-md-4">
            <img src={foto} alt="Paisaje" className="w-100 h-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fotos