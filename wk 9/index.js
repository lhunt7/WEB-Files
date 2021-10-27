days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for(i=0; i<document.getElementByClassName("day").length; i++){
  console.log(days[i]);
  document.getElementByClassName("day")[i].id = days[i];

}
