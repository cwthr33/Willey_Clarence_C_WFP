// Clarence Willey Conditional


 var name = prompt('Enter your name in the space provided below.');// collecting the persons name
 var hours = prompt('Please enter your hours worked for this week in the space provided below.');// collecting hours worked
 var pay = prompt('Please enter your hourly rate of pay.\n Example 12.00.');// collecting the persons pay rate
 var total = hours * pay; // here we will calculate the total pay earned



(total >= 480)? console.log(name+ ', you will be paid ' + total + ' dollars for your hours worked this week!') : console.log(name + ', because you worked less than your scheduled 40 hours you will be paid ' + total + ' dollars this week. Please remember attendance is important.');   // deciding what to say if true or false




