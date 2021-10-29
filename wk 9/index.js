days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

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
  e.target.classList.toggle("activeDay");
  console.log(e.target.innerHTML);
}



const photoArray = ["calm-image-2.jpg","calm-image-3.jpg","calm-image-4.jpg","calm-image-5.jpeg","calm-image-6.jpg","calm-image-7.jpg","calm-image-1.jpg"];
let index = 0;

function buttonClicked() {
  console.log(photoArray[index]);
  document.getElementById("calmingphoto").src = photoArray[index];
  if(index>=6){
    index=0;
  }else{
    index++
  }
}
