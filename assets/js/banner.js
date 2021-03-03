Vue.component('carrusel',{

    template:
    `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" >
            <div v-for="imagen in imagenes" class="carousel-item" v-bind:class="imagen.clase">
                <img v-bind:src="imagen.src" class="d-block w-100">
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
    </div>`,
    
    data(){
        return {
        imagenes: [
            
            {src: '/assets/img/cabañamontaña1.jpg',
            clase: "active"},
            
            {src: '/assets/img/deptosportada.jpg',
            clase: ""},
            
            {src: '/assets/img/casacampoportada.jpg',
            clase: ""},
            
            {src: '/assets/img/casaplaya1.jpg',
            clase: ""},
        ],
    }},
})