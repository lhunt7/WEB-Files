let days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let lastday = "Monday";


for(i=0; i<document.getElementsByClassName("day").length; i++){

  document.getElementsByClassName("day")[i].id = days[i];

  document.getElementById("MonButton").addEventListener('click',MonActive, false);
  document.getElementById("TueButton").addEventListener('click',TueActive, false);
  document.getElementById("WedButton").addEventListener('click',WedActive, false);
  document.getElementById("ThuButton").addEventListener('click',ThuActive, false);
  document.getElementById("FriButton").addEventListener('click',FriActive, false);
  document.getElementById("SatButton").addEventListener('click',SatActive, false);
  document.getElementById("SunButton").addEventListener('click',SunActive, false);

}



function MonActive(e){
  document.getElementById("ToDoMon").style.display = "block";
  document.getElementById("ToDoTue").style.display = "none";
  document.getElementById("ToDoWed").style.display = "none";
  document.getElementById("ToDoThu").style.display = "none";
  document.getElementById("ToDoFri").style.display = "none";
  document.getElementById("ToDoSat").style.display = "none";
  document.getElementById("ToDoSun").style.display = "none";

  document.getElementById("MonTitle").style.display = "block";
  document.getElementById("TueTitle").style.display = "none";
  document.getElementById("WedTitle").style.display = "none";
  document.getElementById("ThuTitle").style.display = "none";
  document.getElementById("FriTitle").style.display = "none";
  document.getElementById("SatTitle").style.display = "none";
  document.getElementById("SunTitle").style.display = "none";

  document.getElementById("MonQuote").style.display = "block";
  document.getElementById("TueQuote").style.display = "none";
  document.getElementById("WedQuote").style.display = "none";
  document.getElementById("ThuQuote").style.display = "none";
  document.getElementById("FriQuote").style.display = "none";
  document.getElementById("SatQuote").style.display = "none";
  document.getElementById("SunQuote").style.display = "none";



  // lastday = document.getElementsByClassName("activeDay")[0].id;
  // if(lastday != undefined){
  //   document.getElementById("lastday").classList.toggle("activeDay");
  // }
  //
  // console.log(e.target.innerHTML);
  //
  // e.target.classList.toggle("activeDay");
  //
  //
  // currentday = document.getElementsByClassName("activeDay")[0].id;
  // console.log("currentday");
}

function TueActive(e){
  document.getElementById("ToDoMon").style.display = "none";
  document.getElementById("ToDoTue").style.display = "block";
  document.getElementById("ToDoWed").style.display = "none";
  document.getElementById("ToDoThu").style.display = "none";
  document.getElementById("ToDoFri").style.display = "none";
  document.getElementById("ToDoSat").style.display = "none";
  document.getElementById("ToDoSun").style.display = "none";

  document.getElementById("MonTitle").style.display = "none";
  document.getElementById("TueTitle").style.display = "block";
  document.getElementById("WedTitle").style.display = "none";
  document.getElementById("ThuTitle").style.display = "none";
  document.getElementById("FriTitle").style.display = "none";
  document.getElementById("SatTitle").style.display = "none";
  document.getElementById("SunTitle").style.display = "none";

  document.getElementById("MonQuote").style.display = "none";
  document.getElementById("TueQuote").style.display = "block";
  document.getElementById("WedQuote").style.display = "none";
  document.getElementById("ThuQuote").style.display = "none";
  document.getElementById("FriQuote").style.display = "none";
  document.getElementById("SatQuote").style.display = "none";
  document.getElementById("SunQuote").style.display = "none";

}

function WedActive(e){
  document.getElementById("ToDoMon").style.display = "none";
  document.getElementById("ToDoTue").style.display = "none";
  document.getElementById("ToDoWed").style.display = "block";
  document.getElementById("ToDoThu").style.display = "none";
  document.getElementById("ToDoFri").style.display = "none";
  document.getElementById("ToDoSat").style.display = "none";
  document.getElementById("ToDoSun").style.display = "none";

  document.getElementById("MonTitle").style.display = "none";
  document.getElementById("TueTitle").style.display = "none";
  document.getElementById("WedTitle").style.display = "block";
  document.getElementById("ThuTitle").style.display = "none";
  document.getElementById("FriTitle").style.display = "none";
  document.getElementById("SatTitle").style.display = "none";
  document.getElementById("SunTitle").style.display = "none";

  document.getElementById("MonQuote").style.display = "none";
  document.getElementById("TueQuote").style.display = "none";
  document.getElementById("WedQuote").style.display = "block";
  document.getElementById("ThuQuote").style.display = "none";
  document.getElementById("FriQuote").style.display = "none";
  document.getElementById("SatQuote").style.display = "none";
  document.getElementById("SunQuote").style.display = "none";

}

