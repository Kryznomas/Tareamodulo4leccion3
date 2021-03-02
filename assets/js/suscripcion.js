Vue.component('suscripcion',{

    template:`
    <div class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <h1 class="navbar-brand fs-1 m-0 p-0">{{title}}</h1>
            <div class="d-flex">
                <form class="d-flex flex-row">
                    <p class="text-light align-middle pe-2 mt-3 fs-4">{{label}}</p>
                    <div class="d-flex flex-column">
                        <label class="text-light">{{label2}}</label>
                        <input class="form-control me-2" type="search" aria-label="Search">
                    </div>
                </form>
                <button class="btn bg-warning text-light my-2" type="submit">{{labelbtn}}</button>
            </div>
        </div>
    </div>
    `,
    
    data(){
        return {
            titulo: "Líder en servicios de bienes raíces",
            label: "Email",
            labelbtn: "OK",
            label2:"Suscríbete a nuestras noticias"
    }}
  })