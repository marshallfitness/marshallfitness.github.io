let beneficioActual = 0;

const track = document.querySelector(".beneficios-track");
const tarjetas = document.querySelectorAll(".beneficio");
const puntos = document.querySelectorAll(".dot");

function moverCarrusel(direccion){

    const total = tarjetas.length;

    beneficioActual += direccion;

    if(beneficioActual < 0){
        beneficioActual = total - 1;
    }

    if(beneficioActual >= total){
        beneficioActual = 0;
    }

    actualizarCarrusel();
}

function irCarrusel(numero){

    beneficioActual = numero;

    actualizarCarrusel();
}

function actualizarCarrusel(){

    const pantalla = window.innerWidth;

    if(pantalla <= 600){

        track.style.transform =
        `translateX(-${beneficioActual * 100}%)`;

    }else if(pantalla <= 900){

        track.style.transform =
        `translateX(-${beneficioActual * 50}%)`;

    }else{

        track.style.transform =
        `translateX(-${beneficioActual * 33.333}%)`;

    }

    puntos.forEach((punto, index) => {

        punto.classList.toggle(
            "active",
            index === beneficioActual
        );

    });
}

window.addEventListener(
    "resize",
    actualizarCarrusel
);


/* =====================================================
   CARRUSEL AUTOMÁTICO
===================================================== */

let carruselAutomatico = setInterval(() => {

    moverCarrusel(1);

}, 4000);