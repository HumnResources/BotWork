setTimeout(() => exit());
//               | Max X | Min X | Max Y | Min Y | Button Max Size
 var BANK =    [   [1933,  1863], [504,   108]   ]; 
 var PSET =    [   [840,    740], [1290, 1205]   ];
 var START =   [   [2390,  1365], [1320, 1220]   ];
 var SKILL =   [   [500,0], [360,0]   ];
 var BOB =     [   [2025,  1935], [1245, 1165]   ];
 var BOBTAKE = [   [2270,  2215], [1120, 1070]   ]; 
 //                   aa | Max | Min |         | Wait Times
 var bankWAIT =    [   [1700, 2700]   ];
 var psetWAIT =    [   [1600, 3000]   ];
 var invWAIT =     [   [1500, 2800]   ];
 var startWAIT =   [   [1700, 3000]   ];
 var restartWAIT = [   [11000, 12500] ];
 var STATUS;
 
 /*
 const Mix = (Nmbrs) => { 
  const Randomize = (Rndm) => {
   return Math.floor(Math.random() * (Rndm[0] - Rndm[1] + 1)) + Rndm[1];};
 return Nmbrs.map(Randomize); }; 
 */
 
 
 
 
 
 
 
                    /*    TESTING    */
 

 
 const Mix = (Nmbrs) => { 
  const Randomize = (Rndm) => {
   return Math.floor(Math.random() * (Rndm[0] - Rndm[1] + 1)) + Rndm[1];};
  if (Array.isArray(Nmbrs)) {
   return Nmbrs.map(Randomize); }
  else { alert("Mixing Error");
 };
 const Bag = (numsIn) => {   // Backpack! Backpack! ...      ï
  const Init = { 
   Column : [ 
    [2185,2050],[2350,2215],[2515,2380],[2680,2545] ],
   Row : [ 
    [265,140],[410,285],[555,430],[700,575],[845,720],[990,865],[1135,1010] ]};
  var slot = [], xR, yC;
   xR = Math.floor(numsIn*(7/28)-1); yC = Math.ceil(numsIn*(4/28)-1);
   slot = [ Init.Column[yC], Init.Row[xR] ];
 return Mix(slot); };
  
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
                          // var ShfldSlot = [Shfl];
 /*  return InvSlot.map(Mix);
   }; // Shuffle em
  BPCords = [                                              //        | Bag(0) = Inv Slot 1         |  Backpack Layout  |
   [2185,2050,265,140],  [2350,2215,265,140],  [2515,2380,265,140],  [2680,2545,265,140],    // 0. | 0  | 1  | 2  | 3  |         
   [2185,2050,410,285],  [2350,2215,410,285],  [2515,2380,410,285],  [2680,2545,410,285],    // 1. | 4  | 5  | 6  | 7  |
   [2185,2050,555,430],  [2350,2215,555,430],  [2515,2380,555,430],  [2680,2545,555,430],    // 2. | 8  | 9  | 10 | 11 |
   [2185,2050,700,575],  [2350,2215,700,575],  [2515,2380,700,575],  [2680,2545,700,575],    // 3. | 12 | 13 | 14 | 15 |
   [2185,2050,845,720],  [2350,2215,845,720],  [2515,2380,845,720],  [2680,2545,845,720],    // 4. | 16 | 17 | 18 | 19 |
   [2185,2050,990,865],  [2350,2215,990,865],  [2515,2380,990,865],  [2680,2545,990,865],    // 5. | 20 | 21 | 22 | 23 | 
   [2185,2050,1135,1010],[2350,2215,1135,1010],[2515,2380,1135,1010],[2680,2545,1135,1010]]; // 6. | 24 | 25 | 26 | 27 |
 };  
 */
 
 exit();
 
 
                   /*    TESTING    */ 


// 2079 10110 11841





 
 var Shuffle = () => { 
  BANK = Rand(BANK);
  PSET = Rand(PSET);
  START = Rand(START);
  bankWAIT = Rand(bankWAIT);
  psetWAIT = Rand(psetWAIT);
  invWAIT = Rand(invWAIT);
  startWAIT = Rand(startWAIT); 
  restartWAIT = Rand(restartWAIT);
 };                                                        // Shuffle() End
 
 
 // Functions 
 var Rand = num => {        // Array | [0]=Max1 | [1]=Min1 | [3]=Max2 | [3]=Min2 |
  switch (num.length) {     //       | [4]=Max3 | [5]=Min3 | [6]=Max4 | [7]=Min4 |
   case 2: var tmp = [];    // Args  |   Max    |   Min    |   Min    |
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
   return tmp;                                             // Returns 1 Random Number
   case 4: var tmp = []; 
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
    tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);
   return tmp;                            tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);                 // Returns 2 Random Numbers
   case 8: var tmp = []; 
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
    tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);
    tmp.push(Math.floor(Math.random() * (num[4] - num[5] + 1)) + num[5]);
    tmp.push(Math.floor(Math.random() * (num[6] - num[7] + 1)) + num[7]);
   return tmp;                                             // Returns 4 Random Numbers
   default: flash("Rand Error"); exit(); };
 };                                                        // Rand() End

 
 var Sleep = time => { var now = new Date().getTime();     // Sleepy time
   while (new Date().getTime() < now + time){ } 
 }; 
 var Touch = (time, loc) => { 
  switch (loc.length) { 
   case 2: Sleep(time);           
     //flash("case 2 touch");                                // Generic tingle tap
    var tskr = shell("input tap ${loc[0]} ${loc[1]}", true, time);
   break; 
   case 4: Sleep(time);                                    // Swipe action for menu selection
    var tskr = shell("input tap ${loc[0]} ${loc[1]} ${loc[2]} ${loc[3]}", true, time);
   break;
   default: Sleep(200); alert("Touch err"); exit();
   return tskr; }; 
 };
 var Conditions = () => { 
  Sleep(30);
  var tskr = shell("cat /proc/$(pidof com.jagex.runescape.android)/oom_adj", true, 0);
  STATUS = ((parseInt(tskr, 10))+(parseInt(global("%BotToggle"), 10))) || null;
  if      (STATUS >= 5)    { flash("Background"); exit(); }
  else if (STATUS == null) { flash("Game Closed"); exit(); }
  else if (STATUS == 4)    { flash("Bots Disabled"); exit(); }
  else if (STATUS == 3)    { STATUS = "Ready"; }
  else                     { alert(STATUS); exit(); };
 };             
 var BackpackInit = () => { alert("Backpack Init...");     // Backpack! Backpack! ...              
  Bag = (x) => { var InvOut = BPCords.slice(x,(x+1));      // Pull X/Y Cords from Init | x = Inventory slot #
   var ShfldOut = InvOut.flat(1); return Rand(ShfldOut);
   }; // Shuffle em
  BPCords = [                                              //        | Bag(0) = Inv Slot 1         |  Backpack Layout  |
   [2185,2050,265,140],  [2350,2215,265,140],  [2515,2380,265,140],  [2680,2545,265,140],    // 0. | 0  | 1  | 2  | 3  |         
   [2185,2050,410,285],  [2350,2215,410,285],  [2515,2380,410,285],  [2680,2545,410,285],    // 1. | 4  | 5  | 6  | 7  |
   [2185,2050,555,430],  [2350,2215,555,430],  [2515,2380,555,430],  [2680,2545,555,430],    // 2. | 8  | 9  | 10 | 11 |
   [2185,2050,700,575],  [2350,2215,700,575],  [2515,2380,700,575],  [2680,2545,700,575],    // 3. | 12 | 13 | 14 | 15 |
   [2185,2050,845,720],  [2350,2215,845,720],  [2515,2380,845,720],  [2680,2545,845,720],    // 4. | 16 | 17 | 18 | 19 |
   [2185,2050,990,865],  [2350,2215,990,865],  [2515,2380,990,865],  [2680,2545,990,865],    // 5. | 20 | 21 | 22 | 23 | 
   [2185,2050,1135,1010],[2350,2215,1135,1010],[2515,2380,1135,1010],[2680,2545,1135,1010]]; // 6. | 24 | 25 | 26 | 27 |
 };                                                        // Backpacking Done


