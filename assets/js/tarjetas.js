Vue.component('tarjeta',{

    template:
        `<div>
        <b-card-group deck>
        
        <b-card title="Cabaña Montaña" img v-bind:src="imagen.src" img-alt="Image" img-top>
        <b-card-text>{{parrafo1}}</b-card-text>
        </b-card>
        
        <b-card title="Departamentos" img v-bind:src="Imagen.src" img-alt="Image" img-top>
        <b-card-text>{{parrafo2}}</b-card-text>
        </b-card>
        
        </b-card-group>
        </div>
        `,
    
    data(){
        return {
            parrafo1:"Descripción: acogedoras casas en medio de la naturaleza en la montaña <br> Precio: 5000 UF",
            parrafo2:"Descripción: modernos departamentos ubicados a pasos de centros comerciales <br> Precio: 4000 UF",       
       imagenes: [
            
            {src: '/assets/img/cabañamontaña1.jpg',
            clase: "active"},
            
            {src: '/assets/img/deptosportada.jpg',
            clase: ""},
                 
        ],
    }},
})
