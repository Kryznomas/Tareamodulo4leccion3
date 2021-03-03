Vue.component('sidebar',{

    template:
    `
    <div class=" mt-5">
        <div class="container">
            <h3 class="pb-3 mb-3 border-bottom border-dark">{{titulo1}}</h3>
            <p class="text-justify">{{parrafo}}</p>
            <h3 class="pb-3 mb-3 border-bottom border-dark">{{titulo2}}</h3>
            <div>
            <p class="text-justify"><i class="text-warning fas fa-arrow-right me-2"></i>{{articulo1}}</p>
            <a class="text-warning text-end" href="#" target="_blank">>>Read more</a>
            </div>
            <div>
            <p class="text-justify"><i class="text-warning fas fa-arrow-right me-2"></i>{{articulo2}}</p>
            <a class="text-warning text-end" href="#" target="_blank">>>Read more</a>
            </div>
        </div>
    </div>
    `
    ,
    
    data(){
        return {
            titulo1: "Conservador de Bienes Raíces",
            parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cumque inventore sapiente, omnis repudiandae molestias quisquam quod, magnam saepe molestiae amet illo delectus architecto ut. Animi officiis impedit nobis soluta?",
            titulo2: "Un titulo cualquiera",
            articulo1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cumque inventore sapiente, omnis repudiandae molestias quisquam quod, magnam saepe molestiae amet illo delectus architecto ut. Animi officiis impedit nobis soluta?",
            articulo2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cumque inventore sapiente, omnis repudiandae molestias quisquam quod, magnam saepe molestiae amet illo delectus architecto ut. Animi officiis impedit nobis soluta?",
        }},
    })