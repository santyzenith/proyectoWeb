// JavaScript source code

//navigator.mediaDevices.getUserMedia({ audio:false, video:true }).then((stream) => {
//    let video = document.getElementById('video-container')
//    video.srcObject = stream

//}).catch((err) => console.log(err))

let constraintObj = {
    audio: false,
    video: true
};
// width: 1280, height: 720  -- preference only
// facingMode: {exact: "user"}
// facingMode: "environment"

//handle older browsers that might implement getUserMedia in some way
//if (navigator.mediaDevices === undefined) {
//    navigator.mediaDevices = {};
//    navigator.mediaDevices.getUserMedia = function (constraintObj) {
//        let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
//        if (!getUserMedia) {
//            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
//        }
//        return new Promise(function (resolve, reject) {
//            getUserMedia.call(navigator, constraintObj, resolve, reject);
//        });
//    }
//} else {
//    navigator.mediaDevices.enumerateDevices()
//        .then(devices => {
//            devices.forEach(device => {
//                console.log(device.kind.toUpperCase(), device.label);
//                //, device.deviceId
//            })
//        })
//        .catch(err => {
//            console.log(err.name, err.message);
//        })
//}

navigator.mediaDevices.getUserMedia(constraintObj)
    .then(function (mediaStreamObj) {
        //connect the media stream to the first video element
        let video = document.getElementById('video-record');
        if ("srcObject" in video) {
            video.srcObject = mediaStreamObj;
        } else {
            //old version
            video.src = window.URL.createObjectURL(mediaStreamObj);
        }

        video.onloadedmetadata = function (ev) {
            //show in the video element what is being captured by the webcam
            video.play();
        };

        //add listeners for saving video/audio
        let start = document.getElementById('startVideo');
        let stop = document.getElementById('stopVideo');

        let play = document.getElementById('playVideo');

        let pause = document.getElementById('pauseVideo');

        let body = document.getElementById('body-video');

        let vidSave = document.getElementById('video-container');
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        let chunks = [];

        start.addEventListener('click', (ev) => {

            mediaRecorder.start();
            console.log(mediaRecorder.state);

            ////pixelo el fondo al grabar
            //body.classList.add("pixelar")
            ////

            body.style.background = "rgba(22,20,20,0.9)";

            video.classList.remove("ocultar");
            vidSave.classList.add("ocultar");

            start.classList.add("ocultar");
            stop.classList.remove("ocultar");

            play.classList.add("ocultar");
            pause.classList.add("ocultar");
        })
        stop.addEventListener('click', (ev) => {
            mediaRecorder.stop();

            ////quito el pixelado del fondo al parar
            //body.classList.remove("pixelar")
            ////
            body.style.background = "";
            
            video.classList.add("ocultar")
            vidSave.classList.remove("ocultar");
            stop.classList.add("ocultar");
            start.classList.remove("ocultar");

            play.classList.remove("ocultar");

            console.log(mediaRecorder.state);
        })
        play.addEventListener('click', (ev) => {
            play.classList.add("ocultar")
            pause.classList.remove("ocultar")
            vidSave.play();
        })

        pause.addEventListener('click', (ev) => {
            play.classList.remove("ocultar")
            pause.classList.add("ocultar")
            vidSave.pause();
        });

        mediaRecorder.ondataavailable = function (ev) {
            chunks.push(ev.data);
        }
        mediaRecorder.onstop = (ev) => {
            let blob = new Blob(chunks, { 'type': 'video/mp4;' });
            chunks = [];
            let videoURL = window.URL.createObjectURL(blob);

            vidSave.src = videoURL;
        }
    })
    .catch(function (err) {
        console.log(err.name, err.message);
    });

/*********************************
getUserMedia returns a Promise
resolve - returns a MediaStream Object
reject returns one of the following errors
AbortError - generic unknown cause
NotAllowedError (SecurityError) - user rejected permissions
NotFoundError - missing media track
NotReadableError - user permissions given but hardware/OS error
OverconstrainedError - constraint video settings preventing
TypeError - audio: false, video: false
*********************************/


