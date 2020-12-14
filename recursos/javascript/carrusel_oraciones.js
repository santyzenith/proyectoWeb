// JavaScript source code

let articulos = ["recursos/imagenes/oraciones/articulos/el.jpg", "recursos/imagenes/oraciones/articulos/la.jpg",
    "recursos/imagenes/oraciones/articulos/las.jpg", "recursos/imagenes/oraciones/articulos/los.jpg",
    "recursos/imagenes/oraciones/articulos/un.jpg", "recursos/imagenes/oraciones/articulos/una.jpg",
    "recursos/imagenes/oraciones/articulos/unas.jpg", "recursos/imagenes/oraciones/articulos/unos.jpg",

    "recursos/imagenes/oraciones/articulos/el.jpg", "recursos/imagenes/oraciones/articulos/la.jpg",
    "recursos/imagenes/oraciones/articulos/las.jpg", "recursos/imagenes/oraciones/articulos/los.jpg",
    "recursos/imagenes/oraciones/articulos/un.jpg", "recursos/imagenes/oraciones/articulos/una.jpg",
    "recursos/imagenes/oraciones/articulos/unas.jpg", "recursos/imagenes/oraciones/articulos/unos.jpg",
    "recursos/imagenes/oraciones/articulos/el.jpg", "recursos/imagenes/oraciones/articulos/la.jpg"];

