/*
 * @Name:Javascript Webcam Demo
 * @Date: 2020-11-18
 * @Author: Max Base
 * @Repository: https://basemax.github.io/JavascriptWebcamDemo
 */

var video = document.querySelector("#video");
var startVideo = document.querySelector("#start");
var stopVideo = document.querySelector("#stop");

startVideo.addEventListener("click", start, false);
stopVideo.addEventListener("click", stop, false);

function start() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(error) {
            console.log("Something went wrong!");
        });
    }
    else {
        alert("Not support!");
    }
}

function stop() {
    var stream = video.srcObject;
    var tracks = stream.getTracks();
    for(var i = 0; i < tracks.length; i++) {
        tracks[i].stop();
    }
    video.srcObject = null;
}
