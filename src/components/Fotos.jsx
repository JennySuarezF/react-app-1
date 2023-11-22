const Fotos = () => {
    const fotos = [
        
    ]

    return (
        <div className="container-fluid text-center">
            <h1>Galería de fotos</h1>
            <p>Da clic en cualquier foto para agrandarla.</p>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
                        alt="Paisaje" className="w-100" />
                </div>
                <div className="col-md-4">
                    <img src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
                        alt="Paisaje" className="w-100" />                </div>
                <div className="col-md-4">
                    <img src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
                        alt="Paisaje" className="w-100" />                </div>
                <div className="col-md-4">
                    <img src="https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg"
                        alt="Paisaje" className="w-100" />                </div>
            </div>
        </div>
    )
}

export default Fotos