function ThuActive(e){
  document.getElementById("ToDoMon").style.display = "none";
  document.getElementById("ToDoTue").style.display = "none";
  document.getElementById("ToDoWed").style.display = "none";
  document.getElementById("ToDoThu").style.display = "block";
  document.getElementById("ToDoFri").style.display = "none";
  document.getElementById("ToDoSat").style.display = "none";
  document.getElementById("ToDoSun").style.display = "none";

  document.getElementById("MonTitle").style.display = "none";
  document.getElementById("TueTitle").style.display = "none";
  document.getElementById("WedTitle").style.display = "none";
  document.getElementById("ThuTitle").style.display = "block";
  document.getElementById("FriTitle").style.display = "none";
  document.getElementById("SatTitle").style.display = "none";
  document.getElementById("SunTitle").style.display = "none";

  document.getElementById("MonQuote").style.display = "none";
  document.getElementById("TueQuote").style.display = "none";
  document.getElementById("WedQuote").style.display = "none";
  document.getElementById("ThuQuote").style.display = "block";
  document.getElementById("FriQuote").style.display = "none";
  document.getElementById("SatQuote").style.display = "none";
  document.getElementById("SunQuote").style.display = "none";

}

function FriActive(e){
  document.getElementById("ToDoMon").style.display = "none";
  document.getElementById("ToDoTue").style.display = "none";
  document.getElementById("ToDoWed").style.display = "none";
  document.getElementById("ToDoThu").style.display = "none";
  document.getElementById("ToDoFri").style.display = "block";
  document.getElementById("ToDoSat").style.display = "none";
  document.getElementById("ToDoSun").style.display = "none";

  document.getElementById("MonTitle").style.display = "none";
  document.getElementById("TueTitle").style.display = "none";
  document.getElementById("WedTitle").style.display = "none";
  document.getElementById("ThuTitle").style.display = "none";
  document.getElementById("FriTitle").style.display = "block";
  document.getElementById("SatTitle").style.display = "none";
  document.getElementById("SunTitle").style.display = "none";

  document.getElementById("MonQuote").style.display = "none";
  document.getElementById("TueQuote").style.display = "none";
  document.getElementById("WedQuote").style.display = "none";
  document.getElementById("ThuQuote").style.display = "none";
  document.getElementById("FriQuote").style.display = "block";
  document.getElementById("SatQuote").style.display = "none";
  document.getElementById("SunQuote").style.display = "none";

}

function SatActive(e){
  document.getElementById("ToDoMon").style.display = "none";
  document.getElementById("ToDoTue").style.display = "none";
  document.getElementById("ToDoWed").style.display = "none";
  document.getElementById("ToDoThu").style.display = "none";
  document.getElementById("ToDoFri").style.display = "none";
  document.getElementById("ToDoSat").style.display = "block";
  document.getElementById("ToDoSun").style.display = "none";

  document.getElementById("MonTitle").style.display = "none";
  document.getElementById("TueTitle").style.display = "none";
  document.getElementById("WedTitle").style.display = "none";
  document.getElementById("ThuTitle").style.display = "none";
  document.getElementById("FriTitle").style.display = "none";
  document.getElementById("SatTitle").style.display = "block";
  document.getElementById("SunTitle").style.display = "none";

  document.getElementById("MonQuote").style.display = "none";
  document.getElementById("TueQuote").style.display = "none";
  document.getElementById("WedQuote").style.display = "none";
  document.getElementById("ThuQuote").style.display = "none";
  document.getElementById("FriQuote").style.display = "none";
  document.getElementById("SatQuote").style.display = "block";
  document.getElementById("SunQuote").style.display = "none";

}

function SunActive(e){
  document.getElementById("ToDoMon").style.display = "none";
  document.getElementById("ToDoTue").style.display = "none";
  document.getElementById("ToDoWed").style.display = "none";
  document.getElementById("ToDoThu").style.display = "none";
  document.getElementById("ToDoFri").style.display = "none";
  document.getElementById("ToDoSat").style.display = "none";
  document.getElementById("ToDoSun").style.display = "block";

  document.getElementById("MonTitle").style.display = "none";
  document.getElementById("TueTitle").style.display = "none";
  document.getElementById("WedTitle").style.display = "none";
  document.getElementById("ThuTitle").style.display = "none";
  document.getElementById("FriTitle").style.display = "none";
  document.getElementById("SatTitle").style.display = "none";
  document.getElementById("SunTitle").style.display = "block";

  document.getElementById("MonQuote").style.display = "none";
  document.getElementById("TueQuote").style.display = "none";
  document.getElementById("WedQuote").style.display = "none";
  document.getElementById("ThuQuote").style.display = "none";
  document.getElementById("FriQuote").style.display = "none";
  document.getElementById("SatQuote").style.display = "none";
  document.getElementById("SunQuote").style.display = "block";

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
