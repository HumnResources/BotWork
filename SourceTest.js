setTimeout(() => exit());

// Function and Variable Declarations
 var Status; // Process ID + Toggle on/off
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
 };// Shuffle end
 var sleepFor = time => { var now = new Date().getTime();
   while (new Date().getTime() < now + time){ } };
 var touch = (time, loc) => {
  sleepFor(time);
  var tapX = loc[0];
  var tapY = loc[1];
  var tskr = shell("input tap " + tapX + ' ' + tapY, true, time);
 };
 var Conditions = () => {
  sleepFor(10);
  var tskr = shell("cat /proc/$(pidof com...android)/oom_adj", true, 0);
  Status = ((parseInt(tskr, 10))+(parseInt(global("%BotToggle"), 10))) || null;
  if (Status >= 9) { Status = "bkgrnd"; };
  switch (Status){
   case null: Status = "Closed"; break;
   case "bkgrnd": Status = "Background"; break;
   case 1: Status = "Ready"; break;
   case 2: Status = "Bots Disabled"; break;
   default: flashLong("Conditions Error"); break;
  };
 };
 
// Script Start
 Conditions();
 switch (Status) {
  case "Closed": flash(Status); break;
  case "Bots Disabled": flash(Status); break;
  case "Background": flash(Status); break;
  case "Ready": Shuffle(); Conditions(); flash(Status); 
   for (loops = 1; Status == "Ready"; loops++, Shuffle(), Conditions()){    
    touch(bankWAIT, BANK); // Stops somewhere around
    touch(psetWAIT, PSET); // Here usually ... 2 loops max
    touch(invWAIT, INV);    
    touch(startWAIT, START);     
    sleepFor(restartWAIT);
    flash("loops: " + loops) 
    if (Status != "Ready") { flash("Bot Closing"); sleepFor(400);}; 
   }; 
  default: flashLong("Script Error"); break;
 };
 
 
 
 
exit();
