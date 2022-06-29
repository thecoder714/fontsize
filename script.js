function setup() {
    canvas = createCanvas(550, 510);
    canvas.position(800,160);
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 160)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#2d2d2d');
}

function modelLoaded() {
    console.log('PoseNet is initiated');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(result);
    }
}