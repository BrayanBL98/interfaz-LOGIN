$(document).ready(function () {
    $(".contenedor-principal2").hide();

    $("#registrer").click(function () { 
        $(".contenedor-principal2").fadeIn();
        $(".contenedor-principal1").fadeOut(); 
    });

    $(".boton-registro").click(function () { 
        $(".contenedor-principal1").fadeIn();
        $(".contenedor-principal2").fadeOut();
    });
});

// let saludo = function(nombreusuario) {
//     return(`bienvenido ${nombreusuario}! a la plataforma`)
// }

// $(document).ready(function () {
//     $(".btnsaludar").click(function () { 
//         let nombreInput = $("#nombre").val().trim()
//         let mensaje = $("#mensaje")

//         if (nombreInput === ""){
//             mensaje.html("<p>⚠️ por favor dijita tu nomnre</p>")
//         return
//         }

//     let saludar = saludo(nombreInput)

//     mensaje.text(saludar)
//     });
// });