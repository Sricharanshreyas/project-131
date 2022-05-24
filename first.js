function return1(){
    window.location="index.html";
}
// img="";
// status=false;
// function preload(){
//     img = loadImage("laptop_and_phone.jpg");
// }
// function setup(){
//     canvas=createCanvas(500,450);
//     canvas.position(450,100);
//     cocoSSD=ml5.objectDetector('cocossd',modelloaded);
//     document.getElementById("status").innerHTML="status:detecting objects";
// }
// function draw(){
//     image(img,0,0,500,450);
//     fill("green");
//     text("Laptop",45,75);
//     textSize(30);
//     noFill();
//     stroke("green");
//     rect(45,80,250,400);

//     fill("red");
//     text("Phone",250,75);
//     textSize(30);
//     noFill();
//     stroke("red");
//     rect(250,80,250,400);
 
// }
// function modelloaded(){
//     console.log("cocossd is loaded");
//     status=true;
//     cocoSSD.detect(img,gotresults);
// }
// function gotresults(error,results){
//     if(error){
//         console.error(error);
//     }
//     else{
//         console.log(results);
//     }

// }