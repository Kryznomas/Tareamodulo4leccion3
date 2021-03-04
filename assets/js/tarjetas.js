Vue.component('tarjetas', {
    props: ['activeCard'],
    template: `
    <div id="app" class="row pt-5">
        <div class="col-md-11 cards__container container order-md-1">
            <div class="row d-flex justify-content-around">
                <div  v-for="carta in casas"  class="col-12 col-sm-6 mb-3">
                    <div v-if="carta.slide == activeCard"  class="card" style="background-color: blue" >
                        <div style="position:relative" class="card-img-container">                        
                            <img v-bind:src="carta.src" class="card-img-top" alt="carta.titulo">
                            <div  class="">
                                <img src="./assets/img/rent_bt-mod-top.png" style="position:absolute; top:0; left:0">
                                <div style="position:absolute; color: black; top:0; left:35px; font-size: 14px;">{{carta.rentBuy}}
                                </div>
                            </div>
                            <div>
                                <img src="./assets/img/rent_bt-mod-bot.png" style="position:absolute; bottom:0; right:0">
                                <div style="position:absolute; color: black; bottom:0; right:10px; font-size: 14px;">Ref:{{carta.id}}
                                </div>
                            </div>
                        </div>
                        <div class="card__img-bottom-info"></div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-4">                                
                                    <p class="fw-bold">Título</p>
                                </div>
                                <div class="col-8">
                                    <h5 class="card-title">{{carta.titulo}}</h5>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-4">
                                    <p class="fw-bold">Texto</p>
                                </div>
                                <div class="col-8">
                                    <p class="card-text">{{carta.p}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <p class="fw-bold">Etiqueta</p>
                                </div>
                                <div class="col-8">
                                    <p class="card-text">{{carta.tag}}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <p class="fw-bold">Precio</p>
                                </div>
                                <div class="col-8">
                                    <p class="card-text">{{carta.precio}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,

    data() {
        return {
            casas: [
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/casacampo1.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Campo",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 2
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/casacampo2.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Campo",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 2
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/casacampo3.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Campo",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 2
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/casacampo4.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Campo",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 2
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/casacampo5.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Campo",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 2
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/casacampo6.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Campo",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 2
                },

                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/casaplaya.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Playa",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 3
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/casaplaya.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Playa",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 3
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/casaplaya.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Playa",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 3
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/casaplaya.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Playa",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 3
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/casaplaya.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Playa",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 3
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/casaplaya.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Playa",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 3
                },

                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/cabañamontaña1.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Montaña",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 0
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/cabañamontaña2.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Montaña",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 0
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/cabañamontaña3.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Montaña",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 0
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/cabañamontaña4.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Montaña",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 0
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/cabañamontaña5.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Montaña",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 0
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/cabañamontaña6.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Montaña",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 0
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/depto1.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Departamento",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 1
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/depto2.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Departamento",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 1
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/depto3.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Departamento",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 1
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/depto4.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Departamento",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 1
                },
                {
                    titulo: "Casa para arriendo",
                    src: "./assets/img/depto5.jpg",
                    p: " Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Departamento",
                    precio: "1500€",
                    rentBuy: "ARRIENDO",
                    id: "XYZ256CL1",
                    slide: 1
                },
                {
                    titulo: "Casa para venta",
                    src: "./assets/img/depto6.jpg",
                    p: " Espectacular casa para venta, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                    tag: "Departamento",
                    precio: "1500€",
                    rentBuy: "VENTA",
                    id: "XYZ256CL1",
                    slide: 1
                },
            ],

            styles: {
                cardBColor: "#f4f4f4",
            },
        };
    },
});