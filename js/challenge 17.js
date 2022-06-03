// El usuario ingresa un DNI. Comprobar que sea válido, es decir, que tenga 7 u 8 dígitos y que no sea todos ceros
let dni = prompt ('Inserte su dni');
if (dni.length == 7 && dni!= 0000000 || dni.length == 8 && dni != 00000000) {
    alert (`Su dni es ${dni}`)
}else{
    alert ('El dni ingresado no es valido, intente nuevamente')
}