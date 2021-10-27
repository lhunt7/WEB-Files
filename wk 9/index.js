days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

for(i=0; i<document.getElementsByClassName("day").length; i++){
  console.log(days[i]);
  document.getElementsByClassName("day")[i].id = days[i];

}
