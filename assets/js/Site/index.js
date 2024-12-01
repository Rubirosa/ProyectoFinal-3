$(document).ready(function () {
    //global

    let valueName = "";
    let valueCountry = "";
    let valueCity = "";
    let valueSector = "";
    let valueStreet = "";
    let valueCarrier = "";
    let CheckRadio1 = "";
    let CheckRadio2 = "";
    let CheckRadio3 = "";
    let CheckRadio4 = "";
    let CheckRadio5 = "";

    let M1 = "";
    let M2 = "";
    let M3 = "";
    let M4 = "";
    let M5 = "";

    let PwL = "";
    let PwJ = "";
    let PwV = "";

    let FgM = "";
    let FgJ = "";
    let FgS = "";

    let E3Mi = "";
    let E3V = "";
    let E3S = "";

    let PrV = "";
    let PrL = "";
    let PrM = "";

    let CiL = "";
    let CiS = "";
    let CiV = "";

    //Events


    $("#btn-reset").on("click", function () {
        Reset();
    })

    $("#btn-register").on("click", function () {
        validationSelec();
    })

    $("#content-container").on("click", "#btn-aceptar", function () {
        Val2();
    })

    $("#content-container").on("click", "#btn-reset", function () {
        Reset();
    })


    $("#content-container").on("click", "#btn-register", function () {
        registerInfomation();
    })
    $("#content-container").on("click", "#breadcrumbHome", function () {
        GenerateHtmlForm();
    })
    $("#content-container").on("click", "#breadcrumbSelectSub", function () {
        selectSub();
    })
    $("#content-container").on("click", "#btn-confirm", function () {
        $.confirm({
        title: 'Deseas finalizar este formurio!',
        content: "",
        buttons: {
            confirm: {
                text: "Aceptar",
                btnClass: "btn btn-primary",
                action: function() {
                    location.reload(true);
                }
            },
          
            cancel:{
                text: "Calcelar",
                btnClass: "btn btn-danger",
                    action: function(){}
            }
         
         },
    });
    })

   

    //Functions

    function Reset() {
        $("#name").val("").removeClass("imput-error").focus();
        $("#country").val("").removeClass("imput-error");
        $("#City").val("").removeClass("imput-error");
        $("#sector").val("").removeClass("imput-error");
        $("#street").val("").removeClass("imput-error");
        $("#carrier").val("").removeClass("imput-error");

    }

    function registerInfomation() {
        valueName = $("#name").val();
        valueCountry = $("#country").val();
        valueCity = $("#City").val();
        valueSector = $("#sector").val();
        valueStreet = $("#street").val();
        valueCarrier = $("#carrier").val();

        if (Validate()) {
            validationSelec();
            selectSub();
        } else {
            toastr.error("Debe llenar todos los campos", "ERROR", { timeOut: 3000, });
            Validate();
        }

    }

    function selectSub() {
        const selectPageHTML = `  


        <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" id="breadcrumbHome"><a href="#">Datos Personales</a></li>
                        <li class="breadcrumb-item active" aria-current="page" <a href="">Seleccion de Materia</a></li>
                    </ol>
                </nav>
       <div class="card ">
        <div class="card-header bg-primary text-light">
            <h5 class="text-center">Seleccion de materia</h5>
        </div>
        <div class="card-body">
            <div class="accordion mb-3" id="accordionExample">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            ${M1}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div id="ProgWeb" class=" mb-4">
                                <div class="form-check form-check-inline mx-4">
                                    <input class="form-check-input" type="radio" name="1"
                                        id="Radio-Hor-11" value="10:00-14:00">
                                    <label class="form-check-label" for="Radio-Hor-11">
                                        Lu 10:00 - 14:00
                                    </label>
                                </div>
                                <div class="form-check form-check-inline mx-4">
                                    <input class="form-check-input" type="radio" name="1"
                                        id="Radio-Hor-12" value="14:00-18:00">
                                    <label class="form-check-label" for="Radio-Hor-12">
                                        Ju 14:00 - 18:00
                                    </label>
                                </div>
                                <div class="form-check form-check-inline mx-4">
                                    <input class="form-check-input" type="radio" name="1"
                                        id="Radio-Hor-13" value="16:00-22:00">
                                    <label class="form-check-label" for="Radio-Hor-13">
                                        Vi 16:00 - 22:00
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                aria-expanded="false" aria-controls="collapseTwo">
                                ${M2} </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse"
                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div id="FisGeneral" class=" mb-4">
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="2"
                                            id="Radio-Hor-21"  value="10:00-14:00">
                                        <label class="form-check-label" for="Radio-Hor-21">
                                            Ma 10:00 - 14:00
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="2"
                                            id="Radio-Hor-22"  value="14:00-18:00">
                                        <label class="form-check-label" for="Radio-Hor-22">
                                            Sa 14:00 - 18:00
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="2"
                                            id="Radio-Hor-23"  value="16:00-22:00">
                                        <label class="form-check-label" for="Radio-Hor-23">
                                            Ju 16:00 - 22:00
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            ${M3}
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse"
                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div id="Etics3" class=" mb-4">
                                <div class="form-check form-check-inline mx-4">
                                    <input class="form-check-input" type="radio" name="3"
                                        id="Radio-Hor-31" value="10:00-14:00">
                                    <label class="form-check-label" for="Radio-Hor-31">
                                        Mi 10:00 - 14:00
                                    </label>
                                </div>
                                <div class="form-check form-check-inline mx-4">
                                    <input class="form-check-input" type="radio" value="14:00-18:00" name="3"
                                        id="Radio-Hor-32">
                                    <label class="form-check-label" for="Radio-Hor-32">
                                        Vi 14:00 - 18:00
                                    </label>
                                </div>
                                <div class="form-check form-check-inline mx-4">
                                    <input class="form-check-input" type="radio" name="3"
                                        id="Radio-Hor-33" value="16:00-22:00">
                                    <label class="form-check-label" for="Radio-Hor-33">
                                        Sa 16:00 - 22:00
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingfour">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapsefour"
                                aria-expanded="false" aria-controls="collapsefour">
                                ${M4} </button>
                        </h2>
                        <div id="collapsefour" class="accordion-collapse collapse"
                            aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div id="Prog" class=" mb-4">
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="4"
                                            id="Radio-Hor-41"  value="10:00-14:00">
                                        <label class="form-check-label" for="Radio-Hor-41">
                                            Vi 10:00 - 14:00
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="4"
                                            id="Radio-Hor-42"  value="14:00-18:00">
                                        <label class="form-check-label" for="Radio-Hor-42">
                                            Lu 14:00 - 18:00
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="4"
                                            id="Radio-Hor-43"  value="16:00-22:00">
                                        <label class="form-check-label" for="Radio-Hor-43">
                                            Ma 16:00 - 22:00
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingfive">
                            <button class="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                aria-expanded="false" aria-controls="collapsefive">
                                ${M5} </button>
                        </h2>
                        <div id="collapsefive" class="accordion-collapse collapse"
                            aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div id="CalcInte" class=" mb-4">
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="5"
                                            id="Radio-Hor-51"  value="10:00-14:00">
                                        <label class="form-check-label" for="Radio-Hor-51">
                                            Lu 10:00 - 14:00
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="5"
                                            id="Radio-Hor-52"  value="14:00-18:00">
                                        <label class="form-check-label" for="Radio-Hor-52">
                                            Sa 14:00 - 18:00
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline mx-4">
                                        <input class="form-check-input" type="radio" name="5"
                                            id="Radio-Hor-53"  value="16:00-22:00">
                                        <label class="form-check-label" for="Radio-Hor-53">
                                            Vi 16:00 - 22:00
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
                </div>
            </div>
            <button id="btn-aceptar" class="btn btn-outline-primary float-end">
                                Aceptar</button>
        </div>
    </div>`;
        $("#content-container").html(selectPageHTML);
    }

    function ConfimationPage() {
        const confimationPageHtml = ` 
      
        <nav aria-    ="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" id="breadcrumbHome"><a href="#">Datos Personales</a></li>
                        <li class="breadcrumb-item" id="breadcrumbSelectSub"><a href="#">Seleccion de materia</a></li>
                        <li class="breadcrumb-item active" aria-current="page"<a href="">Confirmacion</a></li>
                    </ol>
                </nav>
                <div class="card">
                <div class="card-header bg-dark text-light">
                <h5 class="text-center">Confirmacion</h5>
            </div>
            <div class="card-body border-dark">

                <div class="card mb-3">
                <div class="card-header bg-primary text-light">
                    Datos Personales
                </div>
                
                <div class="card-body ">
                    <ul class="list-group list-group-flush mb-4">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Nombre:</strong>&nbsp ${valueName}</li>
                    <li class="list-group-item"><strong>Provincia:</strong>&nbsp${valueCountry}</li>
                    <li class="list-group-item"><strong>Ciudad:</strong>&nbsp${valueCity}</li>
                    <li class="list-group-item"><strong>Sector:</strong>&nbsp${valueSector}</li>
                    <li class="list-group-item"><strong>Calle:</strong>&nbsp${valueStreet}</li>
                    <li class="list-group-item"><strong>Carrera:</strong>&nbsp${valueCarrier}</li>
                </ul>
                    </ul>
                </div>
                </div>
                <table class="table table-dark table-sm table-bordered mb-3">
                    <thead>
                        <tr>
                            <th scope="col">Materias</th>
                            <th scope="col">Do</th>
                            <th scope="col">Lu</th>
                            <th scope="col">Ma</th>
                            <th scope="col">Mi</th>
                            <th scope="col">Ju</th>
                            <th scope="col">Vi</th>
                            <th scope="col">Sa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">${M1}</th>
                            <td id="DoA"></td>
                            <td id="LuA">${PwL}</td>
                            <td id="MaA"></td>
                            <td id="MiA"></td>
                            <td id="JuA">${PwJ}</td>
                            <td id="ViA">${PwV}</td>
                            <td id="SaA"></td>
                        </tr>
                        <tr>
                            <th scope="row">${M2}</th>
                            <td id="DoB"></td>
                            <td id="LuB"></td>
                            <td id="MaB">${FgM}</td>
                            <td id="MiB"></td>
                            <td id="JuB">${FgJ}</td>
                            <td id="ViB"></td>
                            <td id="SaB">${FgS}</td>
                        </tr>
                        <tr>
                            <th scope="row">${M3}</th>
                            <td id="DoC"></td>
                            <td id="LuC"></td>
                            <td id="MaC"></td>
                            <td id="MiC">${E3Mi}</td>
                            <td id="JuC"></td>
                            <td id="ViC">${E3V}</td>
                            <td id="SaC">${E3S}</td>
                        </tr>
                        <tr>
                        <th scope="row">${M4}</th>
                        <td id="DoC"></td>
                        <td id="LuC">${PrL}</td>
                        <td id="MaC">${PrM}</td>
                        <td id="MiC"></td>
                        <td id="JuC"></td>
                        <td id="ViC">${PrV}</td>
                        <td id="SaC"></td>
                    </tr>
                    <tr>
                            <th scope="row">${M5}</th>
                            <td id="DoC"></td>
                            <td id="LuC">${CiL}</td>
                            <td id="MaC"></td>
                            <td id="MiC"></td>
                            <td id="JuC"></td>
                            <td id="ViC">${CiV}</td>
                            <td id="SaC">${CiS}</td>
                        </tr>
                    </tbody>
                </table>


                <button class="btn btn-success float-end" id="btn-confirm">
                    Confirmar</button>
                    </div> </div>`

        $("#content-container").html(confimationPageHtml);

    }

    function GenerateHtmlForm() {
        const GenerateHtml = `<nav aria-label="breadcrumb">
        <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page" <a href="">Datos Personales</a></li>
            <li class="breadcrumb-item" id="breadcrumbSelectSub"><a href="#">Seleccion de Materia</a></li>
        </ol>
    </nav>
    <div class="card">
        <div class="card-header bg-dark text-light">
            <h5 class="text-center">Datos Personales</h5>
        </div>
        <div class="card-body">
            <div class="mb-1">
                <label for="name" class="form-label">Nombre:</label>
                <input class="form-control" type="text" aria-label="default input example" id="name">
            </div>
            <div class="mb-1">
                <label for="country" class="form-label">Provincia:</label>
                <input class="form-control" type="text" aria-label="default input example" id="country">
            </div>
            <div class="mb-1">
                <label for="City" class="form-label">Ciudad:</label>
                <input class="form-control" type="text" aria-label="default input example" id="City">
            </div>
            <div class="mb-1">
                <label for="sector" class="form-label">Sector:</label>
                <input class="form-control" type="text" aria-label="default input example" id="sector">
            </div>
            <div class="mb-1">
                <label for="street" class="form-label">Calle:</label>
                <input class="form-control" type="text" aria-label="default input example" id="street">
            </div>
            <div class="mb-1">
                            <label for="carrier" class="form-label">Carrera:</label>
                            <select class="form-select mb-3" aria-label="Default select example" id="carrier">
                                <option value="" selected>Seleccione una Opcion</option>
                                <option value="Software">Software</option>
                                <option value="Mecatronica">Mecatronica</option>
                                <option value="Redes">Redes</option>
                            </select>
                        </div>
            <div>
                <button class="btn btn-outline-primary float-end" id="btn-register">
                    Registrar</button>
                    <button class="btn btn-outline-warning float-end me-2" id="btn-reset">
                        Limpiar
                    

                </button>

            </div>
        </div>
    
`;
        $("#content-container").html(GenerateHtml);

        $("#name").val(valueName);
        $("#country").val(valueCountry);
        $("#City").val(valueCity);
        $("#sector").val(valueSector);
        $("#street").val(valueStreet);
        $("#carrier").val(valueCarrier);


    }


    function Validate() {
        let isValid = true;


        if (valueName == "" || valueName == null || valueName == undefined) {
            isValid = false;
            $("#name").addClass("imput-error");
        } else {
            $("#name").removeClass("imput-error");
        }
        if (valueCountry == "" || valueCountry == null || valueCountry == undefined) {
            isValid = false;
            $("#country").addClass("imput-error");
        } else {
            $("#country").removeClass("imput-error");
        }
        if (valueCity == "" || valueCity == null || valueCity == undefined) {
            isValid = false;
            $("#City").addClass("imput-error");
        } else {
            $("#City").removeClass("imput-error");
        }
        if (valueSector == "" || valueSector == null || valueSector == undefined) {
            isValid = false;
            $("#sector").addClass("imput-error");
        } else {
            $("#sector").removeClass("imput-error");
        }
        if (valueStreet == "" || valueStreet == null || valueStreet == undefined) {
            isValid = false;
            $("#street").addClass("imput-error");
        } else {
            $("#street").removeClass("imput-error");
        }
        if (valueCarrier == "" || valueCarrier == null || valueCarrier == undefined) {
            isValid = false;
            $("#carrier").addClass("imput-error");
        } else {
            $("#carrier").removeClass("imput-error");
        }

        return isValid;
    }
    function Val2() {
        CheckRadio1 = $("#ProgWeb input[type='radio']:checked").val();
        CheckRadio2 = $("#FisGeneral input[type='radio']:checked").val();
        CheckRadio3 = $("#Etics3 input[type='radio']:checked").val();
        CheckRadio4 = $("#Prog input[type='radio']:checked").val();
        CheckRadio5 = $("#CalcInte input[type='radio']:checked").val();


        if (CheckRadio1 == "10:00-14:00") {
            PwL = CheckRadio1;
        } else 
        {PwL = ""; }
         if (CheckRadio1 == "14:00-18:00") {
            PwJ = CheckRadio1;
        } else
        {PwJ = "";  }
         if (CheckRadio1 == "16:00-22:00") {
            PwV = CheckRadio1;
        } else {
            PwV = "";
        }

        if (CheckRadio2 == "10:00-14:00") {
            FgM = CheckRadio2;
        } else{FgM = "";}
         if (CheckRadio2 == "14:00-18:00") {
            FgS = CheckRadio2;
        } else{FgS = ""; }
         if (CheckRadio2 == "16:00-22:00") {
            FgJ = CheckRadio2;
        } else {
            FgJ = "";
        }


        if (CheckRadio3 == "10:00-14:00") {
            E3Mi = CheckRadio3;
        } else{E3Mi = "";}
         if (CheckRadio3 == "14:00-18:00") {
            E3V = CheckRadio3;
        } else{E3V = "";}
         if (CheckRadio3 == "16:00-22:00") {
            E3S = CheckRadio3;
        } else {E3S = "";
        }

        if (CheckRadio4 == "10:00-14:00") {
            PrV = CheckRadio4;
        } else{PrV = "";} 
        if (CheckRadio4 == "14:00-18:00") {
            PrL = CheckRadio4;
        } else{PrL = "";} 
        if (CheckRadio4 == "16:00-22:00") {
            PrM = CheckRadio4;
        } else {
            PrM = "";
        }

        if (CheckRadio5 == "10:00-14:00") {
            CiL = CheckRadio5;
        } else{CiL = "";} if (CheckRadio5 == "14:00-18:00") {
            CiS = CheckRadio5;
        } else{ CiS = ""; }
         if (CheckRadio5 == "16:00-22:00") {
            CiV = CheckRadio5;
        } else {
            CiV = "";
        }
        ConfimationPage();
    }


    function validationSelec() {

        const selectSub = $("#carrier").val();

        if (selectSub == "Software") {
            M1 = "Base De Datos";
            M2 = "Programacion Web";
            M3 = "Analisis y Diseño";
            M4 = "Diseño centrado al usuario";
            M5 = "Programacion I";
        } else if (selectSub == "Mecatronica") {
            M1 = "Programación para Mecatrónicos";
            M2 = "Fundamentos de CAD";
            M3 = "Sistemas Digitales";
            M4 = "Metrología";
            M5 = "Circuitos Electricos I";
        }
        else {
            M1 = "Metodología de investigación";
            M2 = "Fundamentos de Enrutamiento";
            M3 = "Conmutación y Enrutamiento";
            M4 = "Instalación de Redes";
            M5 = "Fundamentos de Redes";
        }
    }

});