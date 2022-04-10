function preload()
{

}
function draw()
{

}
function setup()
{
 canvas = createCanvas(600, 600);
 canvas.background("#CC99FF");
 canvas.position(650, 120);
 camera = createCapture(VIDEO);
 camera.size(600, 600);
 posenet = ml5.poseNet(camera, modelLoaded);
 posenet.on("pose", gotPoses);
}
function modelLoaded()
{
    console.log("Model Loaded!");
}
function gotPoses(results)
{
    if (results.length > 0)
    {
      console.log(results);
    }
}