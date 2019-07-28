setTimeout(() => exit());
// Globals | Max X | Min X | Max Y | Min Y |
 var BANK = [1933, 1863, 504, 108]; 
 //var INV = [2350, 2215, 265, 145]; 
 var PSET = [840, 740, 1290, 1205];
 var START = [2390, 1365, 1320, 1220];
 var SKILL = [500, 360];
 var BOB = [2025, 1935, 1245, 1165];
 var BOBTAKE = [2270, 2215, 1120, 1070]; 
 // Pause Times | Max | Min |
 var bankWAIT = [1700, 2700];
 var psetWAIT = [1600, 3000];
 var invWAIT = [1500, 2800];
 var startWAIT = [1700, 3000];
 var restartWAIT = [11000, 12500];
 var STATUS;
 // Functions
 var rand = num => {        // Array | [0]=Max1 | [1]=Min1 | [3]=Max2 | [3]=Min2 |
  switch (num.length) {     //       | [4]=Max3 | [5]=Min3 | [6]=Max4 | [7]=Min4 |
   case 2: var tmp = [];    // Args  |   Max    |   Min    |   Min    |
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
   return tmp; // Returns 1 Random Number
   case 4: var tmp = []; 
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
    tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);
   return tmp; // Returns 2 Random Numbers
   case 8: var tmp = []; 
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
    tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);
    tmp.push(Math.floor(Math.random() * (num[4] - num[5] + 1)) + num[5]);
    tmp.push(Math.floor(Math.random() * (num[6] - num[7] + 1)) + num[7]);
   return tmp; // Returns 4 Random Numbers
   default: flash("Rand Error"); exit();
  };
 };
 var Shuffle = () => { var tmp;
  tmp = rand(BANK); BANK = tmp;
  //tmp = rand(INV); INV = tmp;
  tmp = rand(PSET); PSET = tmp;
  tmp = rand(START); START = tmp;
  tmp = rand(bankWAIT); bankWAIT = tmp;
  tmp = rand(psetWAIT); psetWAIT = tmp;
  tmp = rand(invWAIT); invWAIT = tmp;
  tmp = rand(startWAIT); startWAIT = tmp;
  tmp = rand(restartWAIT); restartWAIT = tmp;
 };
 var sleepFor = time => { var now = new Date().getTime(); //Sleepy time
   while (new Date().getTime() < now + time){ } };
 var touch = (time, loc) => {
  switch (loc.length) {
   case 2: sleepFor(time); // Generic tingle tap
    var tskr = shell("input tap " +loc[0]+ ' ' +loc[1], true, time);
   break; 
   case 4: sleepFor(time); // Swipe action for menu selection
    var tskr = shell("input tap " +loc[0]+ ' ' +loc[1]+ ' ' +(loc[0]-15)+ ' ' +(loc[1]-15), true, time);
   break; }; };
 var Conditions = () => {
  sleepFor(10);
  var tskr = shell("cat /proc/$(pidof com.jagex.runescape.android)/oom_adj", true, 0);
  STATUS = ((parseInt(tskr, 10))+(parseInt(global("%BotToggle"), 10))) || null;
  if (STATUS >= 9) { STATUS = "bkgrnd"; };
  switch (STATUS){
   case null: STATUS = "Closed"; break;
   case "bkgrnd": STATUS = "Background"; break;
   case 1: STATUS = "Ready"; break;
   case 2: STATUS = "Bots Disabled"; break;
   default: flashLong("Conditions Error"); break;
  };
 };
// Backpack! Backpack! ... But really tho lol  | Backpack Layout 7x4 | 
 var BackpackInit = () => { 
  Bag = (x) => { var InvOut = BPCords.slice(x,(x+1));      // Pull X/Y Cords from Init
   var ShfldOut = InvOut.flat(1); return rand(ShfldOut);}; // Shuffle em
  BPCords = [ [0,0,0,0], // Null entry 0
   [2185,2050,265,140],  [2350,2215,265,140],  [2515,2380,265,140],  [2680,2545,265,140],  // 0. | O | O | O | O |←-165
   [2185,2050,410,285],  [2350,2215,410,285],  [2515,2380,410,285],  [2680,2545,410,285],  // 1. | O | O | O | O |↓+145
   [2185,2050,555,430],  [2350,2215,555,430],  [2515,2380,555,430],  [2680,2545,555,430],  // 2. | O | O | O | O |↑-145
   [2185,2050,700,575],  [2350,2215,700,575],  [2515,2380,700,575],  [2680,2545,700,575],  // 3. | O | O | O | O |→+165
   [2185,2050,845,720],  [2350,2215,845,720],  [2515,2380,845,720],  [2680,2545,845,720],  // 4. | O | O | O | O |
   [2185,2050,990,865],  [2350,2215,990,865],  [2515,2380,990,865],  [2680,2545,990,865],  // 5. | O | O | O | O | 
   [2185,2050,1135,1010],[2350,2215,1135,1010],[2515,2380,1135,1010],[2680,2545,1135,1010] // 6. | O | O | O | O |
  ];
  
 
 }; 
 BackpackInit();
 alert(Bag(28));







// Script Start
 Conditions();
 switch (STATUS) {
  case "Closed": /*flash(STATUS);*/  break;
  case "Bots Disabled": flash(STATUS); break;
  case "Background": flash(STATUS); break;
  case "Ready": Shuffle(); Conditions(); flash(STATUS); 
   for (var loops = 1; STATUS == "Ready"; loops++, Shuffle(), Conditions()){    
    touch(bankWAIT, BANK);
    touch(psetWAIT, PSET); 
    touch(invWAIT, INV);    
    touch(startWAIT, START);     
    sleepFor(restartWAIT);
    flash("loops: " + loops) 
    if (STATUS != "Ready") { flash("Bot Closing"); sleepFor(400);}; 
   }; 
  default: flashLong("Script Error"); break;
 };
exit();
