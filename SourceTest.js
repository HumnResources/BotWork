setTimeout(() => exit());

// Function and Variable Declarations
 var TOGGLE; //RS Bot Toggle Button
 var PID; // Runescape Process ID
 var Status;
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
  psetWAIT = (rand(1680, 3000) + bankWAIT);
  invWAIT = (rand(1500, 2750) + psetWAIT);
  startWAIT = (rand(1700, 3000) + invWAIT);
  restartWAIT = (rand(10900, 11200) + startWAIT);
   
// Location Set
  BANK = [bankX, bankY];
  INV = [invX, invY];
  PSET = [psetX, psetY];
  START = [startX, startY];
 };

// More Functions  
 function Conditions(){
  var tmp = shell("cat /proc/$(pidof com...android)/oom_adj", true, 0);
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
  function touch(time, loc){ 
   var tmp = function(){
    var tapX = loc[0];
    var tapY = loc[1];
    var tskr = shell("sleep "+ (time/1000), true, 0); 
    var tskr = shell("input tap " + tapX + ' ' + tapY, true, time);
   };
   return tmp();
  };
 function pause(time) { 
  var tmp = function(){
   var tskr = shell("sleep "+ (time/1000), true, 0); 
   return tskr; 
  };
  return tmp();
 }; 

// Script Start
 Conditions();
 switch (Status) {
  case "Closed":
   flashLong(Status);
  exit();
  case "Bots Disabled":
   flashLong(Status);
  exit();
  case "Background":
   flashLong(Status);
  exit();
  case "Ready":
   Shuffle()
   Conditions();
   var loops = 0;
   while (Status == "Ready"){ 
    Shuffle();
    loops++;    
    touch(bankWAIT, BANK);
    //pause(300);
    touch(psetWAIT, PSET);
    //pause(300);
    touch(invWAIT, INV);
    //pause(300);
    touch(startWAIT, START); 
    //pause(300);
    pause(restartWAIT);
    //pause(3000);
    flash("Loops: " + loops);
    Conditions();
    if (Status != "Ready") {
     flashLong("Bot Closing");
    };
   };
  exit();
  default:
   flashLong("Error");
  exit()
 };
exit();
