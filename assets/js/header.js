Vue.component('navegador',{

    template:`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#"><img :src="logo" alt="logo"></a>
      <div v-for="imagen in imagenes" class="carousel-item" v-bind:class="imagen.clase">
      <img v-bind:src="imagen.src" class="d-block w-100">
  </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="opcion in opciones" >
            <a :class="opcion.clase" aria-current="page" href="#">{{opcion.nombre}}</a>
        </li>
        </ul>
      </div>
    </div>
  </nav>
    `,
    
    data(){
        return {
        logo: "/assets/img/logo.gif",
        opciones: [
            {nombre: "Inicio",
            clase: "nav-link active"},
            {nombre: "Comprar",
            clase: "nav-link"},
            {nombre: "Alquiler",
            clase: "nav-link"},
            {nombre: "Finanzas",
            clase: "nav-link"},
            {nombre: "Servicios",
            clase: "nav-link"},
            {nombre: "Ventas",
            clase: "nav-link"},
            {nombre: "Contáctenos",
            clase: "nav-link"},      
        ],
    }},
})