/*
Programa que proporciona acceso al inventario
de una tienda.
Author: Jhoan Sebastian Jimenez Monroy
Fecha: 12/06/2023
Licencia GPL
*/
import { esquema } from "./module/model.js";
import { existenciadisponible } from "./module/disponibles.js";
import { ingresarCategoria, ingresarExistencia } from "./module/ingresar.js";
import { eliminarExistencia } from "./module/eliminar.js";

esquema();

function run() {
let continuar;
    do {
    let opcionIngrasar = prompt("Que desea hacer\n1.ver lista de productos disponibles\n2.Actualizar un producto\n3.Eliminar un producto").toLowerCase()
    if (opcionIngrasar == "1") {
        existenciadisponible();
        }else if (opcionIngrasar == "2") {
            let categoria = ingresarCategoria();
            let producto = ingresarExistencia(categoria);
            existenciadisponible();
            }
        else if(opcionIngrasar == "3"){
            let categoria = ingresarCategoria();
            let producto = eliminarExistencia(categoria);
            existenciadisponible();

        }
    continuar = prompt("desea realizar otra accion en el programa S/N").toUpperCase();
    }while (continuar != "N"); 
alert("gracias por ulizar el programa")   
}

run();

