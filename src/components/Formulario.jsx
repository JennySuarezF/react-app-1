const Formulario = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Formulario de contacto</h1>
      <form>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" />
        </div>
        <div class="mb-3">
          <label for="apellidos" class="form-label">Apellidos</label>
          <input type="text" class="form-control" id="apellidos" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="mensaje" class="form-label">Mensaje</label>
          <textarea class="form-control" id="mensaje" rows="3"></textarea>
        </div>
        <div className="text-center"><button className="btn btn-success mt-3">Enviar</button></div>
      </form>
    </div>
  )
}

export default Formulario