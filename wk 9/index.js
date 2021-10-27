days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for(i=0; i<document.getElementByClassName("days").length; i++){
  console.log(days[i]);
  document.getElementByClassName("day")[i].id= meals[i];

}