// Conditions();                                             // Script Start
 if (STATUS == "Ready") { Shuffle(); Conditions(); BackpackInit();
   for (var loops = 1; STATUS == "Ready"; loops++, Shuffle(), Conditions()){    
    Touch(bankWAIT, BANK);
    Touch(psetWAIT, PSET); 
    Touch(invWAIT, Bag(2));    
    Touch(startWAIT, START);     
    Sleep(restartWAIT);
    flash("loops: " + loops); 
    if (STATUS == "Ready") { }
    else { flash("Bot Closing"); Sleep(400); } }; 
  }
 else if (STATUS != "Ready") {alert("Error: Status Not Ready"); } 
 else{ alert("Script Error");};




exit();




/* To Implement

const Mix = (Nmbrs) => { 
  const Randomize = (Rndm) => {
   return Math.floor(Math.random() * (Rndm[0] - Rndm[1] + 1)) + Rndm[1];};
  if (Array.isArray(Nmbrs)) {
   return Nmbrs.map(Randomize); }
  else { alert("Mixing Error");
 };
 const Bag = (numsIn) => {   // Backpack! Backpack! ...      ï
  const Init = { 
   Column : [ 
    [2185,2050],[2350,2215],[2515,2380],[2680,2545] ],
   Row : [ 
    [265,140],[410,285],[555,430],[700,575],[845,720],[990,865],[1135,1010] ]};
  var slot = [], xR, yC;
   xR = Math.floor(numsIn*(7/28)-1); yC = Math.ceil(numsIn*(4/28)-1);
   slot = [ Init.Column[yC], Init.Row[xR] ];
 return Mix(slot); };


// Functions 
 var Rand = num => {        // Array | [0]=Max1 | [1]=Min1 | [3]=Max2 | [3]=Min2 |
  switch (num.length) {     //       | [4]=Max3 | [5]=Min3 | [6]=Max4 | [7]=Min4 |
   case 2: var tmp = [];    // Args  |   Max    |   Min    |   Min    |
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
   return tmp;                                             // Returns 1 Random Number
   case 4: var tmp = []; 
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
    tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);
   return tmp;                            tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);                 // Returns 2 Random Numbers
   case 8: var tmp = []; 
    tmp.push(Math.floor(Math.random() * (num[0] - num[1] + 1)) + num[1]);
    tmp.push(Math.floor(Math.random() * (num[2] - num[3] + 1)) + num[3]);
    tmp.push(Math.floor(Math.random() * (num[4] - num[5] + 1)) + num[5]);
    tmp.push(Math.floor(Math.random() * (num[6] - num[7] + 1)) + num[7]);
   return tmp;                                             // Returns 4 Random Numbers
   default: flash("Rand Error"); exit(); };
 };                                                        // Rand() End


 Depricated -- Working
 
 var BackpackInit = () => { alert("Backpack Init...");     // Backpack! Backpack! ...              
  Bag = (x) => { var InvOut = BPCords.slice(x,(x+1));      // Pull X/Y Cords from Init | x = Inventory slot #
   var ShfldOut = InvOut.flat(1); return Rand(ShfldOut);
   }; // Shuffle em
  BPCords = [                                              //        | Bag(0) = Inv Slot 1         |  Backpack Layout  |
   [2185,2050,265,140],  [2350,2215,265,140],  [2515,2380,265,140],  [2680,2545,265,140],    // 0. | 0  | 1  | 2  | 3  |         
   [2185,2050,410,285],  [2350,2215,410,285],  [2515,2380,410,285],  [2680,2545,410,285],    // 1. | 4  | 5  | 6  | 7  |
   [2185,2050,555,430],  [2350,2215,555,430],  [2515,2380,555,430],  [2680,2545,555,430],    // 2. | 8  | 9  | 10 | 11 |
   [2185,2050,700,575],  [2350,2215,700,575],  [2515,2380,700,575],  [2680,2545,700,575],    // 3. | 12 | 13 | 14 | 15 |
   [2185,2050,845,720],  [2350,2215,845,720],  [2515,2380,845,720],  [2680,2545,845,720],    // 4. | 16 | 17 | 18 | 19 |
   [2185,2050,990,865],  [2350,2215,990,865],  [2515,2380,990,865],  [2680,2545,990,865],    // 5. | 20 | 21 | 22 | 23 | 
   [2185,2050,1135,1010],[2350,2215,1135,1010],[2515,2380,1135,1010],[2680,2545,1135,1010]]; // 6. | 24 | 25 | 26 | 27 |
 };




