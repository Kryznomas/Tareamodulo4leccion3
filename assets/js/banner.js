Vue.component('carrusel', {

    template:
        `<div>
        <div class="modal fade" data-bs-target="#myModal" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl  ">
                <div class="modal-content bg-dark bg-gradient">
                    <div class="modal-header">
                        <h5 class="text-light">{{label2}} </h5>
                        <select class="form-select bg-secondary text-light" aria-label="Default select example">
                            <option selected>{{label}}</option>
                            <option value="1">{{option1}}</option>
                            <option value="2">{{option2}}</option>
                        </select>
                    </div>
                    <div class="modal-body text-light">
                        <div id="targetModal"></div>
                        <tarjetas :activeCard="activeCard" :styles="styles"></tarjeta2>
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
                    <img @click="datoModal(index)" :data-bs-toggle="isDisabled" :data-bs-target="idModal" v-bind:src="imagen.src" class="d-block w-100">
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
            label: "Seleccione qué tipo de propiedad busca",
            label2: "¿Arriendo o Venta?",
            option1: "Arriendo",
            option2: "Venta",
            activeCard: '',

            imagenes: [

                {
                    src: './assets/img/cabañamontaña1.jpg',
                    clase: "active",
                },

                {
                    src: './assets/img/deptosportada.jpg',
                    clase: "",
                },

                {
                    src: './assets/img/casacampoportada.jpg',
                    clase: "",
                },

                {
                    src: './assets/img/casaplaya1.jpg',
                    clase: "",
                },
            ],
        }
    },
    methods: {
        datoModal(index) {
            el = document.getElementById('targetModal');
            el.innerHTML = this.imagenes[index].tarjetas
            this.activeCard = index
        }
    }
})