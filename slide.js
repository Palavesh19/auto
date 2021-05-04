var img=[
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3a%2f%2fcdni.autocarindia.com%2fReviews%2fC5-Aircross-front.jpg&c=0",
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3a%2f%2fcdni.autocarindia.com%2fReviews%2fFortuner-tracking.jpg&c=0",
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3a%2f%2fcdni.autocarindia.com%2fReviews%2fTata-Safari-static.jpg&c=0",
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3a%2f%2fcdni.autocarindia.com%2fReviews%2fS5-Sportback-front-static.jpg&c=0",
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3a%2f%2fcdni.autocarindia.com%2fReviews%2f2021-Volvo-S60-front-static.jpg&c=0",
  "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http%3a%2f%2fcdni.autocarindia.com%2fReviews%2fMercedes-A-class-static.jpg&c=0"
]
var rightbtn=document.getElementById('right');
var leftbtn=document.getElementById('left');
var i=0;
var time=5000;
function setImage(){
  document.slide.src=img[i];
}
function slideImg(){
  if(i<img.length-1){
    i++;
  }
  else{
    i=0;
  }
  setImage();
  setTimeout('slideImg()',time);
}
window.onload=slideImg;
rightbtn.addEventListener('click',function(){
  if(i<img.length-1){
    i++;
  }
  else{
    i=0;
  }
  setImage();
});
leftbtn.addEventListener('click',function(){
  if(i>0){
    i--;
  }
  else{
    i=img.length-1;
  }
  setImage();
});