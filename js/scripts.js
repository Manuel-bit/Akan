var century, year, month, day, gender;
var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday'];
var maleName = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var date=[];
function getData(){
  century=document.getElementById('cc').value;
  date.push(century);
  year= document.getElementById('yy').value;
  date.push(year);
  moth= document.getElementById('mm').value;
  date.push(month);
  day= document.getElementById('dd').value;
  date.push(day);
  gender= document.getElementById('gender').value;
  checkData();
}
function checkData(){
  if(date[2]<= 0 && date[2]> 12){
    alert("invalid month");
    return;
  }
  if(date[3]<= 0 && date[3]> 31){
    alert("invalid day");
    return;
  }
  final();
}
function calculateName(){
   return (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
}
function final(){
  var result= parseInt(calculateName());
  if(gender==0){
    alert("your Akan name is " + maleName[result]+ ", and you were born in " + week[result]);
  }
  else{
    alert("your akan name is " + femaleName[result] + ", and you were born in " + week[result]);
  }
}
