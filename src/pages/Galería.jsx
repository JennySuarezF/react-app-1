import Fotos from "../components/Fotos"

const Galeria = () => {
  const fotos = [
    "https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg",
    "https://www.nationalgeographic.com.es/medio/2023/05/31/monte-elbrus_57f6f3c2_230531122513_1280x625.jpg",
    "https://www.nationalgeographic.com.es/medio/2023/05/31/cafayate-star-factory-cafayate-salta-argentina_00000000_230602134845_1200x675.jpg",
    "https://www.nationalgeographic.com.es/medio/2023/05/31/the-eyes-of-the-universe-bulgaria_00000000_230602134928_1200x499.jpg",
    "https://www.nationalgeographic.com.es/medio/2023/05/31/night-under-the-baobab-trees-baobab-avenue-madagascar_00000000_230602135955_1200x853.jpg"
  ]

  return (
    <>
      <Fotos fotos={fotos} />
    </>
  )
}

export default Galeria