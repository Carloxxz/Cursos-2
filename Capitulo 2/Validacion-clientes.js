let free = false;
const validarcliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis porque sos la primer persona despues de las 2 a.m")
            free = true;
        } else {
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
        }
    } else {
        alert("mira papu, sos menor de edad por ende no vasapasar, MAQUINOLA");
    }
}
validarcliente(23);
validarcliente(24);
validarcliente(0.2);
validarcliente(0.6);
validarcliente(1);
validarcliente(2);
validarcliente(2.4);
validarcliente(3);