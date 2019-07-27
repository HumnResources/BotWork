setTimeout(() => exit());
// Function and Variable Declarations
 var TOGGLE; // Bot Toggle Button
 var PID; // Process ID
 var Status; // Process ID + Toggle
 var rand = (max, min) => {return Math.floor(Math.random() * (max - min + 1)) + min;};
 var Shuffle = () => {
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
  psetWAIT = rand(1600, 3000);
  invWAIT = rand(1500, 2800);
  startWAIT = rand(1700, 3000);
  restartWAIT = rand(11000, 12500);
// Location Set
  BANK = [bankX, bankY];
  INV = [invX, invY];
  PSET = [psetX, psetY];
  START = [startX, startY];
 }; 
// More Functions  
 var Conditions = () => {
  var tmp = shell("cat /proc/$(pidof com.jagex.runescape.android)/oom_adj", true, 0);
  PID = parseInt(tmp, 10);
  TOGGLE = global("%BotToggle");
  Status = PID + TOGGLE;
   switch (Status){
    case "NaN0":
     return Status = "Closed";
     break;
    case "01": 
     return Status = "Ready";
     break;
    case "00":
     return Status = "Bots Disabled"
     break;
    default:
     return Status = "Background"
     break;
   };
 };
 var sleepFor = time => { var now = new Date().getTime();
   while(new Date().getTime() < now + time){ } };
 var touch = (time, loc) => {
  sleepFor(time); 
   var tapX = loc[0];
   var tapY = loc[1];
   var tskr = shell("input tap " + tapX + ' ' + tapY, true, time);
   return tskr = shell("history -d", true, time); 
  };
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
   for (loops = 1; Status == "Ready"; loops++, Shuffle(), Conditions()){    
    touch(bankWAIT, BANK); // Stops somewhere around
    touch(psetWAIT, PSET); // Here usually ... 2 loops max
    touch(invWAIT, INV);    
    touch(startWAIT, START);     
    sleepFor(restartWAIT);
    flash("loops: " + loops) 
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




//test = [800, 1500];
