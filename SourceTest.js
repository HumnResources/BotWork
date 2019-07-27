setTimeout(() => exit());

// Function and Variable Declarations
 var TOGGLE; // Bot Toggle Button
 var PID; // Process ID
 var Status; // Process ID + Toggle
 var rand = function(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
 };
 var Shuffle = function(){
  var bankX = rand(1933, 1863);
  var bankY = rand(504, 108);
  var invX = rand(2348, 2223);
  var invY = rand(263, 145);
  var psetX = rand(826,757);
  var psetY = rand(1218, 1213);
  var startX = rand(2362, 1373);
  var startY = rand(1315, 1230);
  
// Random Wait Times in Milliseconds
  bankWAIT = rand(1700, 2700);
  psetWAIT = rand(1680, 3000);
  invWAIT = rand(1500, 2750);
  startWAIT = rand(1700, 3000);
  restartWAIT = rand(10900, 11200);   
  
// Location Set
  BANK = [bankX, bankY];
  INV = [invX, invY];
  PSET = [psetX, psetY];
  START = [startX, startY];
 };
 
// More Functions  
 function Conditions(){
  var tmp = shell("cat /proc/$(pidof com.jagex.runescape.android)/oom_adj", true, 0);
  PID = parseInt(tmp, 10);
  TOGGLE = global("%BotToggle");
  Status = PID + TOGGLE;
   switch (Status){
    case "NaN0":
     Status = "Closed";
     break;
    case "01": 
     Status = "Ready";
     break;
    case "00":
     Status = "Bots Disabled"
     break;
    default:
     Status = "Background"
     break;
   };
 };
 /* function touch(time, loc){ 
   var tmp = function(){
    var tapX = loc[0];
    var tapY = loc[1];
    var tskr = shell("sleep " + (time/900), true, 0); 
    var tskr = shell("input tap " + tapX + ' ' + tapY, true, time);
   };
   return tmp();
  };
 function pause(time) { 
  var tmp = function(){
   var tskr = shell("sleep " + (time/900), true, time); 
   return tskr; 
  };
  return tmp();
 }; */
 
 

  function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
  };
 
  function touch(time, loc){
   sleepFor(time); 
   //var tmp = function(){
    var tapX = loc[0];
    var tapY = loc[1];
    //var tskr = shell("sleep " + (time/900), true, 0); 
    var tskr = shell("input tap " + tapX + ' ' + tapY, true, 0);
   //};
   //return tmp;
  };
 //test = [800, 1500];
 
 /* Conditions();
 Shuffle();
 sleep(3000, test); */
 
 
 
 
// Script Start
 Conditions();
 switch (Status) {
  case "Closed":
   flash(Status);
  exit();
  case "Bots Disabled":
   flash(Status);
  exit();
  case "Background":
   flash(Status);
  exit();
  case "Ready":
   Shuffle()
   Conditions();
   flash(Status); 
   var loops = 0;
   while (Status == "Ready"){ 
    
    loops++;    
    touch(bankWAIT, BANK);
    touch(psetWAIT, PSET); 
    touch(invWAIT, INV);    
    touch(startWAIT, START);     
    sleepFor(restartWAIT);  

    Shuffle();
    Conditions();
    flash("Loops: " + loops);
    
    if (Status != "Ready") {
     flash("Bot Closing");
    };
   };
  exit();
  default:
   flashLong("Error");
  exit()
 };
exit(); 
