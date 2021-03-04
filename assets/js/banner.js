Vue.component('carrusel', {

    template:
        `<div>
        <div class="modal fade" data-bs-target="#myModal" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl  ">
                <div class="modal-content bg-dark bg-gradient">
                    <div class="modal-header">
                        <h5 class="text-light">{{label2}} </h5>
                        <div class="col-9">
                            <select v-model="selectRent" class="form-select bg-secondary text-light" aria-label="Default select example">
                                <option value="" class="col-5"selected>{{label}}</option>
                                <option value="ARRIENDO">{{option1}}</option>
                                <option value="VENTA">{{option2}}</option>
                            </select>
                        </div>
                        <button type="button" class="btn-close ms-2" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-light p-0" >
                        <tarjetasmodal :activeCard="activeCard" :selectRent="selectRent" :styles="styles"></tarjetasmodal>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">        
            <div class="carousel-inner" >
                <div v-for="(imagen, index) in imagenes" class="carousel-item" v-bind:class="imagen.clase">
                    <img @click="datoModal(index)" :data-bs-toggle="isDisabled" :data-bs-target="idModal" :src="imagen.src" class="d-block w-100" data-bs-placement="top" :title="imagen.tooltip">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>`,

    data() {
        return {
            styles: {
                cardBColor: "#f4f4f4",
            },
            isDisabled: 'modal',
            idModal: '#myModal',
            label: "Todo",
            label2: "¿Arriendo o Venta?",
            option1: "Arriendo",
            option2: "Venta",
            activeCard: '',
            selectRent:'',

            imagenes: [

                {
                    src: './assets/img/cabañamontaña1.jpg',
                    clase: "active",
                    tooltip: "Haga click para ver más propiedades de montaña",
                },

                {
                    src: './assets/img/deptosportada.jpg',
                    clase: "",
                    tooltip: "Haga click para ver más departamentos",
                },

                {
                    src: './assets/img/casacampoportada.jpg',
                    clase: "",
                    tooltip: "Haga click para ver más propiedades de campo",
                },

                {
                    src: './assets/img/casaplaya1.jpg',
                    clase: "",
                    tooltip: "Haga click para ver más propiedades de playa",
                },
            ],
        }
    },
    methods: {
        datoModal(index) {
            this.activeCard = index

        },
    },
    
    
})