  // Clarence Willey Conditionals

     var name = prompt('Who do you miss? \n Enter that persons name here '); //<--- getting name to fill var
     var when = prompt('How many days since you last saw ' + name + '\n  Please Enter the number of days here.'); // <---- getting # of days
     var hours = prompt('How many hours in a day? \n Please enter the number of hours in a standard earth day here.');// <---- collecting number of hours in a day which should be 24
    var min = prompt('How many minutes in an hour? \n Please enter that number here.'); // <--- collecting minutes from the human
    var answer = when * hours * min;   // formula to fo math to find the answer
  console.log(answer);  // printing the answer to the console

   (answer > 4320) ? console.log(name + ' I miss you so much!') : console.log(name + ' I just saw you yesterday!'); //decision time


