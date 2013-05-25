 // Clarence Willey, 05/24/2013 Conditionals

 // I work in a call center so I will use this to calc calls per hr for an agent

 var callsPerHr = function(calls,secsPshift,secsPhr){
     var callspHr = calls / (secsPshift / secsPhr)        // code to run function
     return callspHr;

 }

   var stat = callsPerHr(85, 28800, 3600);
  console.log('Clarence takes  ' + stat + '  calls per hour.')







