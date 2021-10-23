let days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];



const photos = ["Web-Files/midterm-calm-images/calm-image-1.jpeg","Web-Files/midterm-calm-images/calm-image-2.jpeg","Web-Files/midterm-calm-images/calm-image-3.jpeg","Web-Files/midterm-calm-images/calm-image-4.jpeg","Web-Files/midterm-calm-images/calm-image-5.jpeg","Web-Files/midterm-calm-images/calm-image-6.jpeg","Web-Files/midterm-calm-images/calm-image-7.jpeg"];
let photocount = 0;

document.getElementById("photobutton").addEventListener("click", NewScene());
function NewScene(){
  addEventListener()
  alert("nice!")
  console.log(photos[photocount]);
  document.getElementById('calmingphoto').innerHTML = photos[photocount];
  if(photocount>=6){
    photocount = 0;
  }else{
    photocount+=1;
}
