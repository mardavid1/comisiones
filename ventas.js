const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);
    }
    return comision;

}

///Validar ventas

//function validarVentas() {
//Para validacion primero recuperamos el texto de la cada de texto
// let numeroVentasStr = recuperarTexto('txtVentas');
// if (numeroVentasStr.length >= 5) {
// alert('Maximo 5 caracteres');
// return false;
// } else {
//  return true;
//}
//}




function calcular() {

    if (validarVentas() == false) {
        return;
    };
    //Recuperamos propiedades de cajas de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById('txtVentas');
    //let componentePrecio = document.getElementById('txtPrecio');

    //recuperamos el valor de las cajas de texto
    //let sueldoBaseStr = componenteSueldoBase.value;


    //let sueldoBaseStr=recuperarTexto('txtSueldoBase');
    //let numeroVentasStr=recuperarTexto('txtVentas');
    //let PrecioProductoStr=recuperarTexto('txtPrecio');


    //let numeroVentasStr = componenteVentas.value;
    //let PrecioProductoStr = componentePrecio.value;

    //Convertimos el texto a numero
    // /////////////////////////////////////////////////////////////////






    let sueldoBase = recuperarFloat('txtSueldoBase');
    let numeroVentas = recuperarFloat('txtVentas');
    let PrecioProducto = recuperarFloat('txtPrecio');

    let comision = calcularComision(numeroVentas, PrecioProducto);
    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById('spSueldoBase');
    let spComision = document.getElementById('spComision');
    let spTotal = document.getElementById('spTotal');

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}


function validarNumero(input) {

    const mensaje = document.getElementById("error_" + input.id);
    mensaje.textContent = "";

    if (input.value.trim() === "") {
        mensaje.textContent = "Este campo es obligatorio.";
        return false;
    }

    if (!/^\d+$/.test(input.value)) {
        mensaje.textContent = "Solo se permiten números.";
        return false;
    }

    if (input.value.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos.";
        return false;
    }

    return true;
}