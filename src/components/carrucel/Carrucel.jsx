import React from 'react'
import Carousel from 'better-react-carousel'
import './carrucel.scss'

const Carrucel = () => {
  return (
    <><div className='carrucel'>
      <p>Restaurants and cafes</p>
<Carousel cols={4} rows={1} gap={-10}loop >
      <Carousel.Item className='ll'>
        <img  src="https://www.monsieur-cuisine.com/fileadmin/_processed_/a/8/csm_23148_Rezeptfoto_01_1883563d21.jpg" className='imagen__Carrucel'/>
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://www.monsieur-cuisine.com/fileadmin/_processed_/a/8/csm_23148_Rezeptfoto_01_1883563d21.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://www.monsieur-cuisine.com/fileadmin/_processed_/a/8/csm_23148_Rezeptfoto_01_1883563d21.jpg" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="30%" src="https://www.monsieur-cuisine.com/fileadmin/_processed_/a/8/csm_23148_Rezeptfoto_01_1883563d21.jpg" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="30%" src="https://www.monsieur-cuisine.com/fileadmin/_processed_/a/8/csm_23148_Rezeptfoto_01_1883563d21.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="30%" src="https://www.monsieur-cuisine.com/fileadmin/_processed_/a/8/csm_23148_Rezeptfoto_01_1883563d21.jpg" />
      </Carousel.Item>
      
    </Carousel>
    </div>

    </>
  )
}


export default Carrucel

// import React from 'react'
// const Carrucel = () => {
//   return (
//     <>
// <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://www.monsieur-cuisine.com/fileadmin/_processed_/a/8/csm_23148_Rezeptfoto_01_1883563d21.jpg" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://cdn.colombia.com/gastronomia/2011/08/25/pizza-margarita-3684.jpg" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://www.saborusa.com/bo/wp-content/uploads/sites/16/2019/10/Disfruta-una-suculenta-pizza-al-estilo-New-York-en-Bogota-Foto-destacada.png" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Anterior</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Siguiente</span>
//   </button>
// </div>
//     </>
//   )
// }
// export default Carrucel