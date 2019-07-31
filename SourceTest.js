setTimeout(() => exit());
           /*    Button Locations and Wait Times    */                 
         //    |   Max X | Min X | Max Y | Min Y | //
 var BANK    = [   [1933,  1863], [504,   108]   ]; 
 var PSET    = [   [840,    740], [1290, 1205]   ];
 var START   = [   [2390,  1365], [1320, 1220]   ];
 var SKILL   = [   [500,    360], [980,   840]   ];
 var BOB     = [   [2025,  1935], [1245, 1165]   ];
 var BOBTAKE = [   [2270,  2215], [1120, 1070]   ]; 
 var TEST    = [   [700,    800], [1200, 1400]   ];
 //                |   | Max  | Min |   |   //
 var bankWAIT    = [   [1700,   2700]   ]; // Set wait time variances here
 var psetWAIT    = [   [1600,   3000]   ];//
 var invWAIT     = [   [1500,   2800]   ];
 var startWAIT   = [   [1700,   3000]   ];
 var restartWAIT = [   [11000, 12500]   ];

                     /*    Functions    */
 const Shuffle = () => {               // Take above values
   BANK        = Mix(BANK);           // and shuffle them back
   PSET        = Mix(PSET);          // 
   START       = Mix(START);        //
   SKILL       = Mix(SKILL);       //
   BOB         = Mix(BOB);        //
   BOBTAKE     = Mix(BOBTAKE);   //
   TEST        = Mix(TEST);     //
   bankWAIT    = Mix(bankWAIT);// ... This is just fun
   psetWAIT    = Mix(psetWAIT);
   invWAIT     = Mix(invWAIT);   
   startWAIT   = Mix(startWAIT); 
   restartWAIT = Mix(restartWAIT);};

                      /*    Sleep    */ 
 const Sleep = time => {            // Currently working on this one, below untested          
  var now = new Date().getTime(); while (new Date().getTime() < now + time[1]){ } };

                      /*    Random    */
 const Mix = (Nmbrs) => {            // Cycles through each array with set of Min/Max
   const Blndr = (Rndm) => {        //  Max #     Min #           Min #
    return Math.floor(Math.random() * (Rndm[0] - Rndm[1] + 1)) + Rndm[1];};
   if (Array.isArray(Nmbrs)) {    // Check for both Min/Max
    return Nmbrs.flatMap(Blndr); }
   else { alert("Mixing Error");};};
   
                /*    Backpack! Backpack!    */
 const Bag = (numsIn) => {                  // 
   const Init = {                          // Set Column and Row locations
    Columns : [ [2185,2050],[2350,2215],[2515,2380],[2680,2545] ],
    Rows : [ [265,140],[410,285],[555,430],[700,575],[845,720],[990,865],[1135,1010] ]};
   var Slot = [], R = Math.ceil(numsIn*(7/28)); C = Math.ceil(numsIn/(28/4)-1);  
   Slot = [ Init.Columns[C], Init.Rows[R] ];
 return Mix(Slot); };                 // Calculate Row/Column location and return
 
                   /*    Touch Input    */
 const Touch = (loc) => { loc.flat(1); //
    if (loc.length == 2) {            // Tap command, tippy taps
   var shll = shell(`input tap ${loc[0]} ${loc[1]}`,true,0); }
  else if (loc.length == 4) {       // Swipe command if set for two, untested in game
   var shll = shell(`input swipe ${loc[0]} ${loc[1]} ${loc[2]} ${loc[3]}`,true,0); }; };
 
                 /*    Conditions Check    */
 var Conditions = () => { Sleep(10);      // Check PID of game, is it open?
  var shll = shell("cat /proc/$(pidof com...android)/oom_adj", true, 0);
  STATUS = parseInt(global(`%BotToggle`),10) + parseInt(shll,10) || null;
  if (STATUS >= 9) { STATUS = `bkgrd`; };
  switch (STATUS){                    // Add value of toggle & PID, continue if ready
   default: alert("Conditions Error"); exit();
   case null: STATUS = "Closed"; flash(STATUS); exit();
   case `bkgrd`: STATUS = "Background"; flash(STATUS); exit();
   case 3: STATUS = "Bots Disabled"; flash(STATUS); exit();
   case 2: STATUS = "Ready"; flash(STATUS); break; }; };
 
                 /*    Script Start    */
 Conditions(); Shuffle();             // Well this here needs som work                     
 if (STATUS == "Ready") { Shuffle(); Conditions(); 
   for (var loops = 1; STATUS == "Ready"; loops++, Shuffle(), Conditions()){    
    Sleep(bankWAIT);               // Action Cycle Start
    Touch(BANK);                  // 
    Sleep(psetWAIT);             //
    Touch(PSET);                //
    Sleep(invWAIT);            //
    Touch(Bag(2));            //
    Sleep(startWAIT);        //
    Touch(START);           //
    Sleep(restartWAIT);    // Action Cycle End
    flash("loops: " + loops); 
    if (STATUS == "Ready") { }
    else { flash("Bot Closing"); Sleep(400); break; } }; }
 
exit();
