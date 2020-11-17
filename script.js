var video = document.querySelector("#video");
var startVideo = document.querySelector("#start");
var stopVideo = document.querySelector("#stop");

startVideo.addEventListener("click", start, false);
stopVideo.addEventListener("click", stop, false);

function start() {
    if(navigator.mediaDevices.getUserMedia) {
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