let sustantivos = ["recursos/imagenes/oraciones/sustantivos/nina.jpg", "recursos/imagenes/oraciones/sustantivos/ninas.jpg",
    "recursos/imagenes/oraciones/sustantivos/nino.jpg", "recursos/imagenes/oraciones/sustantivos/ninos.jpg",
    "recursos/imagenes/oraciones/sustantivos/abuela.jpg", "recursos/imagenes/oraciones/sustantivos/abuelo.jpg",
    "recursos/imagenes/oraciones/sustantivos/mama.jpg", "recursos/imagenes/oraciones/sustantivos/papa.jpg",
    "recursos/imagenes/oraciones/sustantivos/hermana.jpg", "recursos/imagenes/oraciones/sustantivos/hermano.jpg",
    "recursos/imagenes/oraciones/sustantivos/amiga.jpg", "recursos/imagenes/oraciones/sustantivos/amigo.jpg",
    "recursos/imagenes/oraciones/sustantivos/amigas.jpg", "recursos/imagenes/oraciones/sustantivos/amigos.jpg",
    "recursos/imagenes/oraciones/sustantivos/bebe.jpg", "recursos/imagenes/oraciones/sustantivos/profesora.jpg",
    "recursos/imagenes/oraciones/sustantivos/profesor.jpg", "recursos/imagenes/oraciones/sustantivos/doctor.jpg",
    "recursos/imagenes/oraciones/sustantivos/doctora.jpg", "recursos/imagenes/oraciones/sustantivos/dentista.jpg",
    "recursos/imagenes/oraciones/sustantivos/casa.jpg", "recursos/imagenes/oraciones/sustantivos/cama.jpg",
    "recursos/imagenes/oraciones/sustantivos/mesa.jpg", "recursos/imagenes/oraciones/sustantivos/silla.jpg",
    "recursos/imagenes/oraciones/sustantivos/sofa.jpg", "recursos/imagenes/oraciones/sustantivos/tele.jpg",
    "recursos/imagenes/oraciones/sustantivos/computador.jpg", "recursos/imagenes/oraciones/sustantivos/cocina.jpg",
    "recursos/imagenes/oraciones/sustantivos/colegio.jpg", "recursos/imagenes/oraciones/sustantivos/supermercado.jpg",
    "recursos/imagenes/oraciones/sustantivos/pantalon.jpg", "recursos/imagenes/oraciones/sustantivos/botas.jpg",
    "recursos/imagenes/oraciones/sustantivos/gorro.jpg", "recursos/imagenes/oraciones/sustantivos/bufanda.jpg",
    "recursos/imagenes/oraciones/sustantivos/falda.jpg", "recursos/imagenes/oraciones/sustantivos/cartera.jpg",
    "recursos/imagenes/oraciones/sustantivos/lapiz.jpg", "recursos/imagenes/oraciones/sustantivos/libro.jpg",
    "recursos/imagenes/oraciones/sustantivos/telefono.jpg", "recursos/imagenes/oraciones/sustantivos/auto.jpg",
    "recursos/imagenes/oraciones/sustantivos/plaza.jpg", "recursos/imagenes/oraciones/sustantivos/piscina.jpg",
    "recursos/imagenes/oraciones/sustantivos/bicicleta.jpg", "recursos/imagenes/oraciones/sustantivos/naranja.jpg",
    "recursos/imagenes/oraciones/sustantivos/manzana.jpg", "recursos/imagenes/oraciones/sustantivos/jugo.jpg",
    "recursos/imagenes/oraciones/sustantivos/leche.jpg", "recursos/imagenes/oraciones/sustantivos/papas_fritas.jpg",
    "recursos/imagenes/oraciones/sustantivos/tomate.jpg", "recursos/imagenes/oraciones/sustantivos/platano.jpg",
    "recursos/imagenes/oraciones/sustantivos/sandia.jpg", "recursos/imagenes/oraciones/sustantivos/pan.jpg",
    "recursos/imagenes/oraciones/sustantivos/agua.jpg", "recursos/imagenes/oraciones/sustantivos/sandwich.jpg",
    "recursos/imagenes/oraciones/sustantivos/chocolate.jpg", "recursos/imagenes/oraciones/sustantivos/ensalada.jpg",
    "recursos/imagenes/oraciones/sustantivos/empanadas.jpg", "recursos/imagenes/oraciones/sustantivos/galletas.jpg",
    "recursos/imagenes/oraciones/sustantivos/helado.jpg", "recursos/imagenes/oraciones/sustantivos/elefante.jpg",
    "recursos/imagenes/oraciones/sustantivos/raton.jpg", "recursos/imagenes/oraciones/sustantivos/jirafa.jpg",
    "recursos/imagenes/oraciones/sustantivos/gato.jpg", "recursos/imagenes/oraciones/sustantivos/perro.jpg",
    "recursos/imagenes/oraciones/sustantivos/tortuga.jpg", "recursos/imagenes/oraciones/sustantivos/conejo.jpg",
    "recursos/imagenes/oraciones/sustantivos/hipopotamo.jpg", "recursos/imagenes/oraciones/sustantivos/mariquita.jpg",
    "recursos/imagenes/oraciones/sustantivos/leon.jpg", "recursos/imagenes/oraciones/sustantivos/caballo.jpg",
    "recursos/imagenes/oraciones/sustantivos/rana.jpg", "recursos/imagenes/oraciones/sustantivos/mochila.jpg",
    "recursos/imagenes/oraciones/sustantivos/estuche.jpg", "recursos/imagenes/oraciones/sustantivos/goma.jpg",
    "recursos/imagenes/oraciones/sustantivos/sacapuntas.jpg", "recursos/imagenes/oraciones/sustantivos/teodora.jpg",
    "recursos/imagenes/oraciones/sustantivos/zoran.jpg", "recursos/imagenes/oraciones/sustantivos/isabel.jpg",
    "recursos/imagenes/oraciones/sustantivos/lidia.jpg", "recursos/imagenes/oraciones/sustantivos/juan.jpg",
    "recursos/imagenes/oraciones/sustantivos/felipe.jpg", "recursos/imagenes/oraciones/sustantivos/matilde.jpg",
    "recursos/imagenes/oraciones/sustantivos/samy.jpg", "recursos/imagenes/oraciones/sustantivos/rosa.jpg",
    "recursos/imagenes/oraciones/sustantivos/natalia.jpg", "recursos/imagenes/oraciones/sustantivos/pepe.jpg",
    "recursos/imagenes/oraciones/sustantivos/mario.jpg", "recursos/imagenes/oraciones/sustantivos/carolina.jpg",
    "recursos/imagenes/oraciones/sustantivos/martina.jpg", "recursos/imagenes/oraciones/sustantivos/camila.jpg",
    "recursos/imagenes/oraciones/sustantivos/antonia.jpg"];

let verbos = ["recursos/imagenes/oraciones/verbos/come.jpg", "recursos/imagenes/oraciones/verbos/comen.jpg",
    "recursos/imagenes/oraciones/verbos/camina.jpg", "recursos/imagenes/oraciones/verbos/caminan.jpg",
    "recursos/imagenes/oraciones/verbos/juega.jpg", "recursos/imagenes/oraciones/verbos/juegan.jpg",
    "recursos/imagenes/oraciones/verbos/cocina.jpg", "recursos/imagenes/oraciones/verbos/cocinan.jpg",
    "recursos/imagenes/oraciones/verbos/bailan.jpg", "recursos/imagenes/oraciones/verbos/baila.jpg",
    "recursos/imagenes/oraciones/verbos/toma.jpg", "recursos/imagenes/oraciones/verbos/toman.jpg",
    "recursos/imagenes/oraciones/verbos/salta.jpg", "recursos/imagenes/oraciones/verbos/saltan.jpg",
    "recursos/imagenes/oraciones/verbos/duerme.jpg", "recursos/imagenes/oraciones/verbos/duermen.jpg",
    "recursos/imagenes/oraciones/verbos/corre.jpg", "recursos/imagenes/oraciones/verbos/corren.jpg",
    "recursos/imagenes/oraciones/verbos/lee.jpg", "recursos/imagenes/oraciones/verbos/leen.jpg",
    "recursos/imagenes/oraciones/verbos/canta.jpg", "recursos/imagenes/oraciones/verbos/cantan.jpg",
    "recursos/imagenes/oraciones/verbos/limpia.jpg", "recursos/imagenes/oraciones/verbos/limpian.jpg",
    "recursos/imagenes/oraciones/verbos/habla.jpg", "recursos/imagenes/oraciones/verbos/hablan.jpg",
    "recursos/imagenes/oraciones/verbos/trabaja.jpg", "recursos/imagenes/oraciones/verbos/trabajan.jpg",
    "recursos/imagenes/oraciones/verbos/espera.jpg", "recursos/imagenes/oraciones/verbos/esperan.jpg",
    "recursos/imagenes/oraciones/verbos/mira.jpg", "recursos/imagenes/oraciones/verbos/miran.jpg",
    "recursos/imagenes/oraciones/verbos/pinta.jpg", "recursos/imagenes/oraciones/verbos/pintan.jpg",
    "recursos/imagenes/oraciones/verbos/barre.jpg", "recursos/imagenes/oraciones/verbos/barren.jpg",
    "recursos/imagenes/oraciones/verbos/nada.jpg", "recursos/imagenes/oraciones/verbos/nadan.jpg",
    "recursos/imagenes/oraciones/verbos/compra.jpg", "recursos/imagenes/oraciones/verbos/compran.jpg",
    "recursos/imagenes/oraciones/verbos/escribe.jpg", "recursos/imagenes/oraciones/verbos/escriben.jpg",
    "recursos/imagenes/oraciones/verbos/rie.jpg", "recursos/imagenes/oraciones/verbos/rien.jpg",
    "recursos/imagenes/oraciones/verbos/es.jpg", "recursos/imagenes/oraciones/verbos/son.jpg",
    "recursos/imagenes/oraciones/verbos/esta.jpg", "recursos/imagenes/oraciones/verbos/estan.jpg"];

let complementos = ["recursos/imagenes/oraciones/complementos/alto.jpg", "recursos/imagenes/oraciones/complementos/chico.jpg",
    "recursos/imagenes/oraciones/complementos/grande.jpg", "recursos/imagenes/oraciones/complementos/rapido.jpg",
    "recursos/imagenes/oraciones/complementos/lento.jpg", "recursos/imagenes/oraciones/complementos/lindo.jpg",
    "recursos/imagenes/oraciones/complementos/rico.jpg", "recursos/imagenes/oraciones/complementos/bueno.jpg",
    "recursos/imagenes/oraciones/complementos/malo.jpg", "recursos/imagenes/oraciones/complementos/frio.jpg",
    "recursos/imagenes/oraciones/complementos/caliente.jpg", "recursos/imagenes/oraciones/complementos/divertido.jpg",
    "recursos/imagenes/oraciones/complementos/feo.jpg", "recursos/imagenes/oraciones/complementos/suave.jpg",
    "recursos/imagenes/oraciones/complementos/dulce.jpg", "recursos/imagenes/oraciones/complementos/salado.jpg",
    "recursos/imagenes/oraciones/complementos/feliz.jpg", "recursos/imagenes/oraciones/complementos/verde.jpg",
    "recursos/imagenes/oraciones/complementos/azul.jpg", "recursos/imagenes/oraciones/complementos/rosado.jpg",
    "recursos/imagenes/oraciones/complementos/amarillo.jpg", "recursos/imagenes/oraciones/complementos/cafe.jpg",
    "recursos/imagenes/oraciones/complementos/naranja.jpg", "recursos/imagenes/oraciones/complementos/negro.jpg",
    "recursos/imagenes/oraciones/complementos/gris.jpg", "recursos/imagenes/oraciones/complementos/delgado.jpg",
    "recursos/imagenes/oraciones/complementos/gordo.jpg", "recursos/imagenes/oraciones/complementos/largo.jpg",
    "recursos/imagenes/oraciones/complementos/corto.jpg", "recursos/imagenes/oraciones/complementos/duro.jpg",
    "recursos/imagenes/oraciones/complementos/blando.jpg", "recursos/imagenes/oraciones/complementos/aburrido.jpg",
    "recursos/imagenes/oraciones/complementos/bajo.jpg", "recursos/imagenes/oraciones/complementos/fuerte.jpg",
    "recursos/imagenes/oraciones/complementos/debil.jpg", "recursos/imagenes/oraciones/complementos/seco.jpg",
    "recursos/imagenes/oraciones/complementos/mojado.jpg", "recursos/imagenes/oraciones/complementos/nuevo.jpg",
    "recursos/imagenes/oraciones/complementos/rico_persona.jpg", "recursos/imagenes/oraciones/complementos/pobre.jpg",
    "recursos/imagenes/oraciones/complementos/liviano.jpg", "recursos/imagenes/oraciones/complementos/pesado.jpg",
    "recursos/imagenes/oraciones/complementos/alegre.jpg", "recursos/imagenes/oraciones/complementos/amargo.jpg",
    "recursos/imagenes/oraciones/complementos/lleno.jpg", "recursos/imagenes/oraciones/complementos/amable.jpg",
    "recursos/imagenes/oraciones/complementos/carinoso.jpg", "recursos/imagenes/oraciones/complementos/vacio.jpg"];

let posicion = 0;

let container = document.getElementById('carrusel-container');

let regresar = document.getElementById('regresar');
let avanzar = document.getElementById('avanzar');

let articulo = document.getElementById('btn-articulo');
let sustantivo = document.getElementById('btn-sustantivo');
let verbo = document.getElementById('btn-verbo');
let complemento = document.getElementById('btn-complemento');


let activa_articulo = document.getElementById('activa-articulo');
let activa_sustantivo = document.getElementById('activa-sustantivo');
let activa_verbo = document.getElementById('activa-verbo');
let activa_complemento = document.getElementById('activa-complemento');

let arreglo_imgs = document.getElementsByClassName('imgs');

let arreglo;
let art;
let sus;
let ver;
let com;

articulo.addEventListener('click', () => {
    posicion = 0;
    container.classList.remove("ocultar");
    arreglo = articulos;
    art = true;
    sus = false;
    ver = false;
    com = false;
    for (let i = 0; i < arreglo_imgs.length; i++) {
        arreglo_imgs[i].src = arreglo[i];
    }
}); 

for (let i = 0; i < arreglo_imgs.length; i++) {
    arreglo_imgs[i].addEventListener('click', () => {
        if (art == true) {
            activa_articulo.src = arreglo_imgs[i].src;
        } 
    });
}

sustantivo.addEventListener('click', () => {
    posicion = 0;
    container.classList.remove("ocultar");
    arreglo = sustantivos;
    art = false;
    sus = true;
    ver = false;
    com = false;
    for (let i = 0; i < arreglo_imgs.length; i++) {
        arreglo_imgs[i].src = arreglo[i];
    }
});

for (let i = 0; i < arreglo_imgs.length; i++) {
    arreglo_imgs[i].addEventListener('click', () => {
        if (sus == true) {
            activa_sustantivo.src = arreglo_imgs[i].src;
        }   
    });
}

verbo.addEventListener('click', () => {
    posicion = 0;
    container.classList.remove("ocultar");
    art = false;
    sus = false;
    ver = true;
    com = false;
    arreglo = verbos;
    for (let i = 0; i < arreglo_imgs.length; i++) {
        arreglo_imgs[i].src = arreglo[i];
    }
});

for (let i = 0; i < arreglo_imgs.length; i++) {
    arreglo_imgs[i].addEventListener('click', () => {
        if (ver == true) {
            activa_verbo.src = arreglo_imgs[i].src;
        }  
    });
}

complemento.addEventListener('click', () => {
    posicion = 0;
    container.classList.remove("ocultar");
    art = false;
    sus = false;
    ver = false;
    com = true;
    arreglo = complementos;
    for (let i = 0; i < arreglo_imgs.length; i++) {
        arreglo_imgs[i].src = arreglo[i];
    }
});

for (let i = 0; i < arreglo_imgs.length; i++) {
    arreglo_imgs[i].addEventListener('click', () => {
        if (com == true) {
            activa_complemento.src = arreglo_imgs[i].src;
        }
    });
}


function cambiar() {
    let cont = 0;
    let pos = posicion;
    while (cont < 18) {
        arreglo_imgs[cont].src = arreglo[pos];       
        cont++;
        if (pos == arreglo.length - 1) {
            pos = 0;
        } else {
            pos++;
        }
    }
}

regresar.addEventListener('click', () => {
    if (posicion == 0) {
        posicion = arreglo.length - 1;
    } else if (posicion > 0) {
        posicion--;
        console.log(posicion);
    }
    cambiar();
});

avanzar.addEventListener('click', () => {
    if (posicion < (arreglo.length - 1)) {
        posicion++;
        console.log(posicion);
    } else if (posicion == (arreglo.length - 1)) {
        posicion = 0;
    }
    cambiar();
});
