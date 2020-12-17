// JavaScript source code

let cont = document.getElementById('contVoc');
let array = document.getElementsByName('item');
let posi = 0;



cont.addEventListener('keydown', (event) => {
    if (event.key.toString() == "ArrowRight") {
        if (posi < (array.length - 1)) {
            posi++;
            array[posi].focus();
        } else if (posi == (array.length - 1)) {
            posi = 0;
            array[posi].focus();
        }
        
    }
    if (event.key.toString() == "ArrowLeft") {
        if (posi == 0) {
            posi = array.length - 1;
            array[posi].focus();
        } else if (posi > 0) {
            posi--;
            array[posi].focus();
        }
        
    }
});

