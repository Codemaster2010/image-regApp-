noseX=30;
noseY=30;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/cHZg1Mvg/Pngtree-cartoon-gentleman-retro-mustache-beard-5456655.png');
}
function setup(){
    canavs= createCanvas(300, 300);
    canavs.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}


function draw(){
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}