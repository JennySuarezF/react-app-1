const Carousel = () => {
  return (
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://2.bp.blogspot.com/-Fo33Zg-BZ3E/TdkvPBxkh7I/AAAAAAAAAb0/HDJ4OPavLaw/s1600/1280_1024_nature_scene_wallpaper_1600FG100_2_081.jpg"
            className="d-block w-100" alt="Carrusel 1" height={600} />
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Paisaje</h1>
              <p class="opacity-75">Un hermoso paisaje junto al mar.</p>
              <p><button class="btn btn-lg btn-primary">Ver más</button></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://4.bp.blogspot.com/-zTLPk8b6DUk/TdkvfA3WycI/AAAAAAAAAcA/Rcuez6HCC04/s1600/1280_1024_nature_scene_wallpaper_1600FG100_2_083.jpg"
            className="d-block w-100" alt="Carrusel 2" height={600} />
          <div class="container">
            <div class="carousel-caption">
              <h1>Río</h1>
              <p>Un caudaloso río de aguas limpias y cristalinas.</p>
              <p><button class="btn btn-lg btn-primary">Ver más</button></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://3.bp.blogspot.com/-zrpfo0F0vF0/Tdkv1Y_G0fI/AAAAAAAAAcM/mplRUYqFyUU/s1600/1280_1024_nature_scene_wallpaper_1600FG100_2_084.jpg"
            className="d-block w-100" alt="Carrusel 3" height={600} />
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>Flores</h1>
              <p>Unas hermosas flores junto a un árbol.</p>
              <p><button class="btn btn-lg btn-primary">Ver más</button></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel