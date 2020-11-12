// JavaScript source code

let video = document.getElementsByClassName("auto");

//video.addEventListener('mouseover', (ev) => {
//    video.play()
//    video.setAttribute('autoplay', '')
//    video.setAttribute('muted', '')
//    video.setAttribute('loop', '')
//});

for (let i = 0; i < video.length; i++) {
    video[i].addEventListener('mouseover', (ev) => {
        video[i].play()
        video[i].setAttribute('autoplay', '')
        video[i].setAttribute('muted', '')
        video[i].setAttribute('loop', '')
    });

    video[i].addEventListener('mouseleave', (ev) => {
        video[i].pause()
        video[i].removeAttribute('autoplay')
        video[i].removeAttribute('muted')
        video[i].removeAttribute('loop')
    });
}

//atrapar la excepcio de la promesa
//var promise = document.querySelector('video').play();

//if (promise !== undefined) {
//    promise.then(_ => {
//        // Autoplay started!
//    }).catch(error => {
//        // Autoplay was prevented.
//        // Show a "Play" button so that user can start playback.
//    });
//}

//agregar categoria
let categoria = document.getElementById('agregarCategoria');
let container = document.getElementById('categoria-container');

categoria.addEventListener('click', (ev) => {
    const item1 = document.createElement("DIV");
    item1.classList.add("categoria-item");

    const item2 = document.createElement("A");
    item2.setAttribute('href', '#');
    item2.setAttribute('contenteditable', 'true');
    item2.classList.add("categoria-item__titulo");
    item2_text = document.createTextNode('Nueva categoria');
    item2.appendChild(item2_text);
    item1.appendChild(item2);

    const item3 = document.createElement("DIV");
    item3.classList.add("categoria-item__media");

    const item3_video = document.createElement("VIDEO");
    item3_video.classList.add("categoria-item__media-imgVideo");
    item3_video.classList.add("auto");

    const item3_img = document.createElement("IMG");
    item3_img.classList.add("categoria-item__media-imgVideo")

    item3.appendChild(item3_video);
    item3.appendChild(item3_img);

    item1.appendChild(item3);

    container.appendChild(item1);
    
})

