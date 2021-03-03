Vue.component('tarjeta', {
    template: `
    <div id="app" class="row pt-5">
        <div class="col-md-11 cards__container container order-md-1">
            <div class="row d-flex justify-content-around">
                <div v-for="carta in cards"  class="col-12 col-sm-6 mb-3">
                    <div class="card" v-bind:style="{backgroundColor: styles.cardBColor}">
                        <div style="position:relative" class="card-img-container">
                            <img  v-bind:src="carta.src" class="card-img-top" alt="carta.titulo">
                            <div class="">
                                <img src="./assets/img/rent_bt-mod-top.png" style="position:absolute; top:0; left:0">
                                <div style="position:absolute; top:0; left:35px; font-size: 14px;">{{carta.rentBuy}}
                                </div>
                            </div>
                            <div>
                                <img src="./assets/img/rent_bt-mod-bot.png" style="position:absolute; bottom:0; right:0">
                                <div style="position:absolute; bottom:0; right:10px; font-size: 14px;">Ref:{{carta.id}}
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
            cards: [
                {
                titulo: "Casa para arriendo",
                src: "./assets/img/photo1.jpg",
                p:" Espectacular casa para arriendo, con piscina en excelentes condiciones, en un exclusivo sector residencial, a pasos de centros comerciales, universidades y aeropuerto.",
                tag: "Etiqueta 1",
                precio: "1500€",
                rentBuy: "ARRIENDO",
                id: "XYZ256CL1",
                },
                {
                titulo: "Casa para venta",
                src: "./assets/img/photo2.jpg",
                p:"Acogedora casa, en un entorno tranquilo del sector cordillerano, ideal para el descanso en familia. Vivienda en excelentes condiciones y documentación en regla.",
                tag: "Etiqueta 2",
                precio: "10000€",
                rentBuy: "COMPRA",
                id: "XYZ256CL2",
                },
            ],
            styles: {
                cardBColor: "#f4f4f4",
            },
        };
    },
});