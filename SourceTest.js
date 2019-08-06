setTimeout(() => exit());
             /*    Button Locations    */                 
            //     | Max X | Min X | Max Y | Min Y |    
 var setBANK    = [  [1933, 1863],  [504,   108]  ]; 
 var setPSET    = [  [840,   740],  [1290, 1205]  ];
 var setSTART   = [  [2390, 1365],  [1320, 1220]  ];
 var setSKILL   = [  [500,   360],  [980,   840]  ];
 var setBOB     = [  [2025, 1935],  [1245, 1165]  ];
 var setBOBTAKE = [  [2270, 2215],  [1120, 1070]  ]; 
             /*    Wait Times    */ 
            //        |   | Max  | Min |   | Set wait time variances here
 var setbankWAIT    = [   [1200,   4000]   ]; 
 var setpsetWAIT    = [   [1200,   3500]   ];
 var setinvWAIT     = [   [1200,   3200]   ];
 var setstartWAIT   = [   [1200,   3300]   ];
 var setrestartWAIT = [   [11000, 13000]   ];
 var setSKILLwait   = [   [1200,   2800]   ]; 

 var setINVrange    = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];   
 
                     /*    Functions    */
 const Shuffle = () => {               // Take above values
  BANK        = Mix(setBANK);         // and shuffle them back
  PSET        = Mix(setPSET);        // with random # between range
  START       = Mix(setSTART);      
  SKILL       = Mix(setSKILL);     
  BOB         = Mix(setBOB);      
  BOBTAKE     = Mix(setBOBTAKE); 
  bankWAIT    = parseInt(Mix(setbankWAIT));
  psetWAIT    = parseInt(Mix(setpsetWAIT));
  invWAIT     = parseInt(Mix(setinvWAIT));   
  startWAIT   = parseInt(Mix(setstartWAIT)); 
  restartWAIT = parseInt(Mix(setrestartWAIT)); 
  SKILLwait   = parseInt(Mix(setSKILLwait));
 };
     /*    Wait Time/Sleep  */ 
 const Sleep = setTime => {// Parse set time to integer, wait in milliseconds
  setTime = parseInt(setTime);     
  var now = new Date().getTime(); while (new Date().getTime() < now + setTime){ } 
 };  
     /*    Random Number  */
 const Mix = Nmbrs => {  // Cycles through each array with set of Max[0]/Min[1]
  const Blnd = Rndm => Math.floor(Math.random() * (Rndm[0] - Rndm[1] + 1)) + Rndm[1];
  if   (Array.isArray(Nmbrs))    { return Nmbrs.flatMap(Blnd);} 
  else { flashLong(`Mixing Error | ${Nmbrs}`);};
 };
     /*    Backpack! Backpack!    */
 const Bag = numsIn => {         // Set Column and Row locations
  const Column = {              // Return Randomized xy cords
   1: [2185,2050], 2: [2350,2215], 3: [2515,2380], 4: [2680,2545] }; 
  const Row = {
   1: [265,140], 2: [410,285], 3: [555,430], 4: [700,575], 5: [845,720], 6: [990,865], 7: [1135,1010] };
  var R = Math.ceil(numsIn*(7/28));     
  var C;if ([1,5, 9,13,17,21,25].includes(numsIn) == true) {C = 1;}
   else if ([2,6,10,14,18,22,26].includes(numsIn) == true) {C = 2;}
   else if ([3,7,11,15,19,23,27].includes(numsIn) == true) {C = 3;}
   else if ([4,8,12,16,20,24,28].includes(numsIn) == true) {C = 4;};
  var Slot = [Column[C],Row[R]];
  return Mix(Slot);
 };
     /*    Touch Input    */
 const Touch = loc => {  // Tap/swipe commands
  switch (loc.length) { // Swipe untested
   case 2: return shll = shell(`input tap ${loc[0]} ${loc[1]}`,true,0);   
   case 4: return shll = shell(`input swipe ${loc[0]} ${loc[1]} ${loc[2]} ${loc[3]}`,true,0); }; 
 };
     /*    Conditions Check    */
 const Conditions = () => {   // Check PID of game, is it open?
  var shll = shell("cat /proc/$(pidof com...android)/oom_adj", true, 0);
  STATUS = parseInt(global(`%BotToggle`),10) + parseInt(shll,10) || null;
  if (STATUS >= 9) { STATUS = `bkgrd`; };
  switch (STATUS){        // Add value of toggle & PID, continue if ready
   default: flashLong("Conditions Error"); exit();
   case null: STATUS = "Closed"; flash(STATUS); exit();
   case `bkgrd`: STATUS = "Background"; flash(STATUS); exit();
   case 2: STATUS = "Bots Disabled"; flash(STATUS); exit();
   case 1: STATUS = "Ready"; break; }; 
 };  
     /*    Array Shuffling    */
 const shuffleArray = array => {          
  for (var i = array.length - 1; i > 0; i--) {
   var j = Math.floor(Math.random() * (i + 1));
   var temp = array[i];  // Randomize input array
   array[i] = array[j]; // Return randomized array
   array[j] = temp; };
  return array;
  };
     /*    Random Inventory Touch List    */
 const RandInvTouch = () => {            // Get random range of Inv slots
  const InvShuffle = x => {             // Check game conditions
   Shuffle(); Conditions();            // Loop random Inv Slot cycle
   Sleep(SKILLwait);                  // Return after total Inv slots looped
   Touch(SKILL);
   Sleep(SKILLwait);
   Touch(Bag(x)); return; };
  var tmpShfl = shuffleArray(setINVrange);
  return tmpShfl.map(InvShuffle);
 };
     /*    Script Start    */
 Sleep(200);              // Script start, WIP 
 flash(STATUS);          // Touch loc and wait...
 Conditions();          
 Sleep(200);               
 setInterval(Conditions, 600);     
 Shuffle();                                       
 if (STATUS == "Ready") {      
  var l=1;         
  while (STATUS == "Ready"){     
   Sleep(bankWAIT);
   Touch(BANK);
   Sleep(psetWAIT);
   Touch(PSET);
   Sleep(startWAIT);
   for (x=0;x!==14;x++){
    Touch(SKILL);
    Sleep(SKILLwait);
    Touch(Bag(14));
    Sleep(SKILLwait); };
   l++;
   flash(`Loops done: ${l}`); 
   Shuffle(); Conditions();}; } 
 else { flashLong("Script Error"); };
exit();
 
