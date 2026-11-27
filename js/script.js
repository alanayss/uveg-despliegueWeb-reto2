
const datosCuriosos = [
    "Júpiter tiene al menos 95 lunas confirmadas.",
    "Venus es más caliente que Mercurio.",
    "Un día en Venus dura más que su año.",
    "La densidad promedio de Saturno es menor que la del agua.",
    "Neptuno tarda aproximadamente 165 años terrestres en orbitar el Sol.",
    "Marte tiene el volcán más grande del Sistema Solar."
];

const botonDato = document.getElementById("factButton");
const mostrarDato = document.getElementById("fact");

botonDato.addEventListener("click", function() {

    const indiceAleatorio = Math.floor(
        Math.random() * datosCuriosos.length
    );

    mostrarDato.textContent = datosCuriosos[indiceAleatorio];

});
