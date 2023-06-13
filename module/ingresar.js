function ingresarCategoria (){
    let categoria = prompt("ingrese el numero de la categoria las categorias son:\n1.Granos\n2.Aseo\n3.Carnes\n4.Lacteos");
    if (categoria == "granos" || categoria == "1") {
        return "granos";
    }
    if (categoria == "aseo" || categoria == "2" ) {
        return "aseo";
    }
    if (categoria == "carnes" || categoria  == "3") {
        return "carnes";
    }
    if (categoria == "lacteos" || categoria == "4"){
        return "lacteos";
    }
}
function ingresarExistencia(categoria){
        let cantidad
        if (categoria === "granos") {
                let decision = prompt("ingrese el articulo que desea agregar\n1.arroz\n2.frijoles\n3.lentejas");
                let cantidadAgregar = parseInt(prompt("ingrse la cantidad que le vaya adicionar al producto"));
        if (decision == "arroz" || decision == "1") {
                cantidad = localStorage.getItem("arroz");
                localStorage.setItem("arroz", parseInt(cantidad) + cantidadAgregar);
        } else if (decision == "frijoles" || decision == "2") {
                cantidad = localStorage.getItem("frijoles");
                localStorage.setItem("frijoles", parseInt(cantidad) + cantidadAgregar);
        } else if (decision == "lentejas" || decision == "3") {
                cantidad = localStorage.getItem("lentejas");
                localStorage.setItem("lentejas", parseInt(cantidad) + cantidadAgregar);
        }   
        } 
        if (categoria === "aseo") {
        let decision = prompt("ingrese el articulo que desea agregar\n1.jabon\n2.limpido\n3.champu");
        let cantidadAgregar = parseInt(prompt("ingrse la cantidad que le vaya adicionar al producto"));
        if (decision == "jabon" || decision == "1") {
                cantidad = localStorage.getItem("jabon");
                localStorage.setItem("jabon", parseInt(cantidad) + cantidadAgregar);
        } else if (decision == "limpido" || decision == "2") {
                cantidad = localStorage.getItem("limpido");
                localStorage.setItem("limpido", parseInt(cantidad) + cantidadAgregar);
        } else if (decision == "champu" || decision == "3") {
                cantidad = localStorage.getItem("champu");
                localStorage.setItem("champu", parseInt(cantidad) + cantidadAgregar);
        } 
        }
        if (categoria === "carnes") {
        let decision = prompt("ingrese el articulo que desea agregar\n1.pescado\n2.res\n3.cerdo");
        let cantidadAgregar = parseInt(prompt("ingrse la cantidad que le vaya adicionar al producto"));
        if (decision == "pescado" || decision == "1") {
                cantidad = localStorage.getItem("pesacado");
                localStorage.setItem("pescado", parseInt(cantidad) + cantidadAgregar);
        } else if (decision == "res" || decision == "2") {
                cantidad = localStorage.getItem("res");
                localStorage.setItem("res", parseInt(cantidad) + cantidadAgregar);
                return "actualizado";
        } else if (decision == "cerdo" || decision == "3") {
                cantidad = localStorage.getItem("cerdo");
                localStorage.setItem("cerdo", parseInt(cantidad) + cantidadAgregar);
        }   
        }
        if (categoria === "lacteos") {
        let decision = prompt("ingrese el articulo que desea agregar\n1.yogurt\n2.leche\n3.kumis");
        let cantidadAgregar = parseInt(prompt("ingrse la cantidad que le vaya adicionar al producto"));
        if (decision == "yogurt" || decision == "1") {
                cantidad = localStorage.getItem("yogurt");
                localStorage.setItem("yogurt", parseInt(cantidad) + cantidadAgregar);
        } else if (decision == "leche" || decision == "2") {
                cantidad = localStorage.getItem("leche");
                localStorage.setItem("leche", parseInt(cantidad) + cantidadAgregar);
        } else if (decision == "kumis" || decision == "3") {
                cantidad = localStorage.getItem("kumis");
                localStorage.setItem("kumis", parseInt(cantidad) + cantidadAgregar);
        }
        }
};

export {ingresarCategoria,ingresarExistencia}