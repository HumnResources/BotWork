setTimeout(() => exit());
             /*    Button Locations and Wait Times    */                 
           //     |  Max X | Min X | Max Y | Min Y | //
 var setBANK    = [   [1933, 1863], [504,   108]   ]; 
 var setPSET    = [   [840,   740], [1290, 1205]   ];
 var setSTART   = [   [2390, 1365], [1320, 1220]   ];
 var setSKILL   = [   [500,   360], [980,   840]   ];
 var setBOB     = [   [2025, 1935], [1245, 1165]   ];
 var setBOBTAKE = [   [2270, 2215], [1120, 1070]   ]; 
 var setHOME    = [   [730,   730], [2860, 3860]   ];
 var setBACK    = [   [2860, 2860], [1250, 1250]   ];
 //                   |   | Max  | Min |   |   //
 var setbankWAIT    = [   [2000,   4000]   ]; // Set wait time variances here
 var setpsetWAIT    = [   [2000,   3500]   ];//
 var setinvWAIT     = [   [2000,   3200]   ];
 var setstartWAIT   = [   [2000,   3000]   ];
 var setrestartWAIT = [   [11000, 12500]   ];
 var settst         = [   [1420,   2875]   ]; 
   
                     /*    Functions    */
 const Shuffle = () => {               // Take above values
  BANK        = Mix(setBANK);         // and shuffle them back
  PSET        = Mix(setPSET);        // with random # between range
  START       = Mix(setSTART);      //
  SKILL       = Mix(setSKILL);     //
  BOB         = Mix(setBOB);      //
  BOBTAKE     = Mix(setBOBTAKE); //
  BACK        = Mix(setBACK);   // ... This is just fun lol
  bankWAIT    = parseInt(Mix(setbankWAIT));
  psetWAIT    = parseInt(Mix(setpsetWAIT));
  invWAIT     = Mix(setinvWAIT);   
  startWAIT   = parseInt(Mix(setstartWAIT)); 
  restartWAIT = parseInt(Mix(setrestartWAIT)); 
  HOME        = Mix(setHOME);
  TEST        = Mix(settst);};

                      /*    Sleep    */ 
 const Sleep = setTime => {         // Parse set time to integer, wait in milliseconds
  setTime = parseInt(setTime);     //
  var now = new Date().getTime(); while (new Date().getTime() < now + setTime){ } };  
  
                      /*    Random    */
 const Mix = Nmbrs => {              // Cycles through each array with set of Max[0]/Min[1]
  const Blnd = Rndm => Math.floor(Math.random() * (Rndm[0] - Rndm[1] + 1)) + Rndm[1];
  if (Array.isArray(Nmbrs)) { return Nmbrs.flatMap(Blnd);} 
  else { flashLong(`Mixing Error | ${Nmbrs}`);};};
  
                /*    Backpack! Backpack!    */
 const Bag = numsIn => {                    // 
  const Init = {                           // Set Column and Row locations
   Columns : [ [2185,2050],[2350,2215],[2515,2380],[2680,2545] ],
   Rows : [ [265,140],[410,285],[555,430],[700,575],[845,720],[990,865],[1135,1010] ]};   
  var Slot = [], C = Math.ceil(numsIn*(4/28)-1),  R = Math.ceil(numsIn*(7/28)-1);
  var Slot = [ Init.Columns[C], Init.Rows[R] ];
 return Mix(Slot); };                  // Calculate inv slot location and return

                   /*    Touch Input    */
 const Touch = loc => {                // Tap/swipe commands
  switch (loc.length) {               // Swipe untested
   case 2: return shll = shell(`input tap ${loc[0]} ${loc[1]}`,true,0);   
   case 4: return shll = shell(`input swipe ${loc[0]} ${loc[1]} ${loc[2]} ${loc[3]}`,true,0); }; };

                  /*    Conditions Check    */
 const Conditions = () => { Sleep(100);    // Check PID of game, is it open?
  var shll = shell("cat /proc/$(pidof com...android)/oom_adj", true, 0);
  STATUS = parseInt(global(`%BotToggle`),10) + parseInt(shll,10) || null;
  if (STATUS >= 9) { STATUS = `bkgrd`; };
  switch (STATUS){                     // Add value of toggle & PID, continue if ready
   default: flashLong("Conditions Error"); exit();
   case null: STATUS = "Closed"; flash(STATUS); exit();
   case `bkgrd`: STATUS = "Background"; flash(STATUS); exit();
   case 2: STATUS = "Bots Disabled"; flash(STATUS); exit();
   case 1: STATUS = "Ready"; break; }; };
 
                 /*    Script Start    */
 Sleep(1000);                         //
 Conditions(); Shuffle();            // Script start, WIP                  
 if (STATUS == "Ready") {           //
  flash(STATUS);                   //
   while (STATUS == "Ready"){     //
  	 Sleep(bankWAIT);             //
  		Touch(BANK);                //
  		Sleep(psetWAIT);           //
  		Touch(PSET);              //
  		Sleep(invWAIT);          //
  		Touch(Bag(2));          //
  		Sleep(startWAIT);      //
  		Touch(START);         //
  		Sleep(restartWAIT);  //
    flash("Loop done")  //
    Shuffle(); Conditions();
    if (STATUS != "Ready") { flash("Bot Closing"); Sleep(400); exit(); }; }; }
 else { flashLong("Script Error"); };
exit();
 




 
