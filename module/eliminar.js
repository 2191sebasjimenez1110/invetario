function eliminarExistencia(categoria){
let cantidad;
if (categoria === "granos") {
        let decision = prompt("ingrese el articulo que desea eliminar\n1.arroz\n2.frijoles\n3.lentejas");
        let cantidadEliminar = parseInt(prompt("ingrse la cantidad que vaya a eleminar al producto"));
        if (decision == "arroz" || decision == "1") {
                cantidad = localStorage.getItem("arroz");
                localStorage.setItem("arroz", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "frijoles" || decision == "2") {
                cantidad = localStorage.getItem("frijoles");
                localStorage.setItem("frijoles", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "lentejas" || decision == "3") {
                cantidad = localStorage.getItem("lentejas");
                localStorage.setItem("lentejas", parseInt(cantidad) - cantidadEliminar);
        }   
}
if (categoria === "aseo") {
        let decision = prompt("ingrese el articulo que desea eliminar\n1.jabon\n2.limpido\n3.champu");
        let cantidadEliminar = parseInt(prompt("ingrse la cantidad que vaya a eleminar al producto"));
        if (decision == "jabon" || decision == "1") {
                cantidad = localStorage.getItem("jabon");
                localStorage.setItem("jabon", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "limpido" || decision == "2") {
                cantidad = localStorage.getItem("limpido");
                localStorage.setItem("limpido", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "champu" || decision == "3") {
                cantidad = localStorage.getItem("champu");
                localStorage.setItem("champu", parseInt(cantidad) - cantidadEliminar);
        } 
}
if (categoria === "carnes") {
        let decision = prompt("ingrese el articulo que desea eliminar\n1.pescado\n2.res\n3.cerdo");
        let cantidadEliminar = parseInt(prompt("ingrse la cantidad que vaya a eleminar al producto"));
        if (decision == "pescado" || decision == "1") {
                cantidad = localStorage.getItem("pesacado");
                localStorage.setItem("pescado", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "res" || decision == "2") {
                cantidad = localStorage.getItem("res");
                localStorage.setItem("res", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "cerdo" || decision == "3") {
                cantidad = localStorage.getItem("cerdo");
                localStorage.setItem("cerdo", parseInt(cantidad) - cantidadEliminar);
        }   
}
if (categoria === "lacteos") {
        let decision = prompt("ingrese el articulo que desea eliminar\n1.yogurt\n2.leche\n3.kumis");
        let cantidadEliminar = parseInt(prompt("ingrse la cantidad que vaya a eleminar al producto"));
        if (decision == "yogurt" || decision == "1") {
                cantidad = localStorage.getItem("yogurt");
                localStorage.setItem("yogurt", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "leche" || decision == "2") {
                cantidad = localStorage.getItem("leche");
                localStorage.setItem("leche", parseInt(cantidad) - cantidadEliminar);
        } else if (decision == "kumis" || decision == "3") {
                cantidad = localStorage.getItem("kumis");
                localStorage.setItem("kumis", parseInt(cantidad) - cantidadEliminar);

        }   
}
}

export { eliminarExistencia }