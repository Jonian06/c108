function start(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bditIHPdP/model.json',model);
}
function model(){
classifier.classify(gotresult);
}
function gotresult(error,results){
if(error)
{
console.error(error);
}
else{
console.log(results);
randomnumber_r=Math.floor(Math.random()*255)+1;
randomnumber_g=Math.floor(Math.random()*255)+1;
randomnumber_b=Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
document.getElementById("result_accuracy").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2);
document.getElementById("result_label").style.colo="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
document.getElementById("result_accuracy").style.colo="rgb("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";

img=document.getElementById('alien1');
img1=document.getElementById('alien2');
img2=document.getElementById('alien3');
img3=document.getElementById('alien4');

if(results[0].label == "bell")
{
img.src='aliens-01.gif';
img1.src='aliens-02.png';
img2.src='aliens-03.png';
img3.src='aliens-04.png';
}
else if(results[0].label == "clap")
{
img.src='aliens-01.png';
img1.src='aliens-02.png';
img2.src='aliens-03.gif';
img3.src='aliens-04.png';
}
else if(results[0].label == "whistle")
{
img.src='aliens-01.png';
img1.src='aliens-02.gif';
img2.src='aliens-03.png';
img3.src='aliens-04.png';
}
else
{
img.src='aliens-01.png';
img1.src='aliens-02.png';
img2.src='aliens-03.png';
img3.src='aliens-04.gif';
}
}
}