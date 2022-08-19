var noseX = 0, noseY = 0, diff = 0, leftX = 0, rightX = 0;
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
    fill('#FFFFFF');
    stroke('#000000');
    square(noseX, noseY, 100);
}

function modelLoaded() {
    console.log('PoseNet is initiated');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(result);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftX = Math.floor(results[0].pose.leftWrist.x);
        rightX = Math.floor(results[0].pose.rightWrist.x);
        diff = Math.abs(leftX - rightX);
    }
}