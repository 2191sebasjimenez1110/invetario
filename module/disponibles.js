function existenciadisponible() {
    let granos = [localStorage.getItem("arroz"),localStorage.getItem("frijoles"),localStorage.getItem("lentejas")]
    let aseo = [localStorage.getItem("jabon"),localStorage.getItem("limpido"),localStorage.getItem("champu")]
    let carnes = [localStorage.getItem("pescado"),localStorage.getItem("res"), localStorage.getItem("cerdo")]
    let lacteos = [localStorage.getItem("yogurt"),localStorage.getItem("leche"),localStorage.getItem("kumis")]
    alert(`la lista de articulos disponibles es:\narroz: ${granos[0]}\nfrijoles: ${granos[1]}\nlentejas: ${granos[2]}\njabon: ${aseo[0]}\nlimpido: ${aseo[1]}\nchampu: ${aseo[2]}\npezcado: ${carnes[0]}\nres: ${carnes[1]}\ncerdo: ${carnes[2]}\nyogurt: ${lacteos[0]}\nleche: ${lacteos[1]}\nkumis: ${lacteos[2]}`);
}


export {existenciadisponible}