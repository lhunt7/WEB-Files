let days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let lastday = "Monday";


for(i=0; i<document.getElementsByClassName("day").length; i++){

  document.getElementsByClassName("day")[i].id = days[i];

  document.getElementById("MonButton").addEventListener('click',setActive, false);
  document.getElementById("TueButton").addEventListener('click',setActive, false);
  document.getElementById("WedButton").addEventListener('click',setActive, false);
  document.getElementById("ThuButton").addEventListener('click',setActive, false);
  document.getElementById("FriButton").addEventListener('click',setActive, false);
  document.getElementById("SatButton").addEventListener('click',setActive, false);
  document.getElementById("SunButton").addEventListener('click',setActive, false);

}



function setActive(e){
  lastday = document.getElementsByClassName("activeDay")[0].id;
  if(lastday != undefined){
    document.getElementById("lastday").classList.toggle("activeDay");
  }

  console.log(e.target.innerHTML);

  e.target.classList.toggle("activeDay");


  currentday = document.getElementsByClassName("activeDay")[0].id;
  console.log("currentday");
}



const photoArray = ["calm-image-2.jpg","calm-image-3.jpg","calm-image-5.jpeg","calm-image-7.jpg", "calm-image-8.jpg","calm-image-9.jpeg","calm-image-10.jpg","calm-image-11.jpg","calm-image-12.jpeg","calm-image-13.jpg","calm-image-14.jpg","calm-image-1.jpg"];
let index = 0;

function buttonClicked() {
  console.log(photoArray[index]);
  document.getElementById("calmingphoto").src = photoArray[index];
  if(index>=11){
    index=0;
  }else{
    index++;
  }
}
