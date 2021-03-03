Vue.component('modal',{

    template:
    `
    <div>
        <div class="modal fade" data-bs-target="#myModal" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl  ">
        <div class="modal-content bg-dark bg-gradient">
            <div class="modal-header">
                <h3 style="color:white">Elija su destino </h3>
            </div>
            <div class="modal-body text-light">
            <p id="targetModal"></p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
        </div>
        <div>
            <div class="modal fade" data-bs-target="#myModal" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl  ">
                <div class="modal-content bg-dark bg-gradient">
                    <div class="modal-header">
                        <select class="form-select bg-secondary text-light" aria-label="Default select example">
                            <option selected></option>
                            <option value="1"></option>
                            <option value="2"></option>
                        </select>
                    </div>
                    <div class="modal-body text-light">
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    `
    ,
    
    data(){
        return {
            label: "Seleccione qué tipo de propiedad busca",
            option1: "Arriendo",
            option2: "Venta"
        }},
    